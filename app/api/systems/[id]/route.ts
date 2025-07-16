import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { updateSystemSchema } from "@/lib/validation-schemas";
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse } from "@/lib/api-utils";

// GET /api/systems/[id] - Get a specific system by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const system = await prisma.system.findUnique({
      where: { id },
    });

    if (!system) {
      return notFoundResponse("System not found");
    }

    return successResponse(system);
  } catch (error) {
    console.error("Get system error:", error);
    return errorResponse("Failed to fetch system", 500);
  }
}

// PUT /api/systems/[id] - Update a specific system
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = updateSystemSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const updateData = validationResult.data;

    // Check if system exists
    const existingSystem = await prisma.system.findUnique({
      where: { id },
    });

    if (!existingSystem) {
      return notFoundResponse("System not found");
    }

    // Prepare update data
    const dataToUpdate: any = {};
    if (updateData.name !== undefined) dataToUpdate.name = updateData.name;
    if (updateData.type !== undefined) dataToUpdate.type = updateData.type;
    if (updateData.status !== undefined) dataToUpdate.status = updateData.status;
    if (updateData.health !== undefined) dataToUpdate.health = updateData.health;
    if (updateData.cpu !== undefined) dataToUpdate.cpu = updateData.cpu;
    if (updateData.memory !== undefined) dataToUpdate.memory = updateData.memory;
    if (updateData.storage !== undefined) dataToUpdate.storage = updateData.storage;
    if (updateData.uptime !== undefined) dataToUpdate.uptime = updateData.uptime;

    // Update the system
    const updatedSystem = await prisma.system.update({
      where: { id },
      data: dataToUpdate,
    });

    return successResponse(updatedSystem, "System updated successfully");
  } catch (error) {
    console.error("Update system error:", error);
    return errorResponse("Failed to update system", 500);
  }
}

// DELETE /api/systems/[id] - Delete a specific system
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if system exists
    const existingSystem = await prisma.system.findUnique({
      where: { id },
    });

    if (!existingSystem) {
      return notFoundResponse("System not found");
    }

    // Delete the system
    await prisma.system.delete({
      where: { id },
    });

    return successResponse({}, "System deleted successfully");
  } catch (error) {
    console.error("Delete system error:", error);
    return errorResponse("Failed to delete system", 500);
  }
}
