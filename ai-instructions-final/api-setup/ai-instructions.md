# Guidance for Building the API Layer (For AI Agents)

Welcome! Your task is to help build and maintain the API for the Tactical Operations Dashboard. This API is the bridge between the database and the frontend, handling things like agents, operations, intelligence, authentication, and dashboard data.

## How to Approach This Task

- **You are the expert assistant.** The developer will give you high-level goals and links to documentation, but not detailed code or step-by-step instructions.
- **Use Hono for all API endpoints.** Hono is a modern, fast, and flexible framework that works well with Next.js. It supports validation, middleware, and clean error handling.
- **Rely on official documentation.** If you need details about Hono, Prisma, or Next.js, use the links provided by the developer. If you're unsure, ask for clarification or for a link to the relevant docs.
- **Prioritize clarity and maintainability.** Write code and design endpoints in a way that's easy for others to understand and extend.

## General Principles

- **Design RESTful endpoints.** Use clear, resource-based URLs (e.g., `/api/agents`, `/api/operations`).
- **Validate all input.** Use Zod (with Hono's built-in support) to ensure all incoming data is correct and safe.
- **Handle errors gracefully.** Always return clear, consistent error messages. Don't leak sensitive details.
- **Use middleware for cross-cutting concerns.** Things like authentication, logging, and CORS should be handled with Hono middleware.
- **Paginate and filter lists.** For endpoints that return lists, always support pagination and filtering.
- **Secure sensitive operations.** Use authentication and authorization checks for any action that changes data or accesses private information.
- **Keep responses consistent.** Always return a clear structure indicating success or failure, and include helpful metadata (like pagination info) when relevant.

## Authentication and Security Implementation

### Session-Based Authentication

The application uses session-based authentication with database-stored session tokens. This approach provides better security and control over user sessions compared to stateless JWT tokens.

**Session Management**: Implement session creation, validation, and cleanup. Sessions should have expiration times and be stored in the database with proper user associations.

**Token Security**: Generate secure, random session tokens using cryptographic functions. Never use predictable or sequential token generation.

**Session Validation**: Create middleware that validates session tokens on protected routes. This middleware should check token existence, expiration, and user account status.

**Automatic Cleanup**: Implement logic to automatically remove expired sessions from the database to prevent accumulation of stale data.

### Protected Route Implementation

All API endpoints that access sensitive data or perform operations should require authentication. This includes agents, operations, intelligence reports, systems, and dashboard statistics.

**Authentication Middleware**: Create reusable middleware functions that can be applied to any route requiring authentication. This middleware should extract the session token from the Authorization header and validate it against the database.

**User Context**: Once authenticated, make the user information available to the route handlers. This allows for user-specific operations and audit logging.

**Role-Based Access Control**: Implement role-based authorization where different user roles have access to different features. Consider creating additional middleware for role checking.

### Login and Logout Flow

**Login Process**: The login endpoint should validate user credentials, create a new session, and return the session token along with user information. Always use secure password comparison methods.

**Logout Process**: The logout endpoint should invalidate the current session by removing it from the database. This ensures that the session token cannot be reused.

**Session Validation**: Provide an endpoint that allows the frontend to validate the current session and retrieve updated user information.

### Security Best Practices

**Password Handling**: Never store or log plain text passwords. Use secure hashing algorithms for password storage and comparison.

**Error Messages**: Provide generic error messages for authentication failures to prevent information leakage. Don't reveal whether a username exists or if the password is incorrect.

**Rate Limiting**: Consider implementing rate limiting on authentication endpoints to prevent brute force attacks.

**CORS Configuration**: Properly configure CORS settings to restrict access to trusted domains only.

**Input Validation**: Validate all authentication-related inputs, including email formats, password strength, and session token formats.

### Development and Testing Considerations

**Test Credentials**: Use the test user credentials created during database seeding for development and testing. These credentials should be documented and easily accessible for development workflow.

**Session Testing**: Create test session tokens that can be used to test protected endpoints without going through the login process repeatedly.

**Role Testing**: Ensure you can test different user roles to verify that role-based access control works correctly throughout the application.

**Error Handling**: Test various authentication failure scenarios, including expired sessions, invalid tokens, and deactivated user accounts.

## How to Get Unstuck

- **If you're unsure about a business rule or data shape, ask the developer for clarification.**
- **If you need to know how to use a library, ask for the official documentation link.**
- **If you're not sure about a best practice, explain your reasoning and ask for feedback.**

## What to Avoid

- Don't rely on hardcoded or magic values—always use constants where possible.
- Don't expose internal errors or stack traces to the client.
- Don't skip validation, even for internal endpoints.
- Don't use outdated patterns (like legacy Next.js API routes)—always use Hono.
- Don't store plain text passwords or sensitive information in logs.
- Don't create authentication endpoints that leak information about user existence.
- Don't skip session cleanup and expiration handling.

## Documentation Links

Whenever you need details, refer to these (or ask the developer for more):

- [Hono Documentation](https://hono.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zod Documentation](https://zod.dev/)

## Example Prompts for the Developer

- "Can you provide the Hono docs link?"
- "What are the required fields for an agent?"
- "Should this endpoint be public or require authentication?"
- "Is there a preferred error response format?"
- "What are the test user credentials for development?"
- "Should I implement role-based access control for this endpoint?"

## Final Thoughts

Your job is to help the developer by making smart, maintainable, and secure API choices. Use Hono for everything, validate all input, implement proper authentication, and always ask for clarification or documentation if you're unsure. The developer will not provide detailed code—they expect you to use best practices and official docs.

**Ready? Let's build a great API together!**
