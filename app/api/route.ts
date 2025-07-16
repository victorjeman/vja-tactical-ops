import { NextRequest } from "next/server";

// GET /api - API information and endpoints
export async function GET(request: NextRequest) {
  return Response.json({
    name: "Tactical Operations Dashboard API",
    version: "2.0.0",
    framework: "Next.js API Routes",
    description: "Command and control system API for managing field operations",
    endpoints: {
      auth: {
        login: "/api/auth/login",
        logout: "/api/auth/logout",
        session: "/api/auth/session",
      },
      agents: {
        list: "/api/agents",
        create: "/api/agents",
        get: "/api/agents/[id]",
        update: "/api/agents/[id]",
        delete: "/api/agents/[id]",
        activities: "/api/agents/[id]/activities",
      },
      operations: {
        list: "/api/operations",
        create: "/api/operations",
        get: "/api/operations/[id]",
        update: "/api/operations/[id]",
        delete: "/api/operations/[id]",
        agents: "/api/operations/[id]/agents",
      },
      intelligence: {
        list: "/api/intelligence",
        create: "/api/intelligence",
        get: "/api/intelligence/[id]",
        update: "/api/intelligence/[id]",
        delete: "/api/intelligence/[id]",
      },
      systems: {
        list: "/api/systems",
        create: "/api/systems",
        get: "/api/systems/[id]",
        update: "/api/systems/[id]",
        delete: "/api/systems/[id]",
      },
      dashboard: {
        overview: "/api/dashboard/overview",
        stats: "/api/dashboard/stats",
      },
    },
  });
}
