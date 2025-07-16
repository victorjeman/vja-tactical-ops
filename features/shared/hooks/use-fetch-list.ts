import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";
import { PaginatedAPIResponse, ListQueryParams, APIError } from "../types/api-types";

interface UseFetchListOptions {
  queryParams?: ListQueryParams;
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: number;
}

interface UseFetchListReturn<T> {
  data: T[] | undefined;
  pagination:
    | {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
      }
    | undefined;
  isLoading: boolean;
  error: string | null;
  mutate: () => void;
}

const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData: APIError = await response.json();
    throw new Error(errorData.error || "Failed to fetch data");
  }

  return response.json();
};

export function useFetchList<T>(endpoint: string, options: UseFetchListOptions = {}): UseFetchListReturn<T> {
  const { token } = useAuth();
  const { queryParams, ...swrOptions } = options;

  // Build query string from params
  const queryString = queryParams
    ? "?" +
      new URLSearchParams(
        Object.entries(queryParams)
          .filter(([_, value]) => value !== undefined)
          .map(([key, value]) => [key, String(value)])
      ).toString()
    : "";

  const url = `${endpoint}${queryString}`;

  const { data, error, isLoading, mutate } = useSWR<PaginatedAPIResponse<T>>(
    token ? [url, token] : null,
    ([url, token]: [string, string]) => fetcher(url, token),
    {
      revalidateOnFocus: options.revalidateOnFocus ?? true,
      revalidateOnReconnect: options.revalidateOnReconnect ?? true,
      refreshInterval: options.refreshInterval,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
    }
  );

  // Extract the actual data array from the response
  // The response structure is { data: { items: T[], pagination: PaginationInfo } }
  const items = data?.data ? (Object.values(data.data).find(Array.isArray) as T[]) : undefined;
  const pagination = data?.data?.pagination;

  return {
    data: items,
    pagination,
    isLoading,
    error: error?.message || null,
    mutate,
  };
}
