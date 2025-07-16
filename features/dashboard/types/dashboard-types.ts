import { APIResponse } from "../../shared/types/api-types";

// Dashboard overview types
export interface DashboardOverview {
  agents: {
    total: number;
    active: number;
    standby: number;
    training: number;
    compromised: number;
    deceased: number;
  };
  operations: {
    total: number;
    planning: number;
    active: number;
    completed: number;
    compromised: number;
    aborted: number;
  };
  intelligence: {
    total: number;
    topSecret: number;
    secret: number;
    confidential: number;
    unclassified: number;
  };
  systems: {
    total: number;
    online: number;
    warning: number;
    maintenance: number;
    offline: number;
  };
  overallHealth: number;
  recentActivities: DashboardActivity[];
  criticalAlerts: {
    agents: DashboardAgent[];
    operations: DashboardOperation[];
    systems: DashboardSystem[];
  };
  lastUpdated: string;
}

export interface DashboardActivity {
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

export interface DashboardAgent {
  id: string;
  codename: string;
  status: string;
  riskLevel: string;
  location: string;
  lastSeen: string | null;
  missionsCompleted: number;
  updatedAt: string;
}

export interface DashboardOperation {
  id: string;
  name: string;
  status: string;
  priority: string;
  location: string;
  progress: number;
  updatedAt: string;
}

export interface DashboardSystem {
  id: string;
  name: string;
  type: string;
  status: string;
  health: number;
  updatedAt: string;
}

// Dashboard stats types
export interface DashboardStats {
  overview: {
    totalAgents: number;
    activeAgents: number;
    agentActivityRate: number;
    totalOperations: number;
    activeOperations: number;
    operationSuccessRate: number;
    totalReports: number;
    totalSystems: number;
    onlineSystems: number;
    systemUptimeRate: number;
  };
  recentActivity: {
    agents: DashboardAgent[];
    operations: DashboardOperation[];
    reports: DashboardReport[];
  };
  systemHealth: Record<string, number>;
}

export interface DashboardReport {
  id: string;
  title: string;
  classification: string;
  status: string;
  createdAt: string;
}

// API Response types
export type DashboardOverviewAPIResponse = APIResponse<DashboardOverview>;
export type DashboardStatsAPIResponse = APIResponse<DashboardStats>;
