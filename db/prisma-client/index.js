
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.11.1
 * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
 */
Prisma.prismaVersion = {
  client: "6.11.1",
  engine: "f40f79ec31188888a2e33acda0ecc8fd10a853a9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AgentScalarFieldEnum = {
  id: 'id',
  codename: 'codename',
  status: 'status',
  riskLevel: 'riskLevel',
  location: 'location',
  lastSeen: 'lastSeen',
  missionsCompleted: 'missionsCompleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgentActivityScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  action: 'action',
  location: 'location',
  timestamp: 'timestamp',
  details: 'details'
};

exports.Prisma.IntelligenceReportScalarFieldEnum = {
  id: 'id',
  title: 'title',
  classification: 'classification',
  source: 'source',
  location: 'location',
  threatLevel: 'threatLevel',
  status: 'status',
  content: 'content',
  tags: 'tags',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OperationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  priority: 'priority',
  location: 'location',
  progress: 'progress',
  objectives: 'objectives',
  startDate: 'startDate',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgentOperationScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  operationId: 'operationId',
  assignedAt: 'assignedAt',
  role: 'role'
};

exports.Prisma.SystemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  status: 'status',
  health: 'health',
  cpu: 'cpu',
  memory: 'memory',
  storage: 'storage',
  uptime: 'uptime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  role: 'role',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AgentStatus = exports.$Enums.AgentStatus = {
  ACTIVE: 'ACTIVE',
  STANDBY: 'STANDBY',
  TRAINING: 'TRAINING',
  COMPROMISED: 'COMPROMISED',
  DECEASED: 'DECEASED'
};

exports.RiskLevel = exports.$Enums.RiskLevel = {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.OperationStatus = exports.$Enums.OperationStatus = {
  PLANNING: 'PLANNING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  COMPROMISED: 'COMPROMISED',
  ABORTED: 'ABORTED'
};

exports.PriorityLevel = exports.$Enums.PriorityLevel = {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.ClassificationLevel = exports.$Enums.ClassificationLevel = {
  TOP_SECRET: 'TOP_SECRET',
  SECRET: 'SECRET',
  CONFIDENTIAL: 'CONFIDENTIAL',
  UNCLASSIFIED: 'UNCLASSIFIED'
};

exports.IntelligenceSource = exports.$Enums.IntelligenceSource = {
  SIGINT: 'SIGINT',
  HUMINT: 'HUMINT',
  OSINT: 'OSINT',
  DIPLOMATIC: 'DIPLOMATIC',
  TECHNICAL: 'TECHNICAL'
};

exports.ReportStatus = exports.$Enums.ReportStatus = {
  VERIFIED: 'VERIFIED',
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED'
};

exports.SystemStatus = exports.$Enums.SystemStatus = {
  ONLINE: 'ONLINE',
  WARNING: 'WARNING',
  MAINTENANCE: 'MAINTENANCE',
  OFFLINE: 'OFFLINE'
};

exports.SystemType = exports.$Enums.SystemType = {
  PRIMARY_SERVER: 'PRIMARY_SERVER',
  DATABASE: 'DATABASE',
  FIREWALL: 'FIREWALL',
  NETWORK: 'NETWORK',
  STORAGE: 'STORAGE',
  PROCESSING: 'PROCESSING'
};

exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  ANALYST: 'ANALYST',
  VIEWER: 'VIEWER'
};

exports.Prisma.ModelName = {
  Agent: 'Agent',
  AgentActivity: 'AgentActivity',
  IntelligenceReport: 'IntelligenceReport',
  Operation: 'Operation',
  AgentOperation: 'AgentOperation',
  System: 'System',
  User: 'User',
  Session: 'Session'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/victorjeman/work/victor/vja/vja-tactical-ops/db/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/victorjeman/work/victor/vja/vja-tactical-ops/db/schemas/main.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../schemas",
  "clientVersion": "6.11.1",
  "engineVersion": "f40f79ec31188888a2e33acda0ecc8fd10a853a9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:../dev.db"
      }
    }
  },
  "inlineSchema": "// ============================================================================\n// AGENT MODELS\n// ============================================================================\n\nmodel Agent {\n  id                String      @id\n  codename          String      @unique\n  status            AgentStatus @default(STANDBY)\n  riskLevel         RiskLevel   @default(MEDIUM)\n  location          String?\n  lastSeen          DateTime?\n  missionsCompleted Int         @default(0)\n  createdAt         DateTime    @default(now())\n  updatedAt         DateTime    @updatedAt\n\n  // Relations\n  operations AgentOperation[]\n  activities AgentActivity[]\n\n  @@map(\"agents\")\n}\n\nmodel AgentActivity {\n  id        String   @id @default(cuid())\n  agentId   String\n  action    String\n  location  String?\n  timestamp DateTime @default(now())\n  details   String?\n\n  // Relations\n  agent Agent @relation(fields: [agentId], references: [id], onDelete: Cascade)\n\n  @@map(\"agent_activities\")\n}\n\n// ============================================================================\n// COMMON ENUMS AND TYPES\n// ============================================================================\n\nenum AgentStatus {\n  ACTIVE\n  STANDBY\n  TRAINING\n  COMPROMISED\n  DECEASED\n}\n\nenum RiskLevel {\n  CRITICAL\n  HIGH\n  MEDIUM\n  LOW\n}\n\nenum OperationStatus {\n  PLANNING\n  ACTIVE\n  COMPLETED\n  COMPROMISED\n  ABORTED\n}\n\nenum PriorityLevel {\n  CRITICAL\n  HIGH\n  MEDIUM\n  LOW\n}\n\nenum ClassificationLevel {\n  TOP_SECRET\n  SECRET\n  CONFIDENTIAL\n  UNCLASSIFIED\n}\n\nenum IntelligenceSource {\n  SIGINT\n  HUMINT\n  OSINT\n  DIPLOMATIC\n  TECHNICAL\n}\n\nenum ReportStatus {\n  VERIFIED\n  PENDING\n  ACTIVE\n  ARCHIVED\n}\n\nenum SystemStatus {\n  ONLINE\n  WARNING\n  MAINTENANCE\n  OFFLINE\n}\n\nenum SystemType {\n  PRIMARY_SERVER\n  DATABASE\n  FIREWALL\n  NETWORK\n  STORAGE\n  PROCESSING\n}\n\nenum UserRole {\n  ADMIN\n  OPERATOR\n  ANALYST\n  VIEWER\n}\n\n// ============================================================================\n// INTELLIGENCE MODELS\n// ============================================================================\n\nmodel IntelligenceReport {\n  id             String              @id\n  title          String\n  classification ClassificationLevel @default(CONFIDENTIAL)\n  source         IntelligenceSource\n  location       String?\n  threatLevel    RiskLevel           @default(MEDIUM)\n  status         ReportStatus        @default(PENDING)\n  content        String\n  tags           String // JSON array of tags\n  createdAt      DateTime            @default(now())\n  updatedAt      DateTime            @updatedAt\n\n  @@map(\"intelligence_reports\")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma-client\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = \"file:../dev.db\"\n}\n\n// ============================================================================\n// OPERATION MODELS\n// ============================================================================\n\nmodel Operation {\n  id         String          @id\n  name       String\n  status     OperationStatus @default(PLANNING)\n  priority   PriorityLevel   @default(MEDIUM)\n  location   String\n  progress   Int             @default(0)\n  objectives String // JSON array of objectives\n  startDate  DateTime?\n  endDate    DateTime?\n  createdAt  DateTime        @default(now())\n  updatedAt  DateTime        @updatedAt\n\n  // Relations\n  agents AgentOperation[]\n\n  @@map(\"operations\")\n}\n\nmodel AgentOperation {\n  id          String   @id @default(cuid())\n  agentId     String\n  operationId String\n  assignedAt  DateTime @default(now())\n  role        String?\n\n  // Relations\n  agent     Agent     @relation(fields: [agentId], references: [id], onDelete: Cascade)\n  operation Operation @relation(fields: [operationId], references: [id], onDelete: Cascade)\n\n  @@unique([agentId, operationId])\n  @@map(\"agent_operations\")\n}\n\n// ============================================================================\n// SYSTEM MODELS\n// ============================================================================\n\nmodel System {\n  id        String       @id\n  name      String\n  type      SystemType\n  status    SystemStatus @default(ONLINE)\n  health    Int          @default(100)\n  cpu       Int          @default(0)\n  memory    Int          @default(0)\n  storage   Int          @default(0)\n  uptime    String       @default(\"0 days\")\n  createdAt DateTime     @default(now())\n  updatedAt DateTime     @updatedAt\n\n  @@map(\"systems\")\n}\n\n// ============================================================================\n// USER MODELS\n// ============================================================================\n\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  username  String   @unique\n  password  String\n  role      UserRole @default(VIEWER)\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  sessions Session[]\n\n  @@map(\"users\")\n}\n\nmodel Session {\n  id        String   @id @default(cuid())\n  userId    String\n  token     String   @unique\n  expiresAt DateTime\n  createdAt DateTime @default(now())\n\n  // Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"sessions\")\n}\n",
  "inlineSchemaHash": "3ed315a7a27c6a1f7cb2726acbb08fd2e4f73915cc5265b1f98c64e0ca7ffc8f",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "db/prisma-client",
    "prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Agent\":{\"dbName\":\"agents\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AgentStatus\",\"nativeType\":null,\"default\":\"STANDBY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RiskLevel\",\"nativeType\":null,\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastSeen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"missionsCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"operations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgentOperation\",\"nativeType\":null,\"relationName\":\"AgentToAgentOperation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgentActivity\",\"nativeType\":null,\"relationName\":\"AgentToAgentActivity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AgentActivity\":{\"dbName\":\"agent_activities\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agent\",\"nativeType\":null,\"relationName\":\"AgentToAgentActivity\",\"relationFromFields\":[\"agentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"IntelligenceReport\":{\"dbName\":\"intelligence_reports\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classification\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ClassificationLevel\",\"nativeType\":null,\"default\":\"CONFIDENTIAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntelligenceSource\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threatLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RiskLevel\",\"nativeType\":null,\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ReportStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Operation\":{\"dbName\":\"operations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OperationStatus\",\"nativeType\":null,\"default\":\"PLANNING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PriorityLevel\",\"nativeType\":null,\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"objectives\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"agents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgentOperation\",\"nativeType\":null,\"relationName\":\"AgentOperationToOperation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AgentOperation\":{\"dbName\":\"agent_operations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agent\",\"nativeType\":null,\"relationName\":\"AgentToAgentOperation\",\"relationFromFields\":[\"agentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"nativeType\":null,\"relationName\":\"AgentOperationToOperation\",\"relationFromFields\":[\"operationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"agentId\",\"operationId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"agentId\",\"operationId\"]}],\"isGenerated\":false},\"System\":{\"dbName\":\"systems\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SystemType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemStatus\",\"nativeType\":null,\"default\":\"ONLINE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uptime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"0 days\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"nativeType\":null,\"default\":\"VIEWER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":\"sessions\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"AgentStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"STANDBY\",\"dbName\":null},{\"name\":\"TRAINING\",\"dbName\":null},{\"name\":\"COMPROMISED\",\"dbName\":null},{\"name\":\"DECEASED\",\"dbName\":null}],\"dbName\":null},\"RiskLevel\":{\"values\":[{\"name\":\"CRITICAL\",\"dbName\":null},{\"name\":\"HIGH\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"LOW\",\"dbName\":null}],\"dbName\":null},\"OperationStatus\":{\"values\":[{\"name\":\"PLANNING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"COMPROMISED\",\"dbName\":null},{\"name\":\"ABORTED\",\"dbName\":null}],\"dbName\":null},\"PriorityLevel\":{\"values\":[{\"name\":\"CRITICAL\",\"dbName\":null},{\"name\":\"HIGH\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"LOW\",\"dbName\":null}],\"dbName\":null},\"ClassificationLevel\":{\"values\":[{\"name\":\"TOP_SECRET\",\"dbName\":null},{\"name\":\"SECRET\",\"dbName\":null},{\"name\":\"CONFIDENTIAL\",\"dbName\":null},{\"name\":\"UNCLASSIFIED\",\"dbName\":null}],\"dbName\":null},\"IntelligenceSource\":{\"values\":[{\"name\":\"SIGINT\",\"dbName\":null},{\"name\":\"HUMINT\",\"dbName\":null},{\"name\":\"OSINT\",\"dbName\":null},{\"name\":\"DIPLOMATIC\",\"dbName\":null},{\"name\":\"TECHNICAL\",\"dbName\":null}],\"dbName\":null},\"ReportStatus\":{\"values\":[{\"name\":\"VERIFIED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null}],\"dbName\":null},\"SystemStatus\":{\"values\":[{\"name\":\"ONLINE\",\"dbName\":null},{\"name\":\"WARNING\",\"dbName\":null},{\"name\":\"MAINTENANCE\",\"dbName\":null},{\"name\":\"OFFLINE\",\"dbName\":null}],\"dbName\":null},\"SystemType\":{\"values\":[{\"name\":\"PRIMARY_SERVER\",\"dbName\":null},{\"name\":\"DATABASE\",\"dbName\":null},{\"name\":\"FIREWALL\",\"dbName\":null},{\"name\":\"NETWORK\",\"dbName\":null},{\"name\":\"STORAGE\",\"dbName\":null},{\"name\":\"PROCESSING\",\"dbName\":null}],\"dbName\":null},\"UserRole\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"OPERATOR\",\"dbName\":null},{\"name\":\"ANALYST\",\"dbName\":null},{\"name\":\"VIEWER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "db/prisma-client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "db/prisma-client/schema.prisma")
