# Frontend Setup - API Integration & Data Management (For AI Agents)

Welcome! Your task is to help build and maintain the frontend data layer for the Tactical Operations Dashboard. This involves creating the connection between the React frontend and the API backend, managing state, handling authentication, and implementing data fetching patterns.

## How to Approach This Task

- **You are the frontend data layer expert.** The developer will give you high-level goals and requirements, but you'll need to implement the data fetching, state management, and API integration patterns.
- **Use SWR for data fetching.** SWR provides caching, revalidation, and error handling out of the box. It's perfect for real-time dashboards.
- **Follow established patterns.** The codebase already has a solid foundation with shared hooks and type definitions.
- **Prioritize user experience.** Implement loading states, error handling, and optimistic updates to keep the UI responsive.

## General Principles

- **Use SWR for all data fetching.** SWR provides automatic caching, background updates, and error handling.
- **Implement proper loading states.** Always show loading indicators while data is being fetched.
- **Handle errors gracefully.** Display user-friendly error messages and provide retry mechanisms.
- **Use TypeScript for type safety.** All API responses and data structures should be properly typed.
- **Implement authentication properly.** Use the existing auth context and ensure all API calls include proper headers.
- **Follow the established folder structure.** Keep feature-specific code organized in the `features/` directory.
- **Use shared hooks when possible.** Leverage the existing `useFetchList` and other shared utilities.

## Authentication Integration

### Auth Context Usage

The application uses a custom auth context that manages user sessions and tokens. All API calls should use this context to get the authentication token and user information. The context provides methods for login, logout, and checking authentication status.

### Protected Route Implementation

All pages that require authentication should be wrapped with the auth guard component. This ensures that unauthenticated users are redirected to the login page and prevents unauthorized access to protected content.

### API Headers

All API calls should include the authentication token in the Authorization header using the Bearer token format. This ensures that the backend can validate the user's session and provide appropriate access to resources.

## Data Fetching Patterns

### Using SWR for Data Fetching

SWR is the primary data fetching library. Use it for all API calls to get automatic caching, background updates, and error handling. Create fetcher functions that handle authentication headers and error responses consistently.

### Shared Fetch Hook

Use the existing `useFetchList` hook for paginated data. This hook provides a consistent interface for fetching lists with pagination, search, and filtering capabilities. It handles the common patterns like query parameter building and response parsing.

### Feature-Specific Hooks

Create feature-specific hooks that use the shared patterns. These hooks should encapsulate the data fetching logic for specific features while following the established conventions. They should accept query parameters and return consistent data structures.

## State Management

### Local State for UI

Use React's useState for UI-specific state like form inputs, modal visibility, and component interactions. Keep this state separate from server state to maintain clear separation of concerns.

### Server State with SWR

Let SWR handle server state (data from API). SWR manages caching, background updates, error states, loading states, and revalidation automatically. Don't duplicate this functionality with local state.

### Optimistic Updates

Implement optimistic updates for better user experience. Update the UI immediately when the user performs an action, then sync with the server. If the server request fails, revert the optimistic update and show an error message.

## Error Handling

### API Error Handling

Handle different types of API errors appropriately. Authentication errors should redirect to login, authorization errors should show access denied messages, server errors should show retry options, and validation errors should highlight specific form fields.

### UI Error Display

Show user-friendly error messages that help users understand what went wrong and how to fix it. Provide retry mechanisms for transient errors and clear guidance for permanent errors.

## Loading States

### Skeleton Loading

Use skeleton components for better user experience during initial loading. These should match the structure of the actual content to reduce layout shift and provide visual feedback.

### Progressive Loading

Show partial data while loading more content. This is especially important for paginated lists where you can display existing items while fetching the next page.

## Real-time Updates

### Polling for Real-time Data

Use SWR's refresh interval for real-time updates. Configure appropriate intervals based on the data type - dashboard stats might refresh every few seconds, while user profiles might refresh every few minutes.

### Manual Revalidation

Allow users to manually refresh data when needed. Provide refresh buttons or pull-to-refresh functionality for better user control.

## Form Handling

### API Integration with Forms

Handle form submissions with proper error handling and loading states. Validate input on both client and server side, show appropriate feedback, and handle success and error cases gracefully.

### Form State Management

Manage form state properly with controlled components. Handle form validation, submission states, and error display. Use the existing form components from the UI library for consistency.

## Configuration Management

### Feature Configuration

Create configuration files for each feature that define endpoints, default query parameters, and refresh intervals. This centralizes configuration and makes it easy to modify behavior across the application.

### Environment Configuration

Use environment variables for API configuration like base URLs, timeouts, and retry counts. This allows different configurations for development, staging, and production environments.

## Testing Considerations

### Mock Data for Development

Create mock data for development and testing. This allows you to develop features without depending on the backend and provides consistent test data for UI components.

### Error Testing

Test different error scenarios to ensure your error handling works correctly. Test network failures, server errors, authentication failures, and validation errors.

## Performance Optimization

### Pagination

Implement proper pagination for large datasets. Use the existing pagination patterns and ensure that only necessary data is loaded at any given time.

### Debounced Search

Implement debounced search to avoid excessive API calls. Wait for the user to stop typing before making search requests to reduce server load and improve performance.

### Memoization

Use React.memo and useMemo for expensive operations. Memoize components that receive stable props and expensive calculations to prevent unnecessary re-renders.

## How to Get Unstuck

- **If you're unsure about API response structure, check the existing types in the features directory.**
- **If you need to know how to implement a specific pattern, look at existing components for examples.**
- **If you're not sure about error handling, check how other components handle errors.**
- **If you need to understand the auth flow, examine the existing auth context and hooks.**

## What to Avoid

- Don't use useState for server state - use SWR instead.
- Don't make API calls without proper error handling.
- Don't forget to include authentication headers in API calls.
- Don't create duplicate hooks for similar functionality - use shared hooks.
- Don't ignore loading states - always provide feedback to users.
- Don't hardcode API URLs - use configuration files.
- Don't forget to handle empty states and error states in your UI.

## Documentation Links

Whenever you need details, refer to these:

- [SWR Documentation](https://swr.vercel.app/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

## Example Prompts for the Developer

- "What's the expected structure for the API response?"
- "Should this endpoint require authentication?"
- "What are the available query parameters for this endpoint?"
- "How should I handle the loading state for this component?"
- "What's the error handling strategy for this feature?"
- "Should I implement optimistic updates for this operation?"

## Final Thoughts

Your job is to create a seamless connection between the frontend and API. Focus on user experience, proper error handling, and following established patterns. Use SWR for data fetching, implement proper loading states, and always consider the user's perspective when building features.

**Ready? Let's build a great frontend data layer together!**
