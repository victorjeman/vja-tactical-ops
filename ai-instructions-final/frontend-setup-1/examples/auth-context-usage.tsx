// Example: Using the auth context in components
// This shows how to properly use the authentication context for API calls and protected routes

"use client";

import { useAuth } from "@/hooks/use-auth";
import { AuthGuard } from "@/components/auth-guard";

// Example: Component that uses auth context for API calls
export function AuthenticatedComponent() {
  const { token, user, isAuthenticated, logout } = useAuth();

  const handleApiCall = async () => {
    if (!token) {
      console.log("No authentication token available");
      return;
    }

    try {
      const response = await fetch("/api/protected-endpoint", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid
          logout();
          return;
        }
        throw new Error("API call failed");
      }

      const data = await response.json();
      console.log("API response:", data);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  return (
    <div>
      <p>Welcome, {user?.username}!</p>
      <p>Your role: {user?.role}</p>
      <button onClick={handleApiCall}>Make API Call</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// Example: Protected page wrapper
export function ProtectedPage() {
  return (
    <AuthGuard>
      <AuthenticatedComponent />
    </AuthGuard>
  );
}

// Example: Conditional rendering based on authentication
export function ConditionalAuthComponent() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in to access this content.</div>;
  }

  return (
    <div>
      <h2>Welcome back, {user?.username}!</h2>
      <p>You have access to protected content.</p>
    </div>
  );
}
