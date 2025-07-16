export const AGENT_CONFIG = {
  endpoints: {
    // Main agent endpoints
    list: "/api/agents",
    create: "/api/agents",
    details: (id: string) => `/api/agents/${id}`,
    update: (id: string) => `/api/agents/${id}`,
    delete: (id: string) => `/api/agents/${id}`,

    // Agent activities endpoints
    activities: {
      list: (agentId: string) => `/api/agents/${agentId}/activities`,
      create: (agentId: string) => `/api/agents/${agentId}/activities`,
    },
  },

  // Default query parameters
  defaultQueryParams: {
    page: 1,
    limit: 10,
    sortBy: "createdAt",
    sortOrder: "desc" as const,
  },

  // Status options for filtering
  statusOptions: [
    { value: "ACTIVE", label: "Active" },
    { value: "STANDBY", label: "Standby" },
    { value: "TRAINING", label: "Training" },
    { value: "COMPROMISED", label: "Compromised" },
    { value: "DECEASED", label: "Deceased" },
  ],

  // Risk level options for filtering
  riskLevelOptions: [
    { value: "CRITICAL", label: "Critical" },
    { value: "HIGH", label: "High" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LOW", label: "Low" },
  ],

  // Sort options
  sortOptions: [
    { value: "codename", label: "Codename" },
    { value: "status", label: "Status" },
    { value: "riskLevel", label: "Risk Level" },
    { value: "location", label: "Location" },
    { value: "lastSeen", label: "Last Seen" },
    { value: "missionsCompleted", label: "Missions" },
    { value: "createdAt", label: "Created Date" },
  ],
} as const;
