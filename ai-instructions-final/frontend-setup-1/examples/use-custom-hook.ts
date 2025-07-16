// Example: Custom hook for a new feature
// This shows how to create a feature-specific hook using the shared patterns

import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";

// Example types (these would be defined in your actual types file)
interface CustomFeature {
  id: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
}

interface CustomFeatureQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}

interface CreateCustomFeatureData {
  name: string;
  status: "ACTIVE" | "INACTIVE";
}

// Example configuration (this would be in your actual config file)
const CUSTOM_FEATURE_CONFIG = {
  endpoints: {
    list: "/api/custom-features",
    create: "/api/custom-features",
    get: (id: string) => `/api/custom-features/${id}`,
    update: (id: string) => `/api/custom-features/${id}`,
    delete: (id: string) => `/api/custom-features/${id}`,
  },
  defaultQueryParams: {
    page: 1,
    limit: 10,
    search: "",
  },
  refreshIntervals: {
    list: 10000, // 10 seconds
    detail: 30000, // 30 seconds
  },
};

// Example fetcher function
const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch data");
  }

  return response.json();
};

// Example: Hook for list data (using SWR directly)
export function useCustomFeatureList(queryParams?: CustomFeatureQueryParams) {
  const { token } = useAuth();

  // Build query string
  const queryString = queryParams
    ? "?" +
      new URLSearchParams(
        Object.entries(queryParams)
          .filter(([_, value]) => value !== undefined)
          .map(([key, value]) => [key, String(value)])
      ).toString()
    : "";

  const url = `${CUSTOM_FEATURE_CONFIG.endpoints.list}${queryString}`;

  const { data, error, isLoading, mutate } = useSWR(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => fetcher(url, token),
    {
      refreshInterval: CUSTOM_FEATURE_CONFIG.refreshIntervals.list,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  return {
    data: data?.data?.items || [],
    pagination: data?.data?.pagination,
    isLoading,
    error: error?.message || null,
    mutate,
  };
}

// Example: Hook for individual item
export function useCustomFeature(id: string) {
  const { token } = useAuth();

  const { data, error, isLoading, mutate } = useSWR(
    token ? [CUSTOM_FEATURE_CONFIG.endpoints.get(id), token] : null,
    ([url, token]: [string, string]) => fetcher(url, token),
    {
      refreshInterval: CUSTOM_FEATURE_CONFIG.refreshIntervals.detail,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  return {
    data: data?.data,
    isLoading,
    error: error?.message || null,
    mutate,
  };
}

// Example: Hook for creating new items
export function useCreateCustomFeature() {
  const { token } = useAuth();
  const { mutate } = useCustomFeatureList();

  const createFeature = async (featureData: CreateCustomFeatureData) => {
    const response = await fetch(CUSTOM_FEATURE_CONFIG.endpoints.create, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(featureData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create feature");
    }

    // Invalidate and revalidate the list
    mutate();

    return response.json();
  };

  return { createFeature };
}
