export const SYS_CONFIG = {
  endpoints: {
    // Main system endpoints
    list: "/api/systems",
    create: "/api/systems",
    details: (id: string) => `/api/systems/${id}`,
    update: (id: string) => `/api/systems/${id}`,
    delete: (id: string) => `/api/systems/${id}`,
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
    { value: "ONLINE", label: "Online" },
    { value: "OFFLINE", label: "Offline" },
    { value: "WARNING", label: "Warning" },
    { value: "MAINTENANCE", label: "Maintenance" },
  ],

  // Type options for filtering
  typeOptions: [
    { value: "PRIMARY_SERVER", label: "Primary Server" },
    { value: "DATABASE", label: "Database" },
    { value: "FIREWALL", label: "Firewall" },
    { value: "NETWORK", label: "Network" },
    { value: "STORAGE", label: "Storage" },
    { value: "PROCESSING", label: "Processing" },
  ],

  // Sort options
  sortOptions: [
    { value: "name", label: "Name" },
    { value: "type", label: "Type" },
    { value: "status", label: "Status" },
    { value: "health", label: "Health" },
    { value: "cpu", label: "CPU Usage" },
    { value: "memory", label: "Memory Usage" },
    { value: "storage", label: "Storage Usage" },
    { value: "createdAt", label: "Created Date" },
  ],
} as const;
