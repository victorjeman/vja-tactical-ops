import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { updateOperationSchema } from "@/lib/validation-schemas";
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse } from "@/lib/api-utils";

// GET /api/operations/[id] - Get a specific operation by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

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

    return successResponse(operation);
  } catch (error) {
    console.error("Get operation error:", error);
    return errorResponse("Failed to fetch operation", 500);
  }
}

// PUT /api/operations/[id] - Update a specific operation
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = updateOperationSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const updateData = validationResult.data;

    // Check if operation exists
    const existingOperation = await prisma.operation.findUnique({
      where: { id },
    });

    if (!existingOperation) {
      return notFoundResponse("Operation not found");
    }

    // Prepare update data
    const dataToUpdate: any = {};
    if (updateData.name !== undefined) dataToUpdate.name = updateData.name;
    if (updateData.status !== undefined) dataToUpdate.status = updateData.status;
    if (updateData.priority !== undefined) dataToUpdate.priority = updateData.priority;
    if (updateData.location !== undefined) dataToUpdate.location = updateData.location;
    if (updateData.progress !== undefined) dataToUpdate.progress = updateData.progress;
    if (updateData.objectives !== undefined) dataToUpdate.objectives = updateData.objectives;
    if (updateData.startDate !== undefined) {
      dataToUpdate.startDate = updateData.startDate ? new Date(updateData.startDate) : null;
    }
    if (updateData.endDate !== undefined) {
      dataToUpdate.endDate = updateData.endDate ? new Date(updateData.endDate) : null;
    }

    // Update the operation
    const updatedOperation = await prisma.operation.update({
      where: { id },
      data: dataToUpdate,
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

    return successResponse(updatedOperation, "Operation updated successfully");
  } catch (error) {
    console.error("Update operation error:", error);
    return errorResponse("Failed to update operation", 500);
  }
}

// DELETE /api/operations/[id] - Delete a specific operation
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if operation exists
    const existingOperation = await prisma.operation.findUnique({
      where: { id },
      include: {
        agents: true,
      },
    });

    if (!existingOperation) {
      return notFoundResponse("Operation not found");
    }

    // Check if operation has assigned agents
    if (existingOperation.agents.length > 0) {
      return errorResponse("Cannot delete operation with assigned agents", 400);
    }

    // Delete the operation (this will cascade delete agent assignments)
    await prisma.operation.delete({
      where: { id },
    });

    return successResponse({}, "Operation deleted successfully");
  } catch (error) {
    console.error("Delete operation error:", error);
    return errorResponse("Failed to delete operation", 500);
  }
}
