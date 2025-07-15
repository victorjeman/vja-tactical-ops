# Database Setup Examples

This directory contains example files to help you understand the database structure for the Tactical Operations Dashboard.

## Files Overview

### `main.prisma`

- **Purpose**: Main Prisma configuration file
- **What to do**: Configure the generator and datasource blocks
- **Key concepts**: Multi-file schema, client generation, database connection

### `common.prisma`

- **Purpose**: Define shared enums and types
- **What to do**: Fill in the enum values based on your requirements
- **Key concepts**: Enum design, business logic modeling, data categorization

## How to Use These Examples

1. **Read the comments**: Each file contains TODO comments and questions
2. **Think through the requirements**: Consider what your tactical operations system needs
3. **Fill in the blanks**: Replace TODO comments with actual implementations
4. **Test your understanding**: Make sure your choices make sense for the domain

## Learning Objectives

- Understand Prisma schema structure
- Design appropriate enums for business domains
- Think through data relationships and constraints
- Plan for scalability and maintainability

## Tips

- Start with the main entities (agents, operations, users)
- Consider what data you'll need to query frequently
- Think about data validation and business rules
- Plan for future extensions and changes

## Next Steps

After completing these examples:

1. Create the remaining schema files
2. Design your model relationships
3. Implement your seed data structure
4. Test your database setup
