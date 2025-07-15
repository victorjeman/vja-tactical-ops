import { prisma } from "./db-seed-common";

export async function seedIntelligenceReports() {
  console.log("📋 Seeding intelligence reports...");

  // Create sample intelligence reports
  const intelligenceReports = await Promise.all([
    prisma.intelligenceReport.create({
      data: {
        id: "INT-2025-001",
        title: "CYBERCRIME NETWORK ANALYSIS",
        classification: "TOP_SECRET",
        source: "SIGINT",
        location: "Eastern Europe",
        threatLevel: "HIGH",
        status: "VERIFIED",
        content:
          "Comprehensive analysis of cybercrime network operating in Eastern Europe. Multiple threat actors identified with sophisticated attack capabilities.",
        tags: JSON.stringify(["cybercrime", "international", "financial"]),
      },
    }),
    prisma.intelligenceReport.create({
      data: {
        id: "INT-2025-002",
        title: "TERRORIST CELL MOVEMENTS",
        classification: "SECRET",
        source: "HUMINT",
        location: "Middle East",
        threatLevel: "CRITICAL",
        status: "ACTIVE",
        content:
          "Intelligence indicates movement of known terrorist cells across multiple countries in the region.",
        tags: JSON.stringify(["terrorism", "movement", "regional"]),
      },
    }),
    prisma.intelligenceReport.create({
      data: {
        id: "INT-2025-003",
        title: "DIPLOMATIC COMMUNICATIONS INTERCEPT",
        classification: "CONFIDENTIAL",
        source: "DIPLOMATIC",
        location: "Asia Pacific",
        threatLevel: "MEDIUM",
        status: "PENDING",
        content: "Intercepted diplomatic communications suggest potential security threats in the region.",
        tags: JSON.stringify(["diplomatic", "communications", "regional"]),
      },
    }),
  ]);

  console.log(`✅ Created ${intelligenceReports.length} intelligence reports`);
  return intelligenceReports;
}
