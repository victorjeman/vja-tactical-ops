// Example: Feature configuration patterns
// This shows how to structure configuration files for different features

// Base configuration interface
interface BaseConfig {
  endpoints: {
    list: string;
    create: string;
    get: (id: string) => string;
    update: (id: string) => string;
    delete: (id: string) => string;
  };
  defaultQueryParams: {
    page: number;
    limit: number;
    search: string;
  };
  refreshIntervals: {
    list: number;
    detail: number;
  };
}

// Example: Agents feature configuration
export const AGENT_CONFIG: BaseConfig = {
  endpoints: {
    list: "/api/agents",
    create: "/api/agents",
    get: (id: string) => `/api/agents/${id}`,
    update: (id: string) => `/api/agents/${id}`,
    delete: (id: string) => `/api/agents/${id}`,
  },
  defaultQueryParams: {
    page: 1,
    limit: 10,
    search: "",
  },
  refreshIntervals: {
    list: 10000, // 10 seconds - agents might change frequently
    detail: 30000, // 30 seconds
  },
};

// Example: Operations feature configuration
export const OPERATION_CONFIG: BaseConfig = {
  endpoints: {
    list: "/api/operations",
    create: "/api/operations",
    get: (id: string) => `/api/operations/${id}`,
    update: (id: string) => `/api/operations/${id}`,
    delete: (id: string) => `/api/operations/${id}`,
  },
  defaultQueryParams: {
    page: 1,
    limit: 10,
    search: "",
  },
  refreshIntervals: {
    list: 15000, // 15 seconds - operations are less frequent
    detail: 60000, // 1 minute
  },
};

// Example: Dashboard configuration with different refresh rates
export const DASHBOARD_CONFIG = {
  endpoints: {
    overview: "/api/dashboard/overview",
    stats: "/api/dashboard/stats",
  },
  refreshIntervals: {
    overview: 5000, // 5 seconds - dashboard needs real-time updates
    stats: 10000, // 10 seconds
  },
};

// Example: Environment-based configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "10000"),
  retries: parseInt(process.env.NEXT_PUBLIC_API_RETRIES || "3"),
  headers: {
    "Content-Type": "application/json",
  },
};

// Example: Feature-specific configuration with additional options
export const INTELLIGENCE_CONFIG = {
  endpoints: {
    list: "/api/intelligence",
    create: "/api/intelligence",
    get: (id: string) => `/api/intelligence/${id}`,
    update: (id: string) => `/api/intelligence/${id}`,
    delete: (id: string) => `/api/intelligence/${id}`,
    export: (id: string) => `/api/intelligence/${id}/export`,
  },
  defaultQueryParams: {
    page: 1,
    limit: 10,
    search: "",
    classification: "", // Additional filter
    dateRange: "", // Additional filter
  },
  refreshIntervals: {
    list: 20000, // 20 seconds - intelligence reports don't change often
    detail: 120000, // 2 minutes
  },
  features: {
    export: true,
    bulkActions: true,
    advancedFilters: true,
  },
};

// Example: Configuration with role-based access
export const SYSTEM_CONFIG = {
  endpoints: {
    list: "/api/systems",
    create: "/api/systems",
    get: (id: string) => `/api/systems/${id}`,
    update: (id: string) => `/api/systems/${id}`,
    delete: (id: string) => `/api/systems/${id}`,
    monitor: (id: string) => `/api/systems/${id}/monitor`,
  },
  defaultQueryParams: {
    page: 1,
    limit: 10,
    search: "",
    status: "",
  },
  refreshIntervals: {
    list: 8000, // 8 seconds - system status changes frequently
    detail: 15000, // 15 seconds
    monitor: 3000, // 3 seconds - monitoring needs real-time data
  },
  permissions: {
    create: ["ADMIN", "OPERATOR"],
    update: ["ADMIN", "OPERATOR"],
    delete: ["ADMIN"],
    monitor: ["ADMIN", "OPERATOR", "ANALYST"],
  },
};

// Example: Configuration utility functions
export const createFeatureConfig = (basePath: string, options: Partial<BaseConfig> = {}): BaseConfig => {
  return {
    endpoints: {
      list: `${basePath}`,
      create: `${basePath}`,
      get: (id: string) => `${basePath}/${id}`,
      update: (id: string) => `${basePath}/${id}`,
      delete: (id: string) => `${basePath}/${id}`,
      ...options.endpoints,
    },
    defaultQueryParams: {
      page: 1,
      limit: 10,
      search: "",
      ...options.defaultQueryParams,
    },
    refreshIntervals: {
      list: 10000,
      detail: 30000,
      ...options.refreshIntervals,
    },
  };
};

// Example: Using the utility function
export const CUSTOM_FEATURE_CONFIG = createFeatureConfig("/api/custom-features", {
  refreshIntervals: {
    list: 5000, // Override default
    detail: 30000, // Keep default
  },
  defaultQueryParams: {
    page: 1, // Keep default
    limit: 20, // Override default
    search: "", // Keep default
  },
});
