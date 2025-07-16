import { prisma } from "@/db/client";
import { createAgentSchema } from "@/lib/validation-schemas";
import { z } from "zod";
import { requireAuth, AuthenticatedRequest } from "@/lib/auth-middleware";

// Pagination and filtering query schema
const listAgentsQuerySchema = z.object({
  page: z.string().transform(Number).default("1"),
  limit: z.string().transform(Number).default("10"),
  search: z.string().optional(),
  status: z.enum(["ACTIVE", "STANDBY", "TRAINING", "COMPROMISED", "DECEASED"]).optional(),
  riskLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// GET /api/agents - List all agents with pagination and filtering
export const GET = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const queryResult = listAgentsQuerySchema.safeParse(Object.fromEntries(searchParams));
    if (!queryResult.success) {
      return Response.json(
        { success: false, error: "Invalid query parameters", details: queryResult.error },
        { status: 400 }
      );
    }

    const { page, limit, search, status, riskLevel, sortBy, sortOrder } = queryResult.data;

    // Build where clause
    const where: any = {};
    if (search) {
      where.OR = [
        { codename: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ];
    }
    if (status) where.status = status;
    if (riskLevel) where.riskLevel = riskLevel;

    // Build order by
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: sortOrder };

    // Get total count for pagination
    const total = await prisma.agent.count({ where });

    // Get agents with pagination
    const agents = await prisma.agent.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        operations: {
          include: {
            operation: {
              select: {
                id: true,
                name: true,
                status: true,
              },
            },
          },
        },
        activities: {
          orderBy: { timestamp: "desc" },
          take: 5, // Get last 5 activities
        },
      },
    });

    const totalPages = Math.ceil(total / limit);

    return Response.json({
      success: true,
      data: {
        agents,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Get agents error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch agents",
      },
      { status: 500 }
    );
  }
});

// POST /api/agents - Create a new agent
export const POST = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = createAgentSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { success: false, error: "Invalid request data", details: validationResult.error },
        { status: 400 }
      );
    }

    const agentData = validationResult.data;

    // Check if agent with this ID already exists
    const existingAgent = await prisma.agent.findUnique({
      where: { id: agentData.id },
    });

    if (existingAgent) {
      return Response.json(
        {
          success: false,
          error: "Agent with this ID already exists",
        },
        { status: 409 }
      );
    }

    // Check if codename is already taken
    const existingCodename = await prisma.agent.findUnique({
      where: { codename: agentData.codename },
    });

    if (existingCodename) {
      return Response.json(
        {
          success: false,
          error: "Agent with this codename already exists",
        },
        { status: 409 }
      );
    }

    // Create the agent
    const agent = await prisma.agent.create({
      data: {
        id: agentData.id,
        codename: agentData.codename,
        status: agentData.status || "STANDBY",
        riskLevel: agentData.riskLevel || "MEDIUM",
        location: agentData.location,
        lastSeen: agentData.lastSeen ? new Date(agentData.lastSeen) : null,
        missionsCompleted: agentData.missionsCompleted || 0,
      },
      include: {
        operations: {
          include: {
            operation: {
              select: {
                id: true,
                name: true,
                status: true,
              },
            },
          },
        },
      },
    });

    return Response.json(
      {
        success: true,
        data: agent,
        message: "Agent created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create agent error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create agent",
      },
      { status: 500 }
    );
  }
});
