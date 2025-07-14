# Tactical Operations Dashboard - Cyberpunk Design

A comprehensive tactical command and control system built with Next.js, featuring a cyberpunk aesthetic with dark themes, orange accents, and military-style interface elements.

## Project Overview

This is a multi-page dashboard application designed for tactical operations management. The interface uses a dark cyberpunk theme with orange (#f97316) as the primary accent color, monospace fonts for data display, and military-style terminology throughout.

## Design System

### Color Palette
- **Background**: Black (#000000) and dark neutrals (neutral-900, neutral-800)
- **Primary Accent**: Orange (#f97316 / orange-500)
- **Text**: White for primary text, neutral-400 for secondary text
- **Borders**: neutral-700 for subtle borders
- **Status Colors**: 
  - Active/Online: White
  - Warning: Orange-500
  - Critical/Error: Red-500
  - Standby/Inactive: neutral-500

### Typography
- **Primary Font**: Monospace (font-mono) for all data, IDs, and technical information
- **Headers**: Bold, uppercase, letter-spaced (tracking-wider)
- **Body Text**: Regular weight, neutral colors for hierarchy

### UI Components
- **Cards**: Dark background (neutral-900) with subtle borders (neutral-700)
- **Buttons**: Orange primary buttons, ghost variants for secondary actions
- **Status Indicators**: Small colored dots (w-2 h-2 rounded-full) next to status text
- **Progress Bars**: Orange fill on dark neutral background
- **Badges**: Colored backgrounds with 20% opacity and matching text colors

## Application Structure

### Main Layout
- **Collapsible Sidebar**: Navigation with tactical-style menu items
- **Top Toolbar**: Breadcrumb navigation and system status
- **Main Content Area**: Dynamic content based on selected section
- **Mobile Responsive**: Sidebar becomes overlay on mobile devices

### Navigation Sections
1. **Command Center** (Overview/Dashboard)
2. **Agent Network** (Personnel Management)
3. **Operations** (Mission Management)
4. **Intelligence** (Reports and Analysis)
5. **Systems** (Infrastructure Monitoring)

## Page Specifications

### 1. Command Center (Main Dashboard)
**Purpose**: Central overview of all tactical operations

**Key Components**:
- **Agent Allocation Panel**: Shows active field agents (190), undercover (990), training (290)
- **Activity Log**: Real-time feed of agent activities with timestamps, locations, and actions
- **Encrypted Chat Activity**: Wireframe sphere visualization with terminal-style chat logs
- **Mission Activity Chart**: Line graph showing mission trends over time
- **Mission Information**: Success/failure statistics broken down by risk level

**Data Examples**:
- Agent IDs: G-078W, G-079X format
- Agent Codenames: "VENGEFUL SPIRIT", "OBSIDIAN SENTINEL"
- Locations: Berlin, Tokyo, Cairo, Moscow, London
- Timestamps: "25/06/2025 09:29" format

### 2. Agent Network
**Purpose**: Manage and monitor field operatives

**Key Features**:
- **Search Functionality**: Filter agents by name or ID
- **Agent Roster Table**: Comprehensive list with status, location, missions completed
- **Status Types**: active, standby, training, compromised
- **Risk Levels**: critical, high, medium, low
- **Agent Detail Modal**: Expandable view with full agent information

**Agent Data Structure**:
\`\`\`
{
  id: "G-078W",
  name: "VENGEFUL SPIRIT",
  status: "active",
  location: "Berlin",
  lastSeen: "2 min ago",
  missions: 47,
  risk: "high"
}
\`\`\`

### 3. Operations
**Purpose**: Mission planning and execution oversight

**Key Features**:
- **Operation Cards**: Grid layout showing mission status and progress
- **Status Types**: active, planning, completed, compromised
- **Priority Levels**: critical, high, medium, low
- **Progress Tracking**: Percentage completion with visual progress bars
- **Operation Detail Modal**: Full mission briefing and objectives

**Operation Data Structure**:
\`\`\`
{
  id: "OP-OMEGA-001",
  name: "SHADOW PROTOCOL",
  status: "active",
  priority: "critical",
  location: "Eastern Europe",
  agents: 5,
  progress: 75,
  objectives: ["Locate target", "Establish surveillance", "Extract intelligence"]
}
\`\`\`

### 4. Intelligence
**Purpose**: Classified reports and threat analysis

**Key Features**:
- **Classification Levels**: TOP SECRET, SECRET, CONFIDENTIAL
- **Source Types**: SIGINT, HUMINT, OSINT, DIPLOMATIC
- **Threat Assessment**: critical, high, medium, low
- **Report Status**: verified, pending, active
- **Tagging System**: Categorize reports with relevant tags

**Intelligence Report Structure**:
\`\`\`
{
  id: "INT-2025-001",
  title: "CYBERCRIME NETWORK ANALYSIS",
  classification: "TOP SECRET",
  source: "SIGINT",
  location: "Eastern Europe",
  threat: "high",
  tags: ["cybercrime", "international", "financial"]
}
\`\`\`

### 5. Systems
**Purpose**: Infrastructure health and performance monitoring

**Key Features**:
- **System Types**: Primary Server, Database, Firewall, Network, Storage, Processing
- **Health Monitoring**: Overall system health percentage
- **Resource Usage**: CPU, Memory, Storage utilization
- **Status Tracking**: online, warning, maintenance, offline
- **Uptime Monitoring**: Days since last restart

**System Data Structure**:
\`\`\`
{
  id: "SYS-001",
  name: "COMMAND SERVER ALPHA",
  type: "Primary Server",
  status: "online",
  health: 98,
  cpu: 45,
  memory: 67,
  storage: 34,
  uptime: "247 days"
}
\`\`\`

## Technical Implementation

### Framework & Libraries
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** components (Card, Button, Input, Badge, Progress)
- **Lucide React** for icons

### Key Components Used
- Card, CardContent, CardHeader, CardTitle
- Button (primary orange, ghost variants)
- Input (search functionality)
- Badge (status indicators)
- Progress (system health, mission progress)

### Icons Used
- ChevronRight, Monitor, Settings, Shield, Target, Users, Bell, RefreshCw
- Search, Filter, MoreHorizontal, MapPin, Clock
- FileText, Eye, Download, Globe, AlertTriangle
- Server, Database, Wifi, HardDrive, Cpu, Activity, CheckCircle, XCircle

## Styling Patterns

### Consistent Patterns
- **Uppercase Headers**: All section titles and labels in uppercase with letter-spacing
- **Monospace Data**: All IDs, timestamps, and numerical data in font-mono
- **Hover Effects**: Subtle border color changes (border-orange-500/50) on interactive elements
- **Status Dots**: Small colored circles (w-2 h-2) indicating system/agent status
- **Grid Layouts**: Responsive grids that adapt from 1 column on mobile to 3-4 on desktop

### Animation & Interactions
- **Pulse Animation**: Used for online status indicators
- **Smooth Transitions**: All hover states and modal appearances
- **Progress Animations**: Smooth width transitions for progress bars
- **Modal Overlays**: Dark backdrop with centered content cards

## Data Patterns

### Naming Conventions
- **Agent IDs**: G-[number][letter] format (G-078W)
- **Operation IDs**: OP-[GREEK]-[number] format (OP-OMEGA-001)
- **Intelligence IDs**: INT-[YEAR]-[number] format (INT-2025-001)
- **System IDs**: SYS-[number] format (SYS-001)

### Codenames
- Military/tactical style: "VENGEFUL SPIRIT", "SHADOW PROTOCOL", "GHOST FIRE"
- Dark/mysterious themes: "OBSIDIAN SENTINEL", "CURSED REVENANT", "WRAITH AVENGER"

### Locations
- Major world cities: Berlin, Tokyo, Cairo, Moscow, London, Paris, Sydney
- Regional descriptors: Eastern Europe, Middle East, Asia Pacific, North Africa

## Responsive Design

### Breakpoints
- **Mobile**: Single column layouts, overlay sidebar
- **Tablet**: 2-column grids, collapsible sidebar
- **Desktop**: 3-4 column grids, persistent sidebar

### Mobile Adaptations
- Sidebar becomes full-screen overlay
- Tables become scrollable
- Grid layouts stack vertically
- Touch-friendly button sizes

## Implementation Notes

### State Management
- Local component state for UI interactions
- Modal visibility controlled by selected item state
- Search filtering implemented with local state

### Performance Considerations
- Lazy loading for modal content
- Efficient re-renders with proper key props
- Optimized grid layouts for large datasets

### Accessibility
- Proper ARIA labels for status indicators
- Keyboard navigation support
- Screen reader friendly content structure
- High contrast color scheme

This README provides all the necessary information to recreate the tactical operations dashboard with its distinctive cyberpunk aesthetic, comprehensive functionality, and military-themed interface design.
