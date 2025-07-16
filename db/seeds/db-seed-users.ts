import { prisma } from "./db-seed-common";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

// User credentials for development
const USER_CREDENTIALS = [
  {
    email: "commander@tactical-ops.com",
    username: "COMMANDER_ALPHA",
    password: "Commander2025!",
    role: "ADMIN" as const,
    displayName: "Commander Alpha",
  },
  {
    email: "analyst@tactical-ops.com",
    username: "INTEL_ANALYST",
    password: "Analyst2025!",
    role: "ANALYST" as const,
    displayName: "Intel Analyst",
  },
  {
    email: "operator@tactical-ops.com",
    username: "FIELD_OPERATOR",
    password: "Operator2025!",
    role: "OPERATOR" as const,
    displayName: "Field Operator",
  },
  {
    email: "viewer@tactical-ops.com",
    username: "INTEL_VIEWER",
    password: "Viewer2025!",
    role: "VIEWER" as const,
    displayName: "Intel Viewer",
  },
];

// Generate constants file content
function generateConstantsFile() {
  const constantsContent = `// ============================================================================
// DEVELOPMENT USER CREDENTIALS
// ============================================================================
// This file is auto-generated during database seeding.
// Use these credentials for development and testing purposes only.

export const DEV_USER_CREDENTIALS = ${JSON.stringify(USER_CREDENTIALS, null, 2)} as const;

export type DevUserRole = typeof DEV_USER_CREDENTIALS[number]['role'];

export interface DevUser {
  email: string;
  username: string;
  password: string;
  role: DevUserRole;
  displayName: string;
}

// Helper function to get user by role
export function getDevUserByRole(role: DevUserRole): DevUser | undefined {
  return DEV_USER_CREDENTIALS.find(user => user.role === role);
}

// Helper function to get user by email
export function getDevUserByEmail(email: string): DevUser | undefined {
  return DEV_USER_CREDENTIALS.find(user => user.email === email);
}
`;

  // Write to lib/constants.ts
  const constantsPath = path.join(process.cwd(), "lib", "constants.ts");
  fs.writeFileSync(constantsPath, constantsContent);
  console.log("📝 Generated constants file at lib/constants.ts");
}

export async function seedUsers() {
  console.log("👤 Seeding users...");

  // Generate constants file first
  generateConstantsFile();

  // Create sample users with properly hashed passwords
  const users = await Promise.all(
    USER_CREDENTIALS.map(async (userCred) => {
      const hashedPassword = await bcrypt.hash(userCred.password, 12);

      return prisma.user.create({
        data: {
          email: userCred.email,
          username: userCred.username,
          password: hashedPassword,
          role: userCred.role,
          isActive: true,
        },
      });
    })
  );

  console.log(`✅ Created ${users.length} users with hashed passwords`);
  console.log("📋 User credentials saved to lib/constants.ts for development use");
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
