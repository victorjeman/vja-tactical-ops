# Database Setup - Tactical Operations Dashboard

## Overview

Set up the database layer for the Tactical Operations Dashboard using Prisma ORM. The database should support multi-file schema organization for better maintainability and should include all necessary models for the tactical operations system.

## Technology Requirements

- **ORM**: Prisma (latest stable version)
- **Database**: SQLite for development, PostgreSQL for production
- **Schema Organization**: Multi-file schema approach
- **Client Location**: Generate in `db/prisma-client/` directory
- **Features**: Type-safe queries, migrations, seeding, introspection

## Database Architecture

### Schema Organization

Organize the Prisma schema into multiple files within the `db/schemas/` directory. This approach improves maintainability and allows for better separation of concerns.

### Required Schema Files

Create the following schema files to organize your models logically:

1. **main.prisma** - Contains generator and datasource configuration
2. **common.prisma** - Shared enums and types used across models
3. **users.prisma** - User authentication and session management
4. **agents.prisma** - Field operative management and activities
5. **operations.prisma** - Mission management and agent assignments
6. **intelligence.prisma** - Intelligence reports and analysis
7. **systems.prisma** - Infrastructure monitoring and health tracking

## Data Models

### Core Entities

#### Users and Authentication

- User accounts with email, username, password, and role
- Session management for authentication
- Role-based access control (Admin, Operator, Analyst, Viewer)

#### Agents

- Field operative information including codename, status, and location
- Risk level assessment and mission completion tracking
- Activity logging for operational history

#### Operations

- Mission data with status, priority, and progress tracking
- Location information and objective management
- Start and end date tracking for mission lifecycle

#### Intelligence Reports

- Classified reports with threat analysis
- Source classification and verification status
- Content management with tagging system

#### Systems

- Infrastructure monitoring with health metrics
- Performance tracking (CPU, memory, storage)
- Uptime monitoring and status reporting

### Relationships

- Users can have multiple sessions
- Agents can be assigned to multiple operations (many-to-many)
- Operations can have multiple agents assigned
- Agents can have multiple activity logs
- Intelligence reports and systems are independent entities

### Enums and Types

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

Install Prisma CLI and client packages. Add TypeScript execution support for database scripts.

### 2. Directory Structure

Create the necessary directories for database organization:

- `db/schemas/` for schema files
- `db/prisma-client/` for generated client
- `db/seeds/` for seed data
- `db/migrations/` for database migrations

### 3. Schema Configuration

Set up the main schema file with generator and datasource configuration. Configure the multi-file schema approach to automatically read all `.prisma` files in the schemas directory.

### 4. Model Implementation

Implement each model with appropriate fields, relationships, and constraints. Ensure proper foreign key relationships and cascade delete behavior where appropriate.

### 5. Database Client

Create a utility file for the Prisma client that handles global instance management and proper connection handling.

### 6. Seed Data Structure

Design a modular seeding system with separate files for each entity type. Include a main orchestrator that handles dependencies and a cleanup utility for development.

### 7. Package Scripts

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

Create realistic sample data for testing and development:

- Multiple agents with different statuses and risk levels
- Various operations in different phases
- Intelligence reports with different classifications
- System monitoring data with health metrics
- User accounts with different roles
- Agent activities and operation assignments

### Data Dependencies

Ensure seed data respects entity relationships and dependencies. Clear existing data before seeding to avoid conflicts.

## Validation Requirements

After implementation, verify:

- All schema files are properly organized
- Prisma client generates without errors
- Migrations apply successfully
- Seed data populates correctly
- All database scripts function properly
- Relationships work as expected
- Sample data is accessible and realistic

## File Structure

The final structure should include:

- Schema files organized by domain
- Generated Prisma client
- Modular seed data files
- Database utility functions
- Migration history
- Development database file

## Next Steps

Once the database setup is complete, proceed to:

1. API Layer Implementation
2. Frontend Component Development
3. Authentication System
4. Real-time Features

## Notes

- Use meaningful field names and appropriate data types
- Consider query performance when designing relationships
- Implement proper constraints and validation
- Ensure data integrity through foreign key relationships
- Plan for future scalability and maintenance
