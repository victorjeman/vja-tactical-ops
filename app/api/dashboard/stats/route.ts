import { prisma } from "@/db/client";
import { requireAuth, AuthenticatedRequest } from "@/lib/auth-middleware";

// GET /api/dashboard/stats - Get dashboard statistics
export const GET = requireAuth(async (request: AuthenticatedRequest) => {
  try {
    // Get counts for each entity
    const [
      totalAgents,
      activeAgents,
      totalOperations,
      activeOperations,
      totalReports,
      totalSystems,
      onlineSystems,
    ] = await Promise.all([
      prisma.agent.count(),
      prisma.agent.count({ where: { status: "ACTIVE" } }),
      prisma.operation.count(),
      prisma.operation.count({ where: { status: "ACTIVE" } }),
      prisma.intelligenceReport.count(),
      prisma.system.count(),
      prisma.system.count({ where: { status: "ONLINE" } }),
    ]);

    // Get recent activities
    const recentAgents = await prisma.agent.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        codename: true,
        status: true,
        riskLevel: true,
        createdAt: true,
      },
    });

    const recentOperations = await prisma.operation.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        status: true,
        priority: true,
        createdAt: true,
      },
    });

    const recentReports = await prisma.intelligenceReport.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        classification: true,
        status: true,
        createdAt: true,
      },
    });

    // Get system health overview
    const systemHealth = await prisma.system.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const systemHealthMap = systemHealth.reduce((acc, item) => {
      acc[item.status] = item._count.status;
      return acc;
    }, {} as Record<string, number>);

    // Calculate percentages
    const agentActivityRate = totalAgents > 0 ? (activeAgents / totalAgents) * 100 : 0;
    const operationSuccessRate = totalOperations > 0 ? (activeOperations / totalOperations) * 100 : 0;
    const systemUptimeRate = totalSystems > 0 ? (onlineSystems / totalSystems) * 100 : 0;

    return Response.json({
      success: true,
      data: {
        overview: {
          totalAgents,
          activeAgents,
          agentActivityRate: Math.round(agentActivityRate),
          totalOperations,
          activeOperations,
          operationSuccessRate: Math.round(operationSuccessRate),
          totalReports,
          totalSystems,
          onlineSystems,
          systemUptimeRate: Math.round(systemUptimeRate),
        },
        recentActivity: {
          agents: recentAgents,
          operations: recentOperations,
          reports: recentReports,
        },
        systemHealth: systemHealthMap,
      },
    });
  } catch (error) {
    console.error("Get dashboard stats error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch dashboard statistics",
      },
      { status: 500 }
    );
  }
});
