import { PrismaClient } from "../prisma-client";

const prisma = new PrismaClient();

export async function clearAllData() {
  console.log("🧹 Clearing existing data...");
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  await prisma.agentOperation.deleteMany();
  await prisma.agentActivity.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.operation.deleteMany();
  await prisma.intelligenceReport.deleteMany();
  await prisma.system.deleteMany();
}

export { prisma };
