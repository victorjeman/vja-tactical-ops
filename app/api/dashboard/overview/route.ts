import { NextRequest } from "next/server";
import { prisma } from "@/db/client";

// GET /api/dashboard/overview - Get dashboard overview data
export async function GET(request: NextRequest) {
  try {
    // Get agent statistics
    const agentStats = await prisma.agent.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const agentCounts = {
      total: 0,
      active: 0,
      standby: 0,
      training: 0,
      compromised: 0,
      deceased: 0,
    };

    agentStats.forEach((stat) => {
      agentCounts.total += stat._count.status;
      agentCounts[stat.status.toLowerCase() as keyof typeof agentCounts] = stat._count.status;
    });

    // Get operation statistics
    const operationStats = await prisma.operation.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const operationCounts = {
      total: 0,
      planning: 0,
      active: 0,
      completed: 0,
      compromised: 0,
      aborted: 0,
    };

    operationStats.forEach((stat) => {
      operationCounts.total += stat._count.status;
      operationCounts[stat.status.toLowerCase() as keyof typeof operationCounts] = stat._count.status;
    });

    // Get intelligence report statistics
    const intelligenceStats = await prisma.intelligenceReport.groupBy({
      by: ["classification"],
      _count: {
        classification: true,
      },
    });

    const intelligenceCounts = {
      total: 0,
      topSecret: 0,
      secret: 0,
      confidential: 0,
      unclassified: 0,
    };

    intelligenceStats.forEach((stat) => {
      intelligenceCounts.total += stat._count.classification;
      const key = stat.classification.toLowerCase().replace("_", "") as keyof typeof intelligenceCounts;
      if (key in intelligenceCounts) {
        intelligenceCounts[key] = stat._count.classification;
      }
    });

    // Get system statistics
    const systemStats = await prisma.system.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const systemCounts = {
      total: 0,
      online: 0,
      warning: 0,
      maintenance: 0,
      offline: 0,
    };

    systemStats.forEach((stat) => {
      systemCounts.total += stat._count.status;
      systemCounts[stat.status.toLowerCase() as keyof typeof systemCounts] = stat._count.status;
    });

    // Get recent activities
    const recentActivities = await prisma.agentActivity.findMany({
      take: 10,
      orderBy: { timestamp: "desc" },
      include: {
        agent: {
          select: {
            id: true,
            codename: true,
          },
        },
      },
    });

    // Get critical alerts
    const criticalAgents = await prisma.agent.findMany({
      where: {
        OR: [{ status: "COMPROMISED" }, { status: "DECEASED" }, { riskLevel: "CRITICAL" }],
      },
      take: 5,
      orderBy: { updatedAt: "desc" },
    });

    const criticalOperations = await prisma.operation.findMany({
      where: {
        OR: [{ status: "COMPROMISED" }, { status: "ABORTED" }, { priority: "CRITICAL" }],
      },
      take: 5,
      orderBy: { updatedAt: "desc" },
    });

    const criticalSystems = await prisma.system.findMany({
      where: {
        OR: [{ status: "OFFLINE" }, { status: "WARNING" }, { health: { lt: 50 } }],
      },
      take: 5,
      orderBy: { updatedAt: "desc" },
    });

    // Calculate overall health score
    const totalSystems = systemCounts.total;
    const healthySystems = systemCounts.online;
    const overallHealth = totalSystems > 0 ? Math.round((healthySystems / totalSystems) * 100) : 100;

    const overview = {
      agents: agentCounts,
      operations: operationCounts,
      intelligence: intelligenceCounts,
      systems: systemCounts,
      overallHealth,
      recentActivities,
      criticalAlerts: {
        agents: criticalAgents,
        operations: criticalOperations,
        systems: criticalSystems,
      },
      lastUpdated: new Date().toISOString(),
    };

    return Response.json({
      success: true,
      data: overview,
    });
  } catch (error) {
    console.error("Dashboard overview error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch dashboard overview",
      },
      { status: 500 }
    );
  }
}
