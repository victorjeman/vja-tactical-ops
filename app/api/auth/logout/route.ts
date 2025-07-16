import { NextRequest } from "next/server";
import { prisma } from "@/db/client";

// POST /api/auth/logout - Invalidate session
export async function POST(request: NextRequest) {
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

    // Find and delete the session
    const session = await prisma.session.findUnique({
      where: { token },
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

    // Delete the session
    await prisma.session.delete({
      where: { token },
    });

    return Response.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      {
        success: false,
        error: "Logout failed",
      },
      { status: 500 }
    );
  }
}
