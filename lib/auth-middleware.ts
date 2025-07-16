import { NextRequest } from "next/server";
import { prisma } from "@/db/client";

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    id: string;
    email: string;
    username: string;
    role: string;
    isActive: boolean;
  };
}

export async function authenticateRequest(request: NextRequest): Promise<{
  success: boolean;
  user?: any;
  error?: string;
}> {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        success: false,
        error: "No valid session token provided",
      };
    }

    const token = authHeader.substring(7);

    // Find the session and include user data
    const session = await prisma.session.findUnique({
      where: { token },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true,
            role: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!session) {
      return {
        success: false,
        error: "Invalid session token",
      };
    }

    // Check if session has expired
    if (session.expiresAt < new Date()) {
      // Delete expired session
      await prisma.session.delete({
        where: { token },
      });
      return {
        success: false,
        error: "Session has expired",
      };
    }

    // Check if user is still active
    if (!session.user.isActive) {
      // Delete session for inactive user
      await prisma.session.delete({
        where: { token },
      });
      return {
        success: false,
        error: "User account is deactivated",
      };
    }

    return {
      success: true,
      user: session.user,
    };
  } catch (error) {
    console.error("Authentication error:", error);
    return {
      success: false,
      error: "Authentication failed",
    };
  }
}

export function requireAuth(handler: (request: AuthenticatedRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const authResult = await authenticateRequest(request);

    if (!authResult.success) {
      return Response.json(
        {
          success: false,
          error: authResult.error || "Authentication required",
        },
        { status: 401 }
      );
    }

    // Add user to request object
    const authenticatedRequest = request as AuthenticatedRequest;
    authenticatedRequest.user = authResult.user;

    return handler(authenticatedRequest);
  };
}

export function requireRole(allowedRoles: string[]) {
  return (handler: (request: AuthenticatedRequest) => Promise<Response>) => {
    return requireAuth(async (request: AuthenticatedRequest) => {
      if (!request.user) {
        return Response.json(
          {
            success: false,
            error: "Authentication required",
          },
          { status: 401 }
        );
      }

      if (!allowedRoles.includes(request.user.role)) {
        return Response.json(
          {
            success: false,
            error: "Insufficient permissions",
          },
          { status: 403 }
        );
      }

      return handler(request);
    });
  };
}
