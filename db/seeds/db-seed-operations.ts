import { prisma } from "./db-seed-common";

export async function seedOperations() {
  console.log("🎯 Seeding operations...");

  // Create sample operations
  const operations = await Promise.all([
    prisma.operation.create({
      data: {
        id: "OP-OMEGA-001",
        name: "SHADOW PROTOCOL",
        status: "ACTIVE",
        priority: "CRITICAL",
        location: "Eastern Europe",
        progress: 75,
        objectives: JSON.stringify(["Locate target", "Establish surveillance", "Extract intelligence"]),
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      },
    }),
    prisma.operation.create({
      data: {
        id: "OP-ALPHA-002",
        name: "GHOST FIRE",
        status: "PLANNING",
        priority: "HIGH",
        location: "Middle East",
        progress: 25,
        objectives: JSON.stringify(["Infiltration preparation", "Asset deployment", "Communication setup"]),
      },
    }),
    prisma.operation.create({
      data: {
        id: "OP-BETA-003",
        name: "SILENT STORM",
        status: "COMPLETED",
        priority: "MEDIUM",
        location: "Asia Pacific",
        progress: 100,
        objectives: JSON.stringify(["Target elimination", "Evidence collection", "Clean extraction"]),
        startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
        endDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
    }),
  ]);

  console.log(`✅ Created ${operations.length} operations`);
  return operations;
}

export async function seedAgentOperations() {
  console.log("🔗 Seeding agent-operation assignments...");

  // Assign agents to operations
  const agentOperations = await Promise.all([
    prisma.agentOperation.create({
      data: {
        agentId: "G-078W",
        operationId: "OP-OMEGA-001",
        role: "Lead Operative",
      },
    }),
    prisma.agentOperation.create({
      data: {
        agentId: "G-079X",
        operationId: "OP-OMEGA-001",
        role: "Support Operative",
      },
    }),
    prisma.agentOperation.create({
      data: {
        agentId: "G-081Z",
        operationId: "OP-ALPHA-002",
        role: "Reconnaissance",
      },
    }),
  ]);

  console.log(`✅ Created ${agentOperations.length} agent-operation assignments`);
  return agentOperations;
}
