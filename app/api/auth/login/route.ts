import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/db/client";
import { loginSchema } from "@/lib/validation-schemas";

// POST /api/auth/login - User authentication
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid request data",
          details: validationResult.error,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { email, password } = validationResult.data;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid credentials",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!user.isActive) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Account is deactivated",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid credentials",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create session token
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Save session to database
    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Return user data (without password) and session token
    const { password: _, ...userWithoutPassword } = user;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          user: userWithoutPassword,
          token,
          expiresAt,
        },
        message: "Login successful",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Login failed",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
