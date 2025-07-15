import { PrismaClient } from "../prisma-client";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Cleaning database...");

  try {
    // Clear all data in dependency order (child tables first)
    console.log("🗑️  Clearing sessions...");
    await prisma.session.deleteMany();

    console.log("🗑️  Clearing users...");
    await prisma.user.deleteMany();

    console.log("🗑️  Clearing agent operations...");
    await prisma.agentOperation.deleteMany();

    console.log("🗑️  Clearing agent activities...");
    await prisma.agentActivity.deleteMany();

    console.log("🗑️  Clearing agents...");
    await prisma.agent.deleteMany();

    console.log("🗑️  Clearing operations...");
    await prisma.operation.deleteMany();

    console.log("🗑️  Clearing intelligence reports...");
    await prisma.intelligenceReport.deleteMany();

    console.log("🗑️  Clearing systems...");
    await prisma.system.deleteMany();

    console.log("✅ Database cleaned successfully!");
    console.log("💡 You can now run 'pnpm db:seed' to populate with fresh data");
  } catch (error) {
    console.error("❌ Error cleaning database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Fatal error cleaning database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
