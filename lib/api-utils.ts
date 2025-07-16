import { NextResponse } from "next/server";
import { z } from "zod";

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Success Response Helper
export function successResponse<T>(data: T, message?: string): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message,
  });
}

// Error Response Helper
export function errorResponse(message: string, status: number = 400): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status }
  );
}

// Validation Error Response Helper
export function validationErrorResponse(errors: z.ZodError): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: "Validation failed",
      details: errors.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      })),
    },
    { status: 400 }
  );
}

// Not Found Response Helper
export function notFoundResponse(message: string = "Resource not found"): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: 404 }
  );
}

// Unauthorized Response Helper
export function unauthorizedResponse(message: string = "Unauthorized"): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: 401 }
  );
}

// Forbidden Response Helper
export function forbiddenResponse(message: string = "Forbidden"): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: 403 }
  );
}

// Internal Server Error Response Helper
export function serverErrorResponse(message: string = "Internal server error"): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: 500 }
  );
}

// Pagination Helper
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export function getPaginationParams(searchParams: URLSearchParams): PaginationParams {
  return {
    page: parseInt(searchParams.get("page") || "1"),
    limit: parseInt(searchParams.get("limit") || "10"),
    search: searchParams.get("search") || undefined,
    sortBy: searchParams.get("sortBy") || undefined,
    sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "desc",
  };
}

// Database Query Helper
export function buildWhereClause(search?: string, filters?: Record<string, any>) {
  const where: any = {};

  if (search) {
    where.OR = [
      { codename: { contains: search, mode: "insensitive" } },
      { location: { contains: search, mode: "insensitive" } },
    ];
  }

  if (filters) {
    Object.assign(where, filters);
  }

  return where;
}

// Sort Helper
export function buildOrderBy(sortBy?: string, sortOrder: "asc" | "desc" = "desc") {
  if (!sortBy) {
    return { createdAt: sortOrder };
  }

  return { [sortBy]: sortOrder };
}

// Pagination Result Helper
export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export function createPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number
): PaginatedResult<T> {
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
}
