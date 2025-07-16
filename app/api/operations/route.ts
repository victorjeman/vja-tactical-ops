import { prisma } from "@/db/client";
import { createOperationSchema } from "@/lib/validation-schemas";
import { z } from "zod";
import { requireAuth, AuthenticatedRequest } from "@/lib/auth-middleware";

// Pagination and filtering query schema
const listOperationsQuerySchema = z.object({
  page: z.string().transform(Number).default("1"),
  limit: z.string().transform(Number).default("10"),
  search: z.string().optional(),
  status: z.enum(["PLANNING", "ACTIVE", "COMPLETED", "COMPROMISED", "ABORTED"]).optional(),
  priority: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// GET /api/operations - List all operations with pagination and filtering
export const GET = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const queryResult = listOperationsQuerySchema.safeParse(Object.fromEntries(searchParams));
    if (!queryResult.success) {
      return Response.json(
        { success: false, error: "Invalid query parameters", details: queryResult.error },
        { status: 400 }
      );
    }

    const { page, limit, search, status, priority, sortBy, sortOrder } = queryResult.data;

    // Build where clause
    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ];
    }
    if (status) where.status = status;
    if (priority) where.priority = priority;

    // Build order by
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: sortOrder };

    // Get total count for pagination
    const total = await prisma.operation.count({ where });

    // Get operations with pagination
    const operations = await prisma.operation.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        agents: {
          include: {
            agent: {
              select: {
                id: true,
                codename: true,
                status: true,
                riskLevel: true,
              },
            },
          },
        },
      },
    });

    const totalPages = Math.ceil(total / limit);

    return Response.json({
      success: true,
      data: {
        operations,
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
    console.error("Get operations error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch operations",
      },
      { status: 500 }
    );
  }
});

// POST /api/operations - Create a new operation
export const POST = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = createOperationSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { success: false, error: "Invalid request data", details: validationResult.error },
        { status: 400 }
      );
    }

    const operationData = validationResult.data;

    // Check if operation with this ID already exists
    const existingOperation = await prisma.operation.findUnique({
      where: { id: operationData.id },
    });

    if (existingOperation) {
      return Response.json(
        {
          success: false,
          error: "Operation with this ID already exists",
        },
        { status: 409 }
      );
    }

    // Create the operation
    const operation = await prisma.operation.create({
      data: {
        id: operationData.id,
        name: operationData.name,
        status: operationData.status || "PLANNING",
        priority: operationData.priority || "MEDIUM",
        location: operationData.location,
        progress: operationData.progress || 0,
        objectives: operationData.objectives,
        startDate: operationData.startDate ? new Date(operationData.startDate) : null,
        endDate: operationData.endDate ? new Date(operationData.endDate) : null,
      },
      include: {
        agents: {
          include: {
            agent: {
              select: {
                id: true,
                codename: true,
                status: true,
                riskLevel: true,
              },
            },
          },
        },
      },
    });

    return Response.json(
      {
        success: true,
        data: operation,
        message: "Operation created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create operation error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create operation",
      },
      { status: 500 }
    );
  }
});
