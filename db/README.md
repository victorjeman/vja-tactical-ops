# Database Setup - Tactical Operations Dashboard

This directory contains the database configuration and schema for the Tactical Operations Dashboard.

## Structure

```
db/
├── schemas/
│   └── main.prisma          # Main Prisma schema file
├── generated/               # Generated Prisma client
├── migrations/              # Database migrations
├── seeds/                   # Seed data files
│   └── seed.ts             # Database seeding script
├── client.ts               # Prisma client utility
├── dev.db                  # SQLite development database
└── README.md               # This file
```

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Generate Prisma Client

```bash
pnpm db:generate
```

### 3. Run Migrations

```bash
pnpm db:migrate
```

### 4. Seed Database

```bash
pnpm db:seed
```

### 5. Open Prisma Studio (Optional)

```bash
pnpm db:studio
```

## Database Models

### Agents

- Field operative information and status tracking
- Mission history and performance metrics
- Location and communication data

### Operations

- Mission data and progress tracking
- Agent assignments and objectives
- Risk assessment and priority levels

### Intelligence Reports

- Classified reports and threat assessments
- Source classification and verification status
- Tagging and categorization system

### Systems

- Infrastructure monitoring data
- Health metrics and performance tracking
- Resource utilization and uptime

### Users

- Authentication and authorization
- Role-based access control (RBAC)
- Session management

## Usage in Application

```typescript
import { prisma } from "@/db/client";

// Example: Get all active agents
const activeAgents = await prisma.agent.findMany({
  where: {
    status: "ACTIVE",
  },
});

// Example: Get operation with assigned agents
const operation = await prisma.operation.findUnique({
  where: { id: "OP-OMEGA-001" },
  include: {
    agents: {
      include: {
        agent: true,
      },
    },
  },
});
```

## Development

### Adding New Models

1. Edit `db/schemas/main.prisma`
2. Run `pnpm db:migrate` to create migration
3. Run `pnpm db:generate` to update client

### Updating Seed Data

1. Edit `db/seeds/seed.ts`
2. Run `pnpm db:seed` to populate database

### Database Reset

```bash
# Delete database and recreate
rm db/dev.db
pnpm db:migrate
pnpm db:seed
```

## Production

For production deployment, update the datasource in `db/schemas/main.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Environment Variables

Add to your `.env` file:

```env
DATABASE_URL="file:./dev.db"
```
