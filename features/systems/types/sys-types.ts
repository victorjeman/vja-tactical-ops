import { APIResponse, PaginatedAPIResponse } from "../../shared/types/api-types";

// System entity types
export interface System {
  id: string;
  name: string;
  type: "PRIMARY_SERVER" | "DATABASE" | "FIREWALL" | "NETWORK" | "STORAGE" | "PROCESSING";
  status: "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";
  health: number;
  cpu: number;
  memory: number;
  storage: number;
  uptime: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export type SystemDetailsAPIResponse = APIResponse<System>;
export type SystemListAPIResponse = PaginatedAPIResponse<System>;

// Query parameter types
export interface SystemListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";
  type?: "PRIMARY_SERVER" | "DATABASE" | "FIREWALL" | "NETWORK" | "STORAGE" | "PROCESSING";
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// Form types
export interface CreateSystemData {
  id: string;
  name: string;
  type: "PRIMARY_SERVER" | "DATABASE" | "FIREWALL" | "NETWORK" | "STORAGE" | "PROCESSING";
  status?: "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";
  health?: number;
  cpu?: number;
  memory?: number;
  storage?: number;
  uptime?: string;
}

export interface UpdateSystemData {
  name?: string;
  type?: "PRIMARY_SERVER" | "DATABASE" | "FIREWALL" | "NETWORK" | "STORAGE" | "PROCESSING";
  status?: "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";
  health?: number;
  cpu?: number;
  memory?: number;
  storage?: number;
  uptime?: string;
}
