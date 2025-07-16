import { NextRequest } from "next/server";
import { prisma } from "@/db/client";

// GET /api/auth/session - Validate session and return user info
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json(
        {
          success: false,
          error: "No valid session token provided",
        },
        { status: 401 }
      );
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
      return Response.json(
        {
          success: false,
          error: "Invalid session token",
        },
        { status: 401 }
      );
    }

    // Check if session has expired
    if (session.expiresAt < new Date()) {
      // Delete expired session
      await prisma.session.delete({
        where: { token },
      });
      return Response.json(
        {
          success: false,
          error: "Session has expired",
        },
        { status: 401 }
      );
    }

    // Check if user is still active
    if (!session.user.isActive) {
      // Delete session for inactive user
      await prisma.session.delete({
        where: { token },
      });
      return Response.json(
        {
          success: false,
          error: "User account is deactivated",
        },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
      data: {
        user: session.user,
        session: {
          id: session.id,
          expiresAt: session.expiresAt,
          createdAt: session.createdAt,
        },
      },
    });
  } catch (error) {
    console.error("Session validation error:", error);
    return Response.json(
      {
        success: false,
        error: "Session validation failed",
      },
      { status: 500 }
    );
  }
}
