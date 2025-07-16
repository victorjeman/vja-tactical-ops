export const DASHBOARD_CONFIG = {
  endpoints: {
    // Dashboard endpoints
    overview: "/api/dashboard/overview",
    stats: "/api/dashboard/stats",
  },

  // Refresh intervals (in milliseconds)
  refreshIntervals: {
    overview: 30000, // 30 seconds
    stats: 60000, // 1 minute
  },

  // Health thresholds
  healthThresholds: {
    critical: 25,
    warning: 50,
    good: 75,
  },

  // Status colors for different health levels
  healthColors: {
    critical: "text-red-500",
    warning: "text-orange-500",
    good: "text-white",
  },
} as const;
