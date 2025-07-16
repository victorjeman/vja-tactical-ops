# Design System Instructions for AI Agent - Tactical Operations Dashboard

## What This Design System Is

This is a dark, military-inspired design system for a tactical operations dashboard. Think of it as the visual language that makes the application look like a professional military command center interface. The design emphasizes readability, status clarity, and a serious, technical appearance.

## The Overall Design Philosophy

When building this design system, you should focus on these key principles:

1. **High contrast is essential** - everything needs to be easily readable in low-light conditions
2. **Use monospace fonts** for technical data to create a classified document feel
3. **Orange is the primary accent color** - use it for important actions and critical information
4. **Dark backgrounds with subtle borders** create depth without being overwhelming
5. **Color-coded status indicators** help users quickly understand system states
6. **Responsive grid layouts** handle complex data visualization across different screen sizes

## Color System

### Main Background Colors

The application uses a dark color scheme with these primary colors:

1. **Main background**: Use `bg-neutral-900` for the darkest charcoal background
2. **Surface elements**: Use `bg-neutral-800` for slightly lighter surfaces like cards
3. **Borders**: Use `border-neutral-700` for medium gray borders that provide subtle definition
4. **Primary text**: Use `text-white` for headings and important information
5. **Secondary text**: Use `text-neutral-400` for less important information
6. **Muted text**: Use `text-neutral-500` for the least important text like timestamps

### Accent and Status Colors

The accent color system uses orange as the primary highlight:

1. **Primary accent**: Use `text-orange-500` and `bg-orange-500` for buttons and important highlights
2. **Hover states**: Use `hover:bg-orange-600` for darker orange on button hover
3. **Success/Active status**: Use `text-white` and `bg-white` for active or online indicators
4. **Warning/Training status**: Use `text-orange-500` and `bg-orange-500` for warnings and training states
5. **Error/Compromised status**: Use `text-red-500` and `bg-red-500` for errors and compromised states
6. **Neutral/Standby status**: Use `text-neutral-500` and `bg-neutral-500` for inactive or standby states

### Status Color Meanings

The status system uses these specific colors to convey meaning:

1. **White** means active, online, or successful
2. **Orange** means warning, training, or attention needed
3. **Red** means error, compromised, or critical issue
4. **Gray** means standby, inactive, or neutral state

## Typography System

### Font Choices

The typography system uses these font approaches:

1. **Primary fonts**: Use system fonts like Arial and Helvetica for most text
2. **Monospace fonts**: Use `font-mono` class for technical data, IDs, timestamps, and classified information
3. **Letter spacing**: Use `tracking-wider` for headers to create a military/technical feel

### Text Hierarchy

The text hierarchy follows this structure from most important to least important:

1. **Page titles**: Use `text-2xl font-bold text-white tracking-wider` for main page headings
2. **Section headers**: Use `text-sm font-medium text-neutral-300 tracking-wider` for section titles
3. **Card titles**: Use `text-sm font-bold text-white tracking-wider` for card headings
4. **Body text**: Use `text-sm text-neutral-300` for regular readable text
5. **Secondary text**: Use `text-xs text-neutral-400` for less important information
6. **Technical data**: Use `text-xs text-neutral-500 font-mono` for data, IDs, and technical information
7. **Timestamps**: Use `text-xs text-neutral-500 font-mono` for dates and times

## Component System

### Card Components

All cards in the system follow this basic structure:

1. **Card container**: Use `bg-neutral-900 border-neutral-700` for the main card background
2. **Card header**: Use `pb-3` for reduced padding and `text-sm font-medium text-neutral-300 tracking-wider` for titles
3. **Card content**: Use standard padding and spacing for the content area

### Button System

The button system has two main types:

1. **Primary buttons**: Use `bg-orange-500 hover:bg-orange-600 text-white` for main actions
2. **Secondary buttons**: Use `variant="ghost" size="icon"` with `text-neutral-400 hover:text-orange-500` for icon buttons

### Badge System

Status badges use this pattern:

1. **Background**: Use `bg-orange-500/20` for semi-transparent background
2. **Text**: Use `text-orange-500` for the badge text
3. **Format**: Use uppercase text with `tracking-wider` for the military feel

### Status Indicators

Small colored dots for status use this pattern:

1. **Active status**: Use `bg-white` for white dots
2. **Standby status**: Use `bg-neutral-500` for gray dots
3. **Training status**: Use `bg-orange-500` for orange dots
4. **Compromised status**: Use `bg-red-500` for red dots

## Layout Patterns

### Main Layout Structure

The main layout consists of these parts:

1. **Sidebar**: Use `w-70 bg-neutral-900 border-r border-neutral-700` for the navigation sidebar
2. **Top toolbar**: Use `h-16 bg-neutral-800 border-b border-neutral-700` for the top navigation bar
3. **Main content**: Use `flex-1 overflow-auto p-6 space-y-6` for the main dashboard area

### Grid Layouts

Use these responsive grid patterns:

1. **Stats cards**: Use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4` for statistics displays
2. **Main dashboard**: Use `grid grid-cols-1 lg:grid-cols-12 gap-6` for complex dashboard layouts
3. **Content cards**: Use `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6` for content displays

### Spacing System

The spacing system uses these consistent measurements:

1. **Container padding**: Use `p-6` (24px) for main container padding
2. **Section spacing**: Use `space-y-6` (24px) between major sections
3. **Card spacing**: Use `space-y-4` (16px) within cards
4. **Item spacing**: Use `space-y-2` (8px) between related items
5. **Grid gaps**: Use `gap-4` (16px) or `gap-6` (24px) between grid items

## Data Visualization Patterns

### Progress Bars

Progress bars follow this structure:

1. **Background**: Use `w-full bg-neutral-800 rounded-full h-2` for the track
2. **Progress fill**: Use `bg-orange-500 h-2 rounded-full transition-all duration-300` for the progress indicator
3. **Animation**: Use `transition-all duration-300` for smooth progress updates

### Charts and Graphs

Simple charts use SVG with these specifications:

1. **Container**: Use `absolute inset-0 w-full h-full` for full-size SVG
2. **Lines**: Use `stroke="#f97316"` (orange) and `strokeWidth="2"` for chart lines
3. **Style**: Use `fill="none"` for line charts

### Activity Logs

Activity logs use this distinctive pattern:

1. **Container**: Use `text-xs border-l-2 border-orange-500 pl-3` for the left border accent
2. **Hover effect**: Use `hover:bg-neutral-800 p-2 rounded transition-colors` for interactivity
3. **Timestamp**: Use `text-neutral-500 font-mono` for the time display
4. **Content**: Use `text-white` with `text-orange-500 font-mono` for highlighted elements

## Interactive Elements

### Hover States

Interactive elements use these hover patterns:

1. **Cards**: Use `hover:border-orange-500/50 transition-colors` for card hover effects
2. **Primary buttons**: Use `hover:bg-orange-600` for button hover states
3. **Ghost buttons**: Use `hover:text-orange-500` for icon button hover states
4. **Table rows**: Use `hover:bg-neutral-800 transition-colors cursor-pointer` for row hover effects

### Transitions

Use consistent transition timing:

1. **Color changes**: Use `transition-colors` for smooth color transitions
2. **Complex animations**: Use `transition-all duration-300` for multi-property animations

### Focus States

Maintain accessibility with these focus patterns:

1. **Focus rings**: Use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring` for keyboard navigation

## Responsive Design

### Mobile Considerations

Mobile design requires these adaptations:

1. **Collapsible sidebar**: Create a sidebar that can be hidden on mobile with overlay
2. **Vertical stacking**: Stack grid items vertically on small screens
3. **Text sizing**: Adjust text sizes for mobile readability
4. **Responsive prefixes**: Use `sm:`, `md:`, `lg:`, `xl:` prefixes for responsive classes

### Breakpoint Strategy

Use these breakpoint strategies:

1. **Mobile**: Use single column layouts for screens under 768px
2. **Tablet**: Use 2-column grids where appropriate for screens 768px-1024px
3. **Desktop**: Use full multi-column layouts for screens 1024px-1280px
4. **Large screens**: Use maximum 4 columns for stats and 3 for content cards on screens over 1280px

## Icon System

### Icon Guidelines

Icons should follow these rules:

1. **Icon library**: Use Lucide React icons consistently throughout the application
2. **Small icons**: Use `w-4 h-4` for small icons like in buttons and status indicators
3. **Large icons**: Use `w-6 h-6` for larger icons like in cards and headers
4. **Default color**: Use `text-neutral-400` for most icons
5. **Accent color**: Use `text-orange-500` for highlighted or important icons
6. **Primary color**: Use `text-white` for primary navigation icons
7. **Button spacing**: Use `mr-2` spacing when icons are inside buttons

### Common Icons

Use these specific icons for these purposes:

1. **Navigation icons**: Use `Monitor`, `Users`, `Target`, `Shield`, `Settings` for main navigation
2. **Action icons**: Use `Search`, `Filter`, `MoreHorizontal`, `RefreshCw` for user actions
3. **Status icons**: Use `CheckCircle`, `AlertTriangle`, `XCircle`, `Clock` for status indicators
4. **Data icons**: Use `MapPin`, `FileText`, `Download`, `Eye` for data-related actions

## Form Elements

### Input Fields

Input fields should use this styling:

1. **Background**: Use `bg-neutral-800` for the input background
2. **Border**: Use `border-neutral-600` for the input border
3. **Text**: Use `text-white` for the input text
4. **Placeholder**: Use `placeholder-neutral-400` for placeholder text

### Search Patterns

Search inputs should follow this pattern:

1. **Container**: Use `relative` positioning for the search container
2. **Icon positioning**: Use `absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400` for the search icon
3. **Input padding**: Use `pl-10` to make room for the left-positioned icon

## Table Design

### Table Structure

Tables should follow this structure:

1. **Header row**: Use `border-b border-neutral-700` for header separation
2. **Header text**: Use `text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider` for column headers
3. **Data rows**: Use `border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer` for interactive rows
4. **Data cells**: Use `py-3 px-4 text-sm text-white font-mono` for data content

### Table Styling

Table styling should include:

1. **Alternating backgrounds**: Use `bg-neutral-900` and `bg-neutral-850` for alternating rows
2. **Hover effects**: Use `hover:bg-neutral-800` for row hover states
3. **Monospace data**: Use `font-mono` for technical data in tables
4. **Consistent padding**: Use `py-3 px-4` for all table cells

## Modal and Overlay Patterns

### Modal Structure

Modals should use this structure:

1. **Overlay**: Use `fixed inset-0 bg-black/50` for the background overlay
2. **Container**: Use `flex items-center justify-center p-4 z-50` for modal positioning
3. **Modal card**: Use `bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto` for the modal content

## Animation Guidelines

### Loading States

Loading states should use these patterns:

1. **Pulse animation**: Use `animate-pulse` for loading indicators
2. **Status changes**: Use subtle animations for status indicator changes
3. **Hover transitions**: Use smooth transitions for hover state changes

### Micro-interactions

Micro-interactions should include:

1. **Button hover effects**: Smooth color transitions on button hover
2. **Card border changes**: Subtle border color changes on card hover
3. **Progress bar animations**: Smooth progress updates with transitions
4. **Status indicator transitions**: Smooth color changes for status updates

## Accessibility Considerations

### Color Contrast

Ensure accessibility with these practices:

1. **Sufficient contrast**: Ensure all text has sufficient contrast against backgrounds
2. **Status indicators**: Use both color and text for status indicators, not just color
3. **Icon alternatives**: Provide alternative text for all icons

### Keyboard Navigation

Support keyboard users with these features:

1. **Logical tab order**: Maintain logical tab order throughout the interface
2. **Focus indicators**: Provide clear focus indicators for all interactive elements
3. **Keyboard shortcuts**: Support keyboard shortcuts where appropriate

### Screen Reader Support

Support screen readers with these practices:

1. **Semantic HTML**: Use semantic HTML elements throughout the interface
2. **Descriptive labels**: Provide descriptive labels for all form elements
3. **ARIA attributes**: Include appropriate ARIA attributes where needed

## Using the `cn` Utility Function

The design system uses a utility function called `cn` for combining CSS classes. This function is essential for proper class management and should be used in all components.

### What the `cn` Function Does

The `cn` function combines `clsx` and `tailwind-merge` to:

1. **Merge multiple class strings** - Combines multiple class arguments into a single string
2. **Handle conditional classes** - Processes boolean conditions and conditional class names
3. **Resolve Tailwind conflicts** - Automatically resolves conflicting Tailwind classes (e.g., `text-red-500` and `text-blue-500`)
4. **Clean up duplicates** - Removes duplicate classes and keeps the last occurrence

### How to Use the `cn` Function

Import the function at the top of your component files:

```tsx
import { cn } from "@/lib/utils";
```

### Usage Patterns

#### Basic Class Combination

```tsx
className={cn("base-class", "additional-class")}
```

#### Conditional Classes

```tsx
className={cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "disabled-class"
)}
```

#### Component Props with Default Classes

```tsx
const Button = ({ className, ...props }) => (
  <button className={cn("bg-orange-500 hover:bg-orange-600 text-white", className)} {...props} />
);
```

#### Complex Conditional Styling

```tsx
className={cn(
  "base-card-styles",
  variant === "primary" && "bg-orange-500 text-white",
  variant === "secondary" && "bg-neutral-800 text-neutral-300",
  size === "large" && "p-6",
  size === "small" && "p-2"
)}
```

### When to Use `cn`

Use the `cn` function in these situations:

1. **Component definitions** - When creating reusable components with className props
2. **Conditional styling** - When applying different styles based on props or state
3. **Class overrides** - When allowing parent components to override default styles
4. **Complex class logic** - When combining multiple conditional classes
5. **Tailwind conflicts** - When you need to resolve conflicting Tailwind classes

### Examples in the Design System

#### Status Indicator Component

```tsx
const StatusDot = ({ status, className }) => (
  <div
    className={cn(
      "w-2 h-2 rounded-full",
      status === "active" && "bg-white",
      status === "standby" && "bg-neutral-500",
      status === "training" && "bg-orange-500",
      status === "compromised" && "bg-red-500",
      className
    )}
  />
);
```

#### Card Component with Variants

```tsx
const Card = ({ variant = "default", className, ...props }) => (
  <div
    className={cn(
      "rounded-lg border",
      variant === "default" && "bg-neutral-900 border-neutral-700",
      variant === "elevated" && "bg-neutral-800 border-neutral-600 shadow-lg",
      className
    )}
    {...props}
  />
);
```

#### Button with Size and State

```tsx
const Button = ({ size = "default", disabled, className, ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      size === "default" && "h-10 px-4 py-2",
      size === "sm" && "h-9 px-3",
      size === "lg" && "h-11 px-8",
      "bg-orange-500 hover:bg-orange-600 text-white",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
    {...props}
  />
);
```

### Best Practices

1. **Always import `cn`** - Import it at the top of every component file
2. **Use for all className props** - Apply it to all components that accept className
3. **Put base classes first** - Always put the base/default classes as the first argument
4. **Group conditionals** - Group related conditional classes together
5. **Put className prop last** - Always put the className prop as the last argument to allow overrides
6. **Use descriptive variable names** - Use clear variable names for conditional logic

### Common Patterns

#### Base Component Pattern

```tsx
const ComponentName = ({ className, variant, size, ...props }) => (
  <div
    className={cn(
      // Base classes
      "base-class-1 base-class-2",

      // Variant classes
      variant === "primary" && "primary-classes",
      variant === "secondary" && "secondary-classes",

      // Size classes
      size === "small" && "small-classes",
      size === "large" && "large-classes",

      // State classes
      disabled && "disabled-classes",

      // Allow parent override
      className
    )}
    {...props}
  />
);
```

This utility function is essential for maintaining clean, maintainable, and flexible component styling throughout the design system.

## Implementation Checklist

When implementing this design system, follow these steps in order:

1. **Set up color variables** - Configure CSS custom properties for the color palette
2. **Configure Tailwind** - Set up Tailwind CSS with the color palette and custom values
3. **Create base components** - Build the foundational components (Card, Button, Badge, etc.)
4. **Implement layout patterns** - Create the sidebar, main content area, and grid systems
5. **Add status indicators** - Implement the color-coded status system
6. **Style typography** - Apply the text hierarchy and font system
7. **Add responsive breakpoints** - Implement responsive design patterns
8. **Test accessibility** - Verify contrast ratios and keyboard navigation
9. **Implement hover states** - Add interactive hover effects and transitions
10. **Add loading states** - Implement loading indicators and animations

## Common Patterns Summary

### Card with Header Pattern

Use this pattern for all cards with headers:

1. **Card container**: `bg-neutral-900 border-neutral-700`
2. **Header**: `pb-3` with `text-sm font-medium text-neutral-300 tracking-wider`
3. **Content**: Standard card content area

### Status Badge Pattern

Use this pattern for all status badges:

1. **Background**: `bg-orange-500/20` for semi-transparent background
2. **Text**: `text-orange-500` for the badge text
3. **Format**: Uppercase text with `tracking-wider`

### Stats Card Pattern

Use this pattern for statistics displays:

1. **Card**: `bg-neutral-900 border-neutral-700`
2. **Content**: `p-4` with flex layout
3. **Label**: `text-xs text-neutral-400 tracking-wider`
4. **Value**: `text-2xl font-bold text-white font-mono`
5. **Icon**: `w-8 h-8 text-white` positioned on the right

### Action Button Pattern

Use this pattern for primary action buttons:

1. **Background**: `bg-orange-500 hover:bg-orange-600`
2. **Text**: `text-white`
3. **Style**: Standard button with orange accent

This design system creates a cohesive, military-inspired interface that emphasizes readability, status clarity, and professional appearance while maintaining modern web standards and accessibility.
