import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { createAgentActivitySchema } from "@/lib/validation-schemas";
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
  notFoundResponse,
  getPaginationParams,
  createPaginatedResponse,
} from "@/lib/api-utils";

// GET /api/agents/[id]/activities - Get agent activities
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const { page, limit } = getPaginationParams(searchParams);

    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: { id },
    });

    if (!agent) {
      return notFoundResponse("Agent not found");
    }

    // Get total count for pagination
    const total = await prisma.agentActivity.count({
      where: { agentId: id },
    });

    // Get activities with pagination
    const activities = await prisma.agentActivity.findMany({
      where: { agentId: id },
      orderBy: { timestamp: "desc" },
      skip: ((page || 1) - 1) * (limit || 10),
      take: limit || 10,
    });

    const paginatedResult = createPaginatedResponse(activities, total, page || 1, limit || 10);

    return successResponse(paginatedResult);
  } catch (error) {
    console.error("Get agent activities error:", error);
    return errorResponse("Failed to fetch agent activities", 500);
  }
}

// POST /api/agents/[id]/activities - Create a new agent activity
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = createAgentActivitySchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const activityData = validationResult.data;

    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: { id },
    });

    if (!agent) {
      return notFoundResponse("Agent not found");
    }

    // Create the activity
    const activity = await prisma.agentActivity.create({
      data: {
        agentId: id,
        action: activityData.action,
        location: activityData.location,
        details: activityData.details,
      },
    });

    return successResponse(activity, "Activity logged successfully");
  } catch (error) {
    console.error("Create agent activity error:", error);
    return errorResponse("Failed to log activity", 500);
  }
}
