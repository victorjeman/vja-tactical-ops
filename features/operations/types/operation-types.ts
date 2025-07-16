import { APIResponse, PaginatedAPIResponse } from "../../shared/types/api-types";

// Operation entity types
export interface Operation {
  id: string;
  name: string;
  status: "PLANNING" | "ACTIVE" | "COMPLETED" | "COMPROMISED" | "ABORTED";
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location: string;
  progress: number;
  objectives: string;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
  agents?: OperationAgent[];
}

export interface OperationAgent {
  agentId: string;
  operationId: string;
  role: string;
  agent?: {
    id: string;
    codename: string;
    status: string;
    riskLevel: string;
    location: string;
    lastSeen: string | null;
    missionsCompleted: number;
  };
  operation?: {
    id: string;
    name: string;
    status: string;
    priority: string;
  };
}

// API Response types
export type OperationDetailsAPIResponse = APIResponse<Operation>;
export type OperationListAPIResponse = PaginatedAPIResponse<Operation>;
export type OperationAgentsAPIResponse = PaginatedAPIResponse<OperationAgent>;

// Query parameter types
export interface OperationListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: "PLANNING" | "ACTIVE" | "COMPLETED" | "COMPROMISED" | "ABORTED";
  priority?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface OperationAgentsQueryParams {
  page?: number;
  limit?: number;
}

// Form types
export interface CreateOperationData {
  id: string;
  name: string;
  status?: "PLANNING" | "ACTIVE" | "COMPLETED" | "COMPROMISED" | "ABORTED";
  priority?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location: string;
  progress?: number;
  objectives: string;
  startDate?: string;
  endDate?: string;
}

export interface UpdateOperationData {
  name?: string;
  status?: "PLANNING" | "ACTIVE" | "COMPLETED" | "COMPROMISED" | "ABORTED";
  priority?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location?: string;
  progress?: number;
  objectives?: string;
  startDate?: string;
  endDate?: string;
}

export interface AssignAgentToOperationData {
  agentId: string;
  role: string;
}
