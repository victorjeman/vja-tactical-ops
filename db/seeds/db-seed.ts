import { clearAllData, prisma } from "./db-seed-common";
import { seedAgents, seedAgentActivities } from "./db-seed-agents";
import { seedOperations, seedAgentOperations } from "./db-seed-operations";
import { seedIntelligenceReports } from "./db-seed-intelligence";
import { seedSystems } from "./db-seed-systems";
import { seedUsers, seedSessions } from "./db-seed-users";

async function main() {
  console.log("🌱 Starting database seeding...");

  try {
    // Clear existing data first
    await clearAllData();

    // Seed data in dependency order
    await seedAgents();
    await seedOperations();
    await seedIntelligenceReports();
    await seedSystems();
    await seedAgentActivities();
    await seedAgentOperations();
    await seedUsers();
    await seedSessions();

    console.log("✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during database seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Fatal error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
