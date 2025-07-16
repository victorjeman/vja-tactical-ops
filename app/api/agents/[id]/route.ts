import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { updateAgentSchema } from "@/lib/validation-schemas";
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse } from "@/lib/api-utils";

// GET /api/agents/[id] - Get a specific agent by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        operations: {
          include: {
            operation: {
              select: {
                id: true,
                name: true,
                status: true,
                priority: true,
                progress: true,
              },
            },
          },
        },
        activities: {
          orderBy: { timestamp: "desc" },
          take: 20, // Get last 20 activities
        },
      },
    });

    if (!agent) {
      return notFoundResponse("Agent not found");
    }

    return successResponse(agent);
  } catch (error) {
    console.error("Get agent error:", error);
    return errorResponse("Failed to fetch agent", 500);
  }
}

// PUT /api/agents/[id] - Update a specific agent
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = updateAgentSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const updateData = validationResult.data;

    // Check if agent exists
    const existingAgent = await prisma.agent.findUnique({
      where: { id },
    });

    if (!existingAgent) {
      return notFoundResponse("Agent not found");
    }

    // Check if codename is being updated and if it's already taken
    if (updateData.codename && updateData.codename !== existingAgent.codename) {
      const existingCodename = await prisma.agent.findUnique({
        where: { codename: updateData.codename },
      });

      if (existingCodename) {
        return errorResponse("Agent with this codename already exists", 409);
      }
    }

    // Prepare update data
    const dataToUpdate: any = {};
    if (updateData.codename !== undefined) dataToUpdate.codename = updateData.codename;
    if (updateData.status !== undefined) dataToUpdate.status = updateData.status;
    if (updateData.riskLevel !== undefined) dataToUpdate.riskLevel = updateData.riskLevel;
    if (updateData.location !== undefined) dataToUpdate.location = updateData.location;
    if (updateData.lastSeen !== undefined) {
      dataToUpdate.lastSeen = updateData.lastSeen ? new Date(updateData.lastSeen) : null;
    }
    if (updateData.missionsCompleted !== undefined)
      dataToUpdate.missionsCompleted = updateData.missionsCompleted;

    // Update the agent
    const updatedAgent = await prisma.agent.update({
      where: { id },
      data: dataToUpdate,
      include: {
        operations: {
          include: {
            operation: {
              select: {
                id: true,
                name: true,
                status: true,
                priority: true,
                progress: true,
              },
            },
          },
        },
        activities: {
          orderBy: { timestamp: "desc" },
          take: 5,
        },
      },
    });

    return successResponse(updatedAgent, "Agent updated successfully");
  } catch (error) {
    console.error("Update agent error:", error);
    return errorResponse("Failed to update agent", 500);
  }
}

// DELETE /api/agents/[id] - Delete a specific agent
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if agent exists
    const existingAgent = await prisma.agent.findUnique({
      where: { id },
      include: {
        operations: true,
      },
    });

    if (!existingAgent) {
      return notFoundResponse("Agent not found");
    }

    // Check if agent is currently assigned to any operations
    if (existingAgent.operations.length > 0) {
      return errorResponse("Cannot delete agent assigned to active operations", 400);
    }

    // Delete the agent (this will cascade delete activities)
    await prisma.agent.delete({
      where: { id },
    });

    return successResponse({}, "Agent deleted successfully");
  } catch (error) {
    console.error("Delete agent error:", error);
    return errorResponse("Failed to delete agent", 500);
  }
}
