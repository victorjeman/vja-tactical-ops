import { APIResponse, PaginatedAPIResponse } from "../../shared/types/api-types";

// Agent entity types
export interface Agent {
  id: string;
  codename: string;
  status: "ACTIVE" | "STANDBY" | "TRAINING" | "COMPROMISED" | "DECEASED";
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location: string;
  lastSeen: string | null;
  missionsCompleted: number;
  createdAt: string;
  updatedAt: string;
  operations?: AgentOperation[];
  activities?: AgentActivity[];
}

export interface AgentActivity {
  id: string;
  agentId: string;
  action: string;
  location: string;
  details: string;
  timestamp: string;
  agent?: {
    id: string;
    codename: string;
  };
}

export interface AgentOperation {
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
    progress: number;
  };
}

// API Response types
export type AgentDetailsAPIResponse = APIResponse<Agent>;
export type AgentListAPIResponse = PaginatedAPIResponse<Agent>;
export type AgentActivitiesAPIResponse = PaginatedAPIResponse<AgentActivity>;

// Query parameter types
export interface AgentListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: "ACTIVE" | "STANDBY" | "TRAINING" | "COMPROMISED" | "DECEASED";
  riskLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface AgentActivitiesQueryParams {
  page?: number;
  limit?: number;
}

// Form types
export interface CreateAgentData {
  id: string;
  codename: string;
  status?: "ACTIVE" | "STANDBY" | "TRAINING" | "COMPROMISED" | "DECEASED";
  riskLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location: string;
  lastSeen?: string;
  missionsCompleted?: number;
}

export interface UpdateAgentData {
  codename?: string;
  status?: "ACTIVE" | "STANDBY" | "TRAINING" | "COMPROMISED" | "DECEASED";
  riskLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  location?: string;
  lastSeen?: string;
  missionsCompleted?: number;
}

export interface CreateAgentActivityData {
  action: string;
  location: string;
  details: string;
}
