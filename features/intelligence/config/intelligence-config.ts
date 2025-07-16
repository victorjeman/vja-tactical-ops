export const INTELLIGENCE_CONFIG = {
  endpoints: {
    // Main intelligence endpoints
    list: "/api/intelligence",
    create: "/api/intelligence",
    details: (id: string) => `/api/intelligence/${id}`,
    update: (id: string) => `/api/intelligence/${id}`,
    delete: (id: string) => `/api/intelligence/${id}`,
  },

  // Default query parameters
  defaultQueryParams: {
    page: 1,
    limit: 10,
    sortBy: "createdAt",
    sortOrder: "desc" as const,
  },

  // Classification options for filtering
  classificationOptions: [
    { value: "TOP_SECRET", label: "Top Secret" },
    { value: "SECRET", label: "Secret" },
    { value: "CONFIDENTIAL", label: "Confidential" },
    { value: "UNCLASSIFIED", label: "Unclassified" },
  ],

  // Source options for filtering
  sourceOptions: [
    { value: "SIGINT", label: "SIGINT" },
    { value: "HUMINT", label: "HUMINT" },
    { value: "OSINT", label: "OSINT" },
    { value: "DIPLOMATIC", label: "Diplomatic" },
    { value: "TECHNICAL", label: "Technical" },
  ],

  // Threat level options for filtering
  threatLevelOptions: [
    { value: "CRITICAL", label: "Critical" },
    { value: "HIGH", label: "High" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LOW", label: "Low" },
  ],

  // Status options for filtering
  statusOptions: [
    { value: "PENDING", label: "Pending" },
    { value: "ACTIVE", label: "Active" },
    { value: "VERIFIED", label: "Verified" },
    { value: "ARCHIVED", label: "Archived" },
  ],

  // Sort options
  sortOptions: [
    { value: "title", label: "Title" },
    { value: "classification", label: "Classification" },
    { value: "source", label: "Source" },
    { value: "threatLevel", label: "Threat Level" },
    { value: "status", label: "Status" },
    { value: "location", label: "Location" },
    { value: "createdAt", label: "Created Date" },
  ],
} as const;
