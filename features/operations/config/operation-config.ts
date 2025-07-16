export const OPERATION_CONFIG = {
  endpoints: {
    // Main operation endpoints
    list: "/api/operations",
    create: "/api/operations",
    details: (id: string) => `/api/operations/${id}`,
    update: (id: string) => `/api/operations/${id}`,
    delete: (id: string) => `/api/operations/${id}`,

    // Operation agents endpoints
    agents: {
      list: (operationId: string) => `/api/operations/${operationId}/agents`,
      assign: (operationId: string) => `/api/operations/${operationId}/agents`,
      remove: (operationId: string, agentId: string) =>
        `/api/operations/${operationId}/agents?agentId=${agentId}`,
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
    { value: "PLANNING", label: "Planning" },
    { value: "ACTIVE", label: "Active" },
    { value: "COMPLETED", label: "Completed" },
    { value: "COMPROMISED", label: "Compromised" },
    { value: "ABORTED", label: "Aborted" },
  ],

  // Priority options for filtering
  priorityOptions: [
    { value: "CRITICAL", label: "Critical" },
    { value: "HIGH", label: "High" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LOW", label: "Low" },
  ],

  // Sort options
  sortOptions: [
    { value: "name", label: "Name" },
    { value: "status", label: "Status" },
    { value: "priority", label: "Priority" },
    { value: "location", label: "Location" },
    { value: "progress", label: "Progress" },
    { value: "startDate", label: "Start Date" },
    { value: "createdAt", label: "Created Date" },
  ],
} as const;
