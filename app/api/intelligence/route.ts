import { prisma } from "@/db/client";
import { createIntelligenceReportSchema } from "@/lib/validation-schemas";
import { z } from "zod";
import { requireAuth, AuthenticatedRequest } from "@/lib/auth-middleware";

// Pagination and filtering query schema
const listIntelligenceQuerySchema = z.object({
  page: z.string().transform(Number).default("1"),
  limit: z.string().transform(Number).default("10"),
  search: z.string().optional(),
  classification: z.enum(["TOP_SECRET", "SECRET", "CONFIDENTIAL", "UNCLASSIFIED"]).optional(),
  source: z.enum(["SIGINT", "HUMINT", "OSINT", "DIPLOMATIC", "TECHNICAL"]).optional(),
  threatLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  status: z.enum(["PENDING", "ACTIVE", "VERIFIED", "ARCHIVED"]).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// GET /api/intelligence - List all intelligence reports with pagination and filtering
export const GET = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const queryResult = listIntelligenceQuerySchema.safeParse(Object.fromEntries(searchParams));
    if (!queryResult.success) {
      return Response.json(
        { success: false, error: "Invalid query parameters", details: queryResult.error },
        { status: 400 }
      );
    }

    const { page, limit, search, classification, source, threatLevel, status, sortBy, sortOrder } =
      queryResult.data;

    // Build where clause
    const where: any = {};
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
      ];
    }
    if (classification) where.classification = classification;
    if (source) where.source = source;
    if (threatLevel) where.threatLevel = threatLevel;
    if (status) where.status = status;

    // Build order by
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: sortOrder };

    // Get total count for pagination
    const total = await prisma.intelligenceReport.count({ where });

    // Get intelligence reports with pagination
    const reports = await prisma.intelligenceReport.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalPages = Math.ceil(total / limit);

    return Response.json({
      success: true,
      data: {
        reports,
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
    console.error("Get intelligence reports error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch intelligence reports",
      },
      { status: 500 }
    );
  }
});

// POST /api/intelligence - Create a new intelligence report
export const POST = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = createIntelligenceReportSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { success: false, error: "Invalid request data", details: validationResult.error },
        { status: 400 }
      );
    }

    const reportData = validationResult.data;

    // Check if report with this ID already exists
    const existingReport = await prisma.intelligenceReport.findUnique({
      where: { id: reportData.id },
    });

    if (existingReport) {
      return Response.json(
        {
          success: false,
          error: "Intelligence report with this ID already exists",
        },
        { status: 409 }
      );
    }

    // Create the intelligence report
    const report = await prisma.intelligenceReport.create({
      data: {
        id: reportData.id,
        title: reportData.title,
        classification: reportData.classification || "CONFIDENTIAL",
        source: reportData.source,
        location: reportData.location,
        threatLevel: reportData.threatLevel || "MEDIUM",
        status: reportData.status || "PENDING",
        content: reportData.content,
        tags: reportData.tags || "[]",
      },
    });

    return Response.json(
      {
        success: true,
        data: report,
        message: "Intelligence report created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create intelligence report error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create intelligence report",
      },
      { status: 500 }
    );
  }
});
