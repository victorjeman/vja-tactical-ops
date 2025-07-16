import { NextRequest } from "next/server";
import { prisma } from "@/db/client";
import { updateIntelligenceReportSchema } from "@/lib/validation-schemas";
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse } from "@/lib/api-utils";

// GET /api/intelligence/[id] - Get a specific intelligence report by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const report = await prisma.intelligenceReport.findUnique({
      where: { id },
    });

    if (!report) {
      return notFoundResponse("Intelligence report not found");
    }

    return successResponse(report);
  } catch (error) {
    console.error("Get intelligence report error:", error);
    return errorResponse("Failed to fetch intelligence report", 500);
  }
}

// PUT /api/intelligence/[id] - Update a specific intelligence report
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate request body
    const validationResult = updateIntelligenceReportSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const updateData = validationResult.data;

    // Check if report exists
    const existingReport = await prisma.intelligenceReport.findUnique({
      where: { id },
    });

    if (!existingReport) {
      return notFoundResponse("Intelligence report not found");
    }

    // Prepare update data
    const dataToUpdate: any = {};
    if (updateData.title !== undefined) dataToUpdate.title = updateData.title;
    if (updateData.classification !== undefined) dataToUpdate.classification = updateData.classification;
    if (updateData.source !== undefined) dataToUpdate.source = updateData.source;
    if (updateData.location !== undefined) dataToUpdate.location = updateData.location;
    if (updateData.threatLevel !== undefined) dataToUpdate.threatLevel = updateData.threatLevel;
    if (updateData.status !== undefined) dataToUpdate.status = updateData.status;
    if (updateData.content !== undefined) dataToUpdate.content = updateData.content;
    if (updateData.tags !== undefined) dataToUpdate.tags = updateData.tags;

    // Update the intelligence report
    const updatedReport = await prisma.intelligenceReport.update({
      where: { id },
      data: dataToUpdate,
    });

    return successResponse(updatedReport, "Intelligence report updated successfully");
  } catch (error) {
    console.error("Update intelligence report error:", error);
    return errorResponse("Failed to update intelligence report", 500);
  }
}

// DELETE /api/intelligence/[id] - Delete a specific intelligence report
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if report exists
    const existingReport = await prisma.intelligenceReport.findUnique({
      where: { id },
    });

    if (!existingReport) {
      return notFoundResponse("Intelligence report not found");
    }

    // Delete the intelligence report
    await prisma.intelligenceReport.delete({
      where: { id },
    });

    return successResponse({}, "Intelligence report deleted successfully");
  } catch (error) {
    console.error("Delete intelligence report error:", error);
    return errorResponse("Failed to delete intelligence report", 500);
  }
}
