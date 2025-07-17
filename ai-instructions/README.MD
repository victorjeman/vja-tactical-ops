# AI Instructions Start

This folder contains the initial AI instructions for the project.

## Challenges

You will go through a series of challenges to implement the vja-tactical-ops application.

### Prologue - Create Initial Setup

**Context:**

You need to build a dashboard for a cyberpunk company.
You don't know much about the requirements or other details, but you're familiar with front-end technologies.
You assume the project will be built with Next.js, Tailwind CSS, Shadcn UI, and other modern technologies.

**Objectives:**

- Create a new project with Next.js, Tailwind CSS, and Shadcn UI.
- Consider using:
  - [ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)
  - or
  - [nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation)
- Install all Shadcn components.
- Create a folder called `ai-instructions`. You'll use this folder to store the AI instructions for each challenge.

**Rules of Engagement:**

- Use the CLI to create the project.
- Ensure you have all necessary dependencies installed on your machine.

### Challenge 1 - Replicate the App's Feel

**Context:**

AI has improved significantly and can now replicate apps with pure vibe coding—or can it?
A skilled product designer used the [v0.dev](https://v0.dev) platform to create the design for the application you need to build, but all requirements and technical documents were lost. There's nothing except the design, presented as a prototype for ease of use, but you can think of it as a Figma file.

Your mission is to analyze the provided design at [v0-cyberpunk-dashboard-design-cg.vercel.app/design](https://v0-cyberpunk-dashboard-design-cg.vercel.app/design) and determine the requirements for this project.

Based on the requirements you gather from analyzing the design, create a single detailed AI prompt that will be used to implement the app using AI agents.

**Objectives:**

- At this point, you likely won't manage to replicate the design with all functionalities and design system in place.
- Focus on recreating the design in terms of information, overall layout, pages, and other high-level details.

**Rules of Engagement:**

- Write your instructions in [challenge-1/ai-instructions.md](./challenge-1/ai-instructions.md)
- Available Time: 30 minutes
- TIP: Spend most of your time defining the requirements; don't waste time with half-finished prompts.
- You can use a single prompt to generate the overall application and up to 2 small prompts for fixing issues that arise.
- You can test your main prompt with AI multiple times, but start from scratch each time.

### Challenge 2 - Define the Design System

**Context:**

It turns out the requirements have been found and they're good to go.
Unfortunately, the product designer lost the design system and design tokens, and we have limited information.
Your mission is to define the design system in a `.md` file and, together with the requirements that have been found, create a single detailed AI prompt that will be used to implement the app using AI agents.

**Objectives:**

- Define the design system for your application so that when prompting the AI agent to generate the new design, it will look as similar as possible to the provided design.

**Rules of Engagement:**

- Available Time: 30 minutes
- Write your instructions in [challenge-2/ai-instructions.md](./challenge-2/ai-instructions.md)
- TIP: You can inspect the provided design by examining the browser console.

### Challenge 3 - Define the Database Schema

**Context:**

The designer remembered where the design system is, and we now have a clear description of it.
We have both product requirements and design system, so we can start defining our database.

**Objectives:**

- Define the database schema for your application so that when prompting the AI agent, it will generate a complete database with all required models.
- Add the necessary scripts in package.json to run Prisma Studio.

**Rules of Engagement:**

- Write your instructions in [challenge-3/ai-instructions.md](./challenge-3/ai-instructions.md)
- Available Time: 60 minutes
- You can try your prompt as many times as you want.
- TIP: I suggest you define the instructions very well first, then run the prompt.
- Use the AI to help you define the database schema based on your requirements.
- Use [prisma.io](https://www.prisma.io)

### Challenge 4 - Seed Your Database

**Context:**

You successfully defined the database schema. To add data to your database, you need to seed it.

**Objectives:**

- Create the necessary scripts to seed your database.

**Rules of Engagement:**

- Write your instructions in [challenge-4/ai-instructions.md](./challenge-4/ai-instructions.md)
- Available Time: 60 minutes
- You can try your prompt as many times as you want.
- Use the AI to help you define the seeding scripts by having it analyze the Prisma models.

### Challenge 5 - Create Your API

**Context:**

You have a database up and running with seed data. It's time to create the API for your application.

**Objectives:**

- Create the API for your application that will include basic CRUD operations for the models in your database.

**Rules of Engagement:**

- Write your instructions in [challenge-5/ai-instructions.md](./challenge-5/ai-instructions.md)
- Available Time: 90 minutes
- Make use of your database models to create the API.

### Challenge 6 - Connect List and Details API Endpoints

**Context:**

The product designer realized they could share with you the prototype they built with [v0.dev](https://v0.dev), and it's a good starting point for building the front-end. You can now use the Next.js pages and update them with real data from your API.

**Objectives:**

- Get the source code of the prototype from the product designer, integrate it into your project, and update the pages with real data.
- Focus on list pages that display lists of items.

**Rules of Engagement:**

- Available Time: 120 minutes
- Get the source code of the prototype from [v0-cyberpunk-dashboard-design-cg.vercel.app/design](https://v0-cyberpunk-dashboard-design-cg.vercel.app/design)
- If you don't have a v0.dev account yet, you can create one easily by signing up with your GitHub or Google account.
- Move the source code of the prototype to your project in strategic places, e.g., pages, components, lib, etc.
- Write your instructions in [challenge-6/ai-instructions.md](./challenge-6/ai-instructions.md)
- Based on your AI instructions, use the AI agent to create the necessary files (components, hooks, lib, config, types, etc.) and folders to get the prototype working with your API.
- Make use of any existing instructions to guide the AI.

### Challenge 7 - Connect Create and Edit API Endpoints

**Context:**

At this point, you should have some, if not all, pages connected to the API. You've mostly used GET endpoints for retrieving list items or item details.
It's time to focus on forms and the creation and editing of items. The product designer didn't provide any form design, so you'll have to improvise.

**Objectives:**

- Create forms for your main entities and connect them with the create and edit API endpoints.

**Rules of Engagement:**

- Write your instructions in [challenge-7/ai-instructions.md](./challenge-7/ai-instructions.md)
- Use the AI agent to create the necessary functionality for the forms.

### Challenge 8 - Focus on Feature-Driven Architecture

**Context:**

Depending on how detailed your approach was in Challenge 6, you may or may not have some sort of feature-driven architecture in place.
If not, that's not a problem. This challenge is to make you think in terms of features and how to organize your code so that it would be placed under the umbrella of a single feature. Here's a simple example: [github.com/naserrasoulii/feature-based-react](https://github.com/naserrasoulii/feature-based-react)

**Objectives:**

- Create a feature-driven architecture for your application.

**Rules of Engagement:**

- Available Time: 120 minutes
- Write your instructions in [challenge-8/ai-instructions.md](./challenge-8/ai-instructions.md)
- Use what you've learned so far to tackle this challenge.
