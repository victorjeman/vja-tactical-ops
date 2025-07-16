import { z } from "zod";

// Agent Validation Schemas
export const createAgentSchema = z.object({
  id: z.string().min(1, "Agent ID is required"),
  codename: z.string().min(1, "Codename is required"),
  status: z.enum(["ACTIVE", "STANDBY", "TRAINING", "COMPROMISED", "DECEASED"]).optional(),
  riskLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  location: z.string().optional(),
  lastSeen: z.string().datetime().optional(),
  missionsCompleted: z.number().int().min(0).optional(),
});

export const updateAgentSchema = z.object({
  codename: z.string().min(1, "Codename is required").optional(),
  status: z.enum(["ACTIVE", "STANDBY", "TRAINING", "COMPROMISED", "DECEASED"]).optional(),
  riskLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  location: z.string().optional(),
  lastSeen: z.string().datetime().optional(),
  missionsCompleted: z.number().int().min(0).optional(),
});

export const createAgentActivitySchema = z.object({
  action: z.string().min(1, "Action is required"),
  location: z.string().optional(),
  details: z.string().optional(),
});

// Operation Validation Schemas
export const createOperationSchema = z.object({
  id: z.string().min(1, "Operation ID is required"),
  name: z.string().min(1, "Operation name is required"),
  status: z.enum(["PLANNING", "ACTIVE", "COMPLETED", "COMPROMISED", "ABORTED"]).optional(),
  priority: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  location: z.string().min(1, "Location is required"),
  progress: z.number().int().min(0).max(100).optional(),
  objectives: z.string().min(1, "Objectives are required"),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export const updateOperationSchema = z.object({
  name: z.string().min(1, "Operation name is required").optional(),
  status: z.enum(["PLANNING", "ACTIVE", "COMPLETED", "COMPROMISED", "ABORTED"]).optional(),
  priority: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  location: z.string().min(1, "Location is required").optional(),
  progress: z.number().int().min(0).max(100).optional(),
  objectives: z.string().min(1, "Objectives are required").optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export const assignAgentToOperationSchema = z.object({
  agentId: z.string().min(1, "Agent ID is required"),
  role: z.string().optional(),
});

// Intelligence Report Validation Schemas
export const createIntelligenceReportSchema = z.object({
  id: z.string().min(1, "Report ID is required"),
  title: z.string().min(1, "Title is required"),
  classification: z.enum(["TOP_SECRET", "SECRET", "CONFIDENTIAL", "UNCLASSIFIED"]).optional(),
  source: z.enum(["SIGINT", "HUMINT", "OSINT", "DIPLOMATIC", "TECHNICAL"]),
  location: z.string().optional(),
  threatLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  status: z.enum(["VERIFIED", "PENDING", "ACTIVE", "ARCHIVED"]).optional(),
  content: z.string().min(1, "Content is required"),
  tags: z.string().optional(),
});

export const updateIntelligenceReportSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  classification: z.enum(["TOP_SECRET", "SECRET", "CONFIDENTIAL", "UNCLASSIFIED"]).optional(),
  source: z.enum(["SIGINT", "HUMINT", "OSINT", "DIPLOMATIC", "TECHNICAL"]).optional(),
  location: z.string().optional(),
  threatLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  status: z.enum(["VERIFIED", "PENDING", "ACTIVE", "ARCHIVED"]).optional(),
  content: z.string().min(1, "Content is required").optional(),
  tags: z.string().optional(),
});

// System Validation Schemas
export const createSystemSchema = z.object({
  id: z.string().min(1, "System ID is required"),
  name: z.string().min(1, "System name is required"),
  type: z.enum(["PRIMARY_SERVER", "DATABASE", "FIREWALL", "NETWORK", "STORAGE", "PROCESSING"]),
  status: z.enum(["ONLINE", "WARNING", "MAINTENANCE", "OFFLINE"]).optional(),
  health: z.number().int().min(0).max(100).optional(),
  cpu: z.number().int().min(0).max(100).optional(),
  memory: z.number().int().min(0).max(100).optional(),
  storage: z.number().int().min(0).max(100).optional(),
  uptime: z.string().optional(),
});

export const updateSystemSchema = z.object({
  name: z.string().min(1, "System name is required").optional(),
  type: z.enum(["PRIMARY_SERVER", "DATABASE", "FIREWALL", "NETWORK", "STORAGE", "PROCESSING"]).optional(),
  status: z.enum(["ONLINE", "WARNING", "MAINTENANCE", "OFFLINE"]).optional(),
  health: z.number().int().min(0).max(100).optional(),
  cpu: z.number().int().min(0).max(100).optional(),
  memory: z.number().int().min(0).max(100).optional(),
  storage: z.number().int().min(0).max(100).optional(),
  uptime: z.string().optional(),
});

// Authentication Validation Schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["ADMIN", "OPERATOR", "ANALYST", "VIEWER"]).optional(),
});

// Dashboard Filter Schemas
export const dashboardFilterSchema = z.object({
  status: z.enum(["ACTIVE", "STANDBY", "TRAINING", "COMPROMISED", "DECEASED"]).optional(),
  riskLevel: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  priority: z.enum(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).optional(),
  classification: z.enum(["TOP_SECRET", "SECRET", "CONFIDENTIAL", "UNCLASSIFIED"]).optional(),
  dateRange: z
    .object({
      start: z.string().datetime().optional(),
      end: z.string().datetime().optional(),
    })
    .optional(),
});

// Export types for use in API routes
export type CreateAgentInput = z.infer<typeof createAgentSchema>;
export type UpdateAgentInput = z.infer<typeof updateAgentSchema>;
export type CreateAgentActivityInput = z.infer<typeof createAgentActivitySchema>;
export type CreateOperationInput = z.infer<typeof createOperationSchema>;
export type UpdateOperationInput = z.infer<typeof updateOperationSchema>;
export type AssignAgentToOperationInput = z.infer<typeof assignAgentToOperationSchema>;
export type CreateIntelligenceReportInput = z.infer<typeof createIntelligenceReportSchema>;
export type UpdateIntelligenceReportInput = z.infer<typeof updateIntelligenceReportSchema>;
export type CreateSystemInput = z.infer<typeof createSystemSchema>;
export type UpdateSystemInput = z.infer<typeof updateSystemSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type DashboardFilterInput = z.infer<typeof dashboardFilterSchema>;
