// Shared hooks and types
export { useFetchList } from "./shared/hooks/use-fetch-list";
export type {
  PaginationInfo,
  APIError,
  APIResponse,
  PaginatedAPIResponse,
  ListQueryParams,
} from "./shared/types/api-types";

// Agents feature
export { useAgentList } from "./agents/hooks/use-agent-list";
export { useAgentActivities } from "./agents/hooks/use-agent-activities";
export type {
  Agent,
  AgentActivity,
  AgentOperation,
  AgentDetailsAPIResponse,
  AgentListAPIResponse,
  AgentActivitiesAPIResponse,
  AgentListQueryParams,
  AgentActivitiesQueryParams,
  CreateAgentData,
  UpdateAgentData,
  CreateAgentActivityData,
} from "./agents/types/agent-types";
export { AGENT_CONFIG } from "./agents/config/agent-config";

// Operations feature
export { useOperationList } from "./operations/hooks/use-operation-list";
export { useOperationAgents } from "./operations/hooks/use-operation-agents";
export type {
  Operation,
  OperationAgent,
  OperationDetailsAPIResponse,
  OperationListAPIResponse,
  OperationAgentsAPIResponse,
  OperationListQueryParams,
  OperationAgentsQueryParams,
  CreateOperationData,
  UpdateOperationData,
  AssignAgentToOperationData,
} from "./operations/types/operation-types";
export { OPERATION_CONFIG } from "./operations/config/operation-config";

// Intelligence feature
export { useIntelligenceList } from "./intelligence/hooks/use-intelligence-list";
export type {
  IntelligenceReport,
  IntelligenceDetailsAPIResponse,
  IntelligenceListAPIResponse,
  IntelligenceListQueryParams,
  CreateIntelligenceData,
  UpdateIntelligenceData,
} from "./intelligence/types/intelligence-types";
export { INTELLIGENCE_CONFIG } from "./intelligence/config/intelligence-config";

// Systems feature
export { useSysList } from "./systems/hooks/use-sys-list";
export type {
  System,
  SystemDetailsAPIResponse,
  SystemListAPIResponse,
  SystemListQueryParams,
  CreateSystemData,
  UpdateSystemData,
} from "./systems/types/sys-types";
export { SYS_CONFIG } from "./systems/config/sys-config";

// Dashboard feature
export { useDashboardOverview } from "./dashboard/hooks/use-dashboard-overview";
export { useDashboardStats } from "./dashboard/hooks/use-dashboard-stats";
export type {
  DashboardOverview,
  DashboardStats,
  DashboardActivity,
  DashboardAgent,
  DashboardOperation,
  DashboardSystem,
  DashboardReport,
  DashboardOverviewAPIResponse,
  DashboardStatsAPIResponse,
} from "./dashboard/types/dashboard-types";
export { DASHBOARD_CONFIG } from "./dashboard/config/dashboard-config";
