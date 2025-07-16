import { prisma } from "@/db/client";
import { createSystemSchema } from "@/lib/validation-schemas";
import { z } from "zod";
import { requireAuth, AuthenticatedRequest } from "@/lib/auth-middleware";

// Pagination and filtering query schema
const listSystemsQuerySchema = z.object({
  page: z.string().transform(Number).default("1"),
  limit: z.string().transform(Number).default("10"),
  search: z.string().optional(),
  status: z.enum(["ONLINE", "OFFLINE", "WARNING", "MAINTENANCE"]).optional(),
  type: z.enum(["PRIMARY_SERVER", "DATABASE", "FIREWALL", "NETWORK", "STORAGE", "PROCESSING"]).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// GET /api/systems - List all systems with pagination and filtering
export const GET = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const queryResult = listSystemsQuerySchema.safeParse(Object.fromEntries(searchParams));
    if (!queryResult.success) {
      return Response.json(
        { success: false, error: "Invalid query parameters", details: queryResult.error },
        { status: 400 }
      );
    }

    const { page, limit, search, status, type, sortBy, sortOrder } = queryResult.data;

    // Build where clause
    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { type: { contains: search, mode: "insensitive" } },
      ];
    }
    if (status) where.status = status;
    if (type) where.type = type;

    // Build order by
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: sortOrder };

    // Get total count for pagination
    const total = await prisma.system.count({ where });

    // Get systems with pagination
    const systems = await prisma.system.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalPages = Math.ceil(total / limit);

    return Response.json({
      success: true,
      data: {
        systems,
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
    console.error("Get systems error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch systems",
      },
      { status: 500 }
    );
  }
});

// POST /api/systems - Create a new system
export const POST = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = createSystemSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { success: false, error: "Invalid request data", details: validationResult.error },
        { status: 400 }
      );
    }

    const systemData = validationResult.data;

    // Check if system with this ID already exists
    const existingSystem = await prisma.system.findUnique({
      where: { id: systemData.id },
    });

    if (existingSystem) {
      return Response.json(
        {
          success: false,
          error: "System with this ID already exists",
        },
        { status: 409 }
      );
    }

    // Create the system
    const system = await prisma.system.create({
      data: {
        id: systemData.id,
        name: systemData.name,
        type: systemData.type,
        status: systemData.status || "ONLINE",
        health: systemData.health || 100,
        cpu: systemData.cpu || 0,
        memory: systemData.memory || 0,
        storage: systemData.storage || 0,
        uptime: systemData.uptime || "0 days",
      },
    });

    return Response.json(
      {
        success: true,
        data: system,
        message: "System created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create system error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create system",
      },
      { status: 500 }
    );
  }
});
