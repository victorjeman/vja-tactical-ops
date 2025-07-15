import { prisma } from "./db-seed-common";

export async function seedSystems() {
  console.log("🖥️ Seeding systems...");

  // Create sample systems
  const systems = await Promise.all([
    prisma.system.create({
      data: {
        id: "SYS-001",
        name: "COMMAND SERVER ALPHA",
        type: "PRIMARY_SERVER",
        status: "ONLINE",
        health: 98,
        cpu: 45,
        memory: 67,
        storage: 34,
        uptime: "247 days",
      },
    }),
    prisma.system.create({
      data: {
        id: "SYS-002",
        name: "DATABASE CLUSTER BETA",
        type: "DATABASE",
        status: "ONLINE",
        health: 95,
        cpu: 23,
        memory: 89,
        storage: 78,
        uptime: "156 days",
      },
    }),
    prisma.system.create({
      data: {
        id: "SYS-003",
        name: "FIREWALL GAMMA",
        type: "FIREWALL",
        status: "WARNING",
        health: 72,
        cpu: 67,
        memory: 45,
        storage: 12,
        uptime: "89 days",
      },
    }),
    prisma.system.create({
      data: {
        id: "SYS-004",
        name: "NETWORK HUB DELTA",
        type: "NETWORK",
        status: "ONLINE",
        health: 91,
        cpu: 34,
        memory: 56,
        storage: 23,
        uptime: "203 days",
      },
    }),
  ]);

  console.log(`✅ Created ${systems.length} systems`);
  return systems;
}
