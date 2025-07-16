// Example: SWR fetcher patterns and configurations
// This shows different ways to implement SWR fetchers for various use cases

import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";
import { useState, useEffect } from "react";

// Basic fetcher function
const basicFetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

// Advanced fetcher with error handling
const advancedFetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Authentication required");
    } else if (response.status === 403) {
      throw new Error("Access denied");
    } else if (response.status >= 500) {
      throw new Error("Server error. Please try again later.");
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "An error occurred");
    }
  }

  return response.json();
};

// Hook for basic data fetching
export function useBasicData(url: string) {
  const { token } = useAuth();

  return useSWR(token ? [url, token] : null, ([url, token]: [string, string]) => basicFetcher(url, token));
}

// Hook for real-time data with polling
export function useRealTimeData(url: string, interval: number = 5000) {
  const { token } = useAuth();

  return useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => advancedFetcher(url, token),
    {
      refreshInterval: interval,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );
}

// Hook for data that doesn't need frequent updates
export function useStableData(url: string) {
  const { token } = useAuth();

  return useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => advancedFetcher(url, token),
    {
      refreshInterval: 0, // No automatic refresh
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}

// Hook with optimistic updates
export function useOptimisticData(url: string) {
  const { token } = useAuth();

  const { data, error, isLoading, mutate } = useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => advancedFetcher(url, token)
  );

  const optimisticUpdate = async (newData: any) => {
    // Optimistically update the cache
    mutate(newData, false);

    try {
      // Make the actual API call
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      // Revalidate to ensure consistency
      mutate();
    } catch (error) {
      // Revert on error
      mutate();
      throw error;
    }
  };

  return {
    data,
    error,
    isLoading,
    mutate,
    optimisticUpdate,
  };
}

// Hook for paginated data
export function usePaginatedData(baseUrl: string, page: number, limit: number) {
  const { token } = useAuth();

  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  return useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => advancedFetcher(url, token),
    {
      keepPreviousData: true, // Keep previous data while loading new page
    }
  );
}

// Hook for search with debouncing
export function useSearchData(baseUrl: string, searchTerm: string, debounceMs: number = 300) {
  const { token } = useAuth();

  // Simple debounce implementation
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs]);

  const url = debouncedSearch ? `${baseUrl}?search=${encodeURIComponent(debouncedSearch)}` : baseUrl;

  return useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => advancedFetcher(url, token),
    {
      revalidateOnFocus: false,
    }
  );
}
