# Database Seeds

This directory contains the database seeding scripts for the Tactical Operations Dashboard.

## Structure

```
db/seeds/
├── db-seed.ts              # Main orchestrator - runs all seed functions
├── db-seed-common.ts       # Shared utilities and data clearing
├── db-seed-agents.ts       # Agent and agent activity seeding
├── db-seed-operations.ts   # Operations and agent-operation assignments
├── db-seed-intelligence.ts # Intelligence reports seeding
├── db-seed-systems.ts      # System monitoring data seeding
├── db-seed-users.ts        # Users and sessions seeding
├── db-clean.ts             # Database cleanup script
└── README.md               # This file
```

## Usage

### Run All Seeds

```bash
pnpm db:seed
```

### Clean Database

```bash
pnpm db:clean
```

### Clean and Seed

```bash
pnpm db:clean && pnpm db:seed
```

### Individual Seed Files

Each seed file exports specific functions that can be imported and used independently:

```typescript
import { seedAgents } from "./db-seed-agents";
import { seedOperations } from "./db-seed-operations";
// etc.
```

## Seed Order

The main seed file (`db-seed.ts`) runs seeds in the following order to respect dependencies:

1. **Clear Data** - Remove all existing data
2. **Agents** - Create field operatives
3. **Operations** - Create missions
4. **Intelligence** - Create reports
5. **Systems** - Create infrastructure data
6. **Agent Activities** - Create activity logs (depends on agents)
7. **Agent Operations** - Create assignments (depends on agents and operations)
8. **Users** - Create user accounts
9. **Sessions** - Create user sessions (depends on users)

## Adding New Seeds

To add new seed data:

1. Create a new file: `db-seed-[model].ts`
2. Export your seed function(s)
3. Import and call them in `db-seed.ts` in the correct order
4. Update this README

## Example

```typescript
// db-seed-example.ts
import { prisma } from "./db-seed-common";

export async function seedExample() {
  console.log("📝 Seeding example data...");

  const examples = await Promise.all([
    prisma.example.create({
      data: {
        // your data here
      },
    }),
  ]);

  console.log(`✅ Created ${examples.length} examples`);
  return examples;
}
```

## Notes

- All seed functions use the shared `prisma` client from `db-seed-common.ts`
- Data clearing is handled centrally in `clearAllData()`
- Each seed function logs its progress and returns the created data
- The main orchestrator handles errors and disconnects the Prisma client
