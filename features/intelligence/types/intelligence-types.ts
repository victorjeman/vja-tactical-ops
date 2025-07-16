import { APIResponse, PaginatedAPIResponse } from "../../shared/types/api-types";

// Intelligence entity types
export interface IntelligenceReport {
  id: string;
  title: string;
  classification: "TOP_SECRET" | "SECRET" | "CONFIDENTIAL" | "UNCLASSIFIED";
  source: "SIGINT" | "HUMINT" | "OSINT" | "DIPLOMATIC" | "TECHNICAL";
  location: string;
  threatLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "ACTIVE" | "VERIFIED" | "ARCHIVED";
  content: string;
  tags: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export type IntelligenceDetailsAPIResponse = APIResponse<IntelligenceReport>;
export type IntelligenceListAPIResponse = PaginatedAPIResponse<IntelligenceReport>;

// Query parameter types
export interface IntelligenceListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  classification?: "TOP_SECRET" | "SECRET" | "CONFIDENTIAL" | "UNCLASSIFIED";
  source?: "SIGINT" | "HUMINT" | "OSINT" | "DIPLOMATIC" | "TECHNICAL";
  threatLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status?: "PENDING" | "ACTIVE" | "VERIFIED" | "ARCHIVED";
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// Form types
export interface CreateIntelligenceData {
  id: string;
  title: string;
  classification?: "TOP_SECRET" | "SECRET" | "CONFIDENTIAL" | "UNCLASSIFIED";
  source: "SIGINT" | "HUMINT" | "OSINT" | "DIPLOMATIC" | "TECHNICAL";
  location: string;
  threatLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status?: "PENDING" | "ACTIVE" | "VERIFIED" | "ARCHIVED";
  content: string;
  tags?: string;
}

export interface UpdateIntelligenceData {
  title?: string;
  classification?: "TOP_SECRET" | "SECRET" | "CONFIDENTIAL" | "UNCLASSIFIED";
  source?: "SIGINT" | "HUMINT" | "OSINT" | "DIPLOMATIC" | "TECHNICAL";
  location?: string;
  threatLevel?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status?: "PENDING" | "ACTIVE" | "VERIFIED" | "ARCHIVED";
  content?: string;
  tags?: string;
}
