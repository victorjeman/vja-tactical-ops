import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { assignAgentToOperationSchema } from "@/lib/validation-schemas";
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse } from "@/lib/api-utils";

// GET /api/operations/[id]/agents - Get agents assigned to an operation
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if operation exists
    const operation = await prisma.operation.findUnique({
      where: { id },
      include: {
        agents: {
          include: {
            agent: {
              select: {
                id: true,
                codename: true,
                status: true,
                riskLevel: true,
                location: true,
                lastSeen: true,
                missionsCompleted: true,
              },
            },
          },
        },
      },
    });

    if (!operation) {
      return notFoundResponse("Operation not found");
    }

    return successResponse(operation.agents);
  } catch (error) {
    console.error("Get operation agents error:", error);
    return errorResponse("Failed to fetch operation agents", 500);
  }
}

// POST /api/operations/[id]/agents - Assign an agent to an operation
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = assignAgentToOperationSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const { agentId, role } = validationResult.data;

    // Check if operation exists
    const operation = await prisma.operation.findUnique({
      where: { id },
    });

    if (!operation) {
      return notFoundResponse("Operation not found");
    }

    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      return notFoundResponse("Agent not found");
    }

    // Check if agent is already assigned to this operation
    const existingAssignment = await prisma.agentOperation.findUnique({
      where: {
        agentId_operationId: {
          agentId,
          operationId: id,
        },
      },
    });

    if (existingAssignment) {
      return errorResponse("Agent is already assigned to this operation", 409);
    }

    // Create the assignment
    const assignment = await prisma.agentOperation.create({
      data: {
        agentId,
        operationId: id,
        role,
      },
      include: {
        agent: {
          select: {
            id: true,
            codename: true,
            status: true,
            riskLevel: true,
            location: true,
            lastSeen: true,
            missionsCompleted: true,
          },
        },
        operation: {
          select: {
            id: true,
            name: true,
            status: true,
            priority: true,
          },
        },
      },
    });

    return successResponse(assignment, "Agent assigned to operation successfully");
  } catch (error) {
    console.error("Assign agent to operation error:", error);
    return errorResponse("Failed to assign agent to operation", 500);
  }
}

// DELETE /api/operations/[id]/agents - Remove an agent from an operation
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get("agentId");

    if (!agentId) {
      return errorResponse("Agent ID is required", 400);
    }

    // Check if assignment exists
    const assignment = await prisma.agentOperation.findUnique({
      where: {
        agentId_operationId: {
          agentId,
          operationId: id,
        },
      },
    });

    if (!assignment) {
      return notFoundResponse("Agent assignment not found");
    }

    // Remove the assignment
    await prisma.agentOperation.delete({
      where: {
        agentId_operationId: {
          agentId,
          operationId: id,
        },
      },
    });

    return successResponse({}, "Agent removed from operation successfully");
  } catch (error) {
    console.error("Remove agent from operation error:", error);
    return errorResponse("Failed to remove agent from operation", 500);
  }
}
