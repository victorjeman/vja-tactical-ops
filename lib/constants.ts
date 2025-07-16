// ============================================================================
// DEVELOPMENT USER CREDENTIALS
// ============================================================================
// This file is auto-generated during database seeding.
// Use these credentials for development and testing purposes only.

export const DEV_USER_CREDENTIALS = [
  {
    "email": "commander@tactical-ops.com",
    "username": "COMMANDER_ALPHA",
    "password": "Commander2025!",
    "role": "ADMIN",
    "displayName": "Commander Alpha"
  },
  {
    "email": "analyst@tactical-ops.com",
    "username": "INTEL_ANALYST",
    "password": "Analyst2025!",
    "role": "ANALYST",
    "displayName": "Intel Analyst"
  },
  {
    "email": "operator@tactical-ops.com",
    "username": "FIELD_OPERATOR",
    "password": "Operator2025!",
    "role": "OPERATOR",
    "displayName": "Field Operator"
  },
  {
    "email": "viewer@tactical-ops.com",
    "username": "INTEL_VIEWER",
    "password": "Viewer2025!",
    "role": "VIEWER",
    "displayName": "Intel Viewer"
  }
] as const;

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
