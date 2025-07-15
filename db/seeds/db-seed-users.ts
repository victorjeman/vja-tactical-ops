import { prisma } from "./db-seed-common";

export async function seedUsers() {
  console.log("👤 Seeding users...");

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: "commander@tactical-ops.com",
        username: "COMMANDER_ALPHA",
        password: "$2b$10$hashed_password_here", // In real app, use proper hashing
        role: "ADMIN",
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: "analyst@tactical-ops.com",
        username: "INTEL_ANALYST",
        password: "$2b$10$hashed_password_here", // In real app, use proper hashing
        role: "ANALYST",
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: "operator@tactical-ops.com",
        username: "FIELD_OPERATOR",
        password: "$2b$10$hashed_password_here", // In real app, use proper hashing
        role: "OPERATOR",
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: "viewer@tactical-ops.com",
        username: "INTEL_VIEWER",
        password: "$2b$10$hashed_password_here", // In real app, use proper hashing
        role: "VIEWER",
        isActive: true,
      },
    }),
  ]);

  console.log(`✅ Created ${users.length} users`);
  return users;
}

export async function seedSessions() {
  console.log("🔐 Seeding sessions...");

  // Get all users to create sessions for
  const users = await prisma.user.findMany();

  // Create sample sessions for the users
  const sessions = await Promise.all([
    prisma.session.create({
      data: {
        userId: users[0].id, // Commander
        token: "session_token_commander_alpha_2025",
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      },
    }),
    prisma.session.create({
      data: {
        userId: users[1].id, // Analyst
        token: "session_token_intel_analyst_2025",
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
      },
    }),
    prisma.session.create({
      data: {
        userId: users[2].id, // Operator
        token: "session_token_field_operator_2025",
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
      },
    }),
  ]);

  console.log(`✅ Created ${sessions.length} sessions`);
  return sessions;
}
