# Database Setup - Tactical Operations Dashboard

## Overview

Set up the database layer for the Tactical Operations Dashboard using Prisma ORM. You'll need to design a database structure that supports multi-file schema organization and includes all necessary models for the tactical operations system.

## Learning Objectives

- Understand multi-file Prisma schema organization
- Design database models for a tactical operations system
- Implement proper relationships between entities
- Create modular seed data structure
- Set up database scripts and utilities

## Technology Requirements

- **ORM**: Prisma (latest stable version)
- **Database**: SQLite for development, PostgreSQL for production
- **Schema Organization**: Multi-file schema approach
- **Client Location**: Generate in `db/prisma-client/` directory

## Database Architecture

### Schema Organization

**Question**: Why organize the Prisma schema into multiple files within the `db/schemas/` directory?

Think about how this approach improves maintainability and allows for better separation of concerns.

### Required Schema Files

You need to create the following schema files to organize your models logically:

1. **main.prisma** - Contains generator and datasource configuration
2. **common.prisma** - Shared enums and types used across models
3. **users.prisma** - User authentication and session management
4. **agents.prisma** - Field operative management and activities
5. **operations.prisma** - Mission management and agent assignments
6. **intelligence.prisma** - Intelligence reports and analysis
7. **systems.prisma** - Infrastructure monitoring and health tracking

**Question**: How do you decide which models belong in which files?

## Data Models

### Core Entities

#### Users and Authentication

**Questions to Consider:**

- What information do you need to track for user accounts?
- How do you handle session management for authentication?
- What role-based access control levels do you need?

#### Agents

**Questions to Consider:**

- What information is essential for tracking field operatives?
- How do you assess and track risk levels?
- What historical data should be maintained?

#### Operations

**Questions to Consider:**

- What phases does a typical operation go through?
- How do you track progress and milestones?
- What happens when operations need to be modified?

#### Intelligence Reports

**Questions to Consider:**

- What types of intelligence sources do you need to support?
- How do you classify and categorize intelligence data?
- What security levels are needed for different types of information?

#### Systems

**Questions to Consider:**

- What systems and infrastructure need to be monitored?
- How do you define and measure system health?
- What alerts and notifications are critical?

### Relationships

**Questions to Consider:**

- Which entities have one-to-many relationships?
- Which entities have many-to-many relationships?
- What happens when a parent entity is deleted?
- How do you ensure data integrity?

### Enums and Types

**Question**: Why use enums instead of strings for status fields?

Define appropriate enums for:

- Agent status (Active, Standby, Training, Compromised, Deceased)
- Risk levels (Critical, High, Medium, Low)
- Operation status (Planning, Active, Completed, Compromised, Aborted)
- Priority levels (Critical, High, Medium, Low)
- Classification levels (Top Secret, Secret, Confidential, Unclassified)
- Intelligence sources (SIGINT, HUMINT, OSINT, Diplomatic, Technical)
- Report status (Verified, Pending, Active, Archived)
- System status (Online, Warning, Maintenance, Offline)
- System types (Primary Server, Database, Firewall, Network, Storage, Processing)
- User roles (Admin, Operator, Analyst, Viewer)

## Implementation Steps

### 1. Project Setup

**Question**: Why do we need both `prisma` and `@prisma/client` packages?

Install Prisma CLI and client packages. Add TypeScript execution support for database scripts.

### 2. Directory Structure

**Question**: Why separate schemas, seeds, and migrations into different directories?

Create the necessary directories for database organization:

- `db/schemas/` for schema files
- `db/prisma-client/` for generated client
- `db/seeds/` for seed data
- `db/migrations/` for database migrations

### 3. Schema Configuration

**Question**: How do you configure the multi-file schema approach?

Set up the main schema file with generator and datasource configuration. Configure the multi-file schema approach to automatically read all `.prisma` files in the schemas directory.

### 4. Model Implementation

**Questions to Consider:**

- What fields are essential for each entity?
- How do you handle relationships between models?
- What constraints and validation do you need?

Implement each model with appropriate fields, relationships, and constraints.

### 5. Database Client

**Question**: Why create a utility file for the Prisma client?

Create a utility file for the Prisma client that handles global instance management and proper connection handling.

### 6. Seed Data Structure

**Questions to Consider:**

- What sample data makes sense for testing?
- How do you handle dependencies between seed data?
- Why separate cleanup from seeding?

Design a modular seeding system with separate files for each entity type. Include a main orchestrator that handles dependencies and a cleanup utility for development.

### 7. Package Scripts

**Questions to Consider:**

- Why use `--schema=db/schemas` instead of a specific file?
- What does each script do?
- When would you use each script?

Add database management scripts to package.json for common operations:

- Client generation
- Migration management
- Database seeding
- Database cleanup
- Prisma Studio access

## Database Scripts

Configure the following scripts in package.json:

- `db:generate` - Generate Prisma client from schema
- `db:migrate` - Run database migrations
- `db:clean` - Clear all data from database
- `db:seed` - Populate database with sample data
- `db:studio` - Open Prisma Studio for database management

## Seed Data Requirements

### Sample Data

**Questions to Consider:**

- What realistic data would help with testing?
- How do you ensure data covers all scenarios?
- What makes sample data useful for development?

Create realistic sample data for testing and development.

### Data Dependencies

**Question**: How do you handle dependencies between entities when seeding?

Ensure seed data respects entity relationships and dependencies.

## Validation Requirements

After implementation, verify:

- All schema files are properly organized
- Prisma client generates without errors
- Migrations apply successfully
- Seed data populates correctly
- All database scripts function properly
- Relationships work as expected
- Sample data is accessible and realistic

## Tips and Hints

### Schema Design Tips

- Start with the main entities (agents, operations, users)
- Use meaningful field names and appropriate data types
- Consider what data you'll need to query frequently
- Think about data validation and constraints

### Relationship Tips

- Use `@relation` to define explicit relationships
- Consider cascade delete behavior carefully
- Use `@@unique` constraints where appropriate
- Think about foreign key relationships

### Seeding Tips

- Clear existing data before seeding
- Seed in dependency order (parents before children)
- Use realistic but fictional data
- Include various status combinations for testing

### Testing Tips

- Use Prisma Studio to verify your data
- Test relationships and constraints
- Verify that seed data is realistic
- Check that cleanup works properly

## Common Pitfalls

1. **Forgetting foreign key relationships** - Always define explicit relationships
2. **Incorrect enum values** - Make sure enum values match your business logic
3. **Missing constraints** - Add unique constraints where needed
4. **Poor seed data organization** - Keep seeding modular and maintainable
5. **Not testing relationships** - Verify that related data works correctly

## Next Steps

Once the database setup is complete, proceed to:

1. API Layer Implementation
2. Frontend Component Development
3. Authentication System
4. Real-time Features

## Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Multi-file Schema Guide](https://www.prisma.io/docs/orm/prisma-schema/overview/location)
