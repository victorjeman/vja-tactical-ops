import { prisma } from "./db-seed-common";

export async function seedAgents() {
  console.log("📊 Seeding agents...");

  // Create sample agents
  const agents = await Promise.all([
    prisma.agent.create({
      data: {
        id: "G-078W",
        codename: "VENGEFUL SPIRIT",
        status: "ACTIVE",
        riskLevel: "HIGH",
        location: "Berlin",
        lastSeen: new Date(),
        missionsCompleted: 47,
      },
    }),
    prisma.agent.create({
      data: {
        id: "G-079X",
        codename: "OBSIDIAN SENTINEL",
        status: "ACTIVE",
        riskLevel: "MEDIUM",
        location: "Tokyo",
        lastSeen: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
        missionsCompleted: 32,
      },
    }),
    prisma.agent.create({
      data: {
        id: "G-080Y",
        codename: "CURSED REVENANT",
        status: "TRAINING",
        riskLevel: "LOW",
        location: "Cairo",
        lastSeen: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        missionsCompleted: 12,
      },
    }),
    prisma.agent.create({
      data: {
        id: "G-081Z",
        codename: "WRAITH AVENGER",
        status: "STANDBY",
        riskLevel: "MEDIUM",
        location: "Moscow",
        lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        missionsCompleted: 28,
      },
    }),
  ]);

  console.log(`✅ Created ${agents.length} agents`);
  return agents;
}

export async function seedAgentActivities() {
  console.log("📝 Seeding agent activities...");

  // Create sample agent activities
  const agentActivities = await Promise.all([
    prisma.agentActivity.create({
      data: {
        agentId: "G-078W",
        action: "MISSION_UPDATE",
        location: "Berlin",
        details: "Completed surveillance phase of SHADOW PROTOCOL",
      },
    }),
    prisma.agentActivity.create({
      data: {
        agentId: "G-079X",
        action: "LOCATION_UPDATE",
        location: "Tokyo",
        details: "Arrived at safe house for debriefing",
      },
    }),
    prisma.agentActivity.create({
      data: {
        agentId: "G-080Y",
        action: "TRAINING_COMPLETE",
        location: "Cairo",
        details: "Completed advanced combat training module",
      },
    }),
  ]);

  console.log(`✅ Created ${agentActivities.length} agent activities`);
  return agentActivities;
}
