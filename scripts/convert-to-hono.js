#!/usr/bin/env node

/**
 * Script to convert Next.js API routes to Hono
 * This script provides a template for converting the remaining routes
 */

const fs = require("fs");
const path = require("path");

// Template for converting a route to Hono
const honoTemplate = (routeName) => `import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { prisma } from '@/db/client'

// Create the Hono app for ${routeName}
const app = new Hono()

// GET /api/${routeName} - List all ${routeName}
app.get('/', async (c) => {
  try {
    // TODO: Implement your logic here
    return c.json({
      success: true,
      data: [],
      message: '${routeName} list retrieved successfully',
    })
  } catch (error) {
    console.error('Get ${routeName} error:', error)
    return c.json(
      {
        success: false,
        error: 'Failed to fetch ${routeName}',
      },
      500
    )
  }
})

// POST /api/${routeName} - Create a new ${routeName}
app.post('/', async (c) => {
  try {
    // TODO: Implement your logic here
    return c.json(
      {
        success: true,
        data: {},
        message: '${routeName} created successfully',
      },
      201
    )
  } catch (error) {
    console.error('Create ${routeName} error:', error)
    return c.json(
      {
        success: false,
        error: 'Failed to create ${routeName}',
      },
      500
    )
  }
})

// Export for Next.js App Router
export const GET = app.fetch
export const POST = app.fetch
export const PUT = app.fetch
export const DELETE = app.fetch
`;

// Routes that still need conversion
const routesToConvert = ["intelligence", "systems", "dashboard/stats"];

console.log("Routes to convert to Hono:");
routesToConvert.forEach((route) => {
  console.log(`- /api/${route}`);
});

console.log("\nUse the template above to convert each route.");
console.log("Key changes:");
console.log("1. Import Hono and zValidator");
console.log("2. Create Hono app instance");
console.log("3. Use app.get() and app.post() instead of export functions");
console.log("4. Use c.json() instead of NextResponse.json()");
console.log("5. Use c.req.valid() for validated data");
console.log("6. Export app.fetch for Next.js compatibility");
