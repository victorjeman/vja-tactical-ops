import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";
import { DashboardStatsAPIResponse } from "../types/dashboard-types";
import { DASHBOARD_CONFIG } from "../config/dashboard-config";

const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  return response.json();
};

export function useDashboardStats() {
  const { token } = useAuth();

  const { data, error, isLoading, mutate } = useSWR<DashboardStatsAPIResponse>(
    token ? [DASHBOARD_CONFIG.endpoints.stats, token] : null,
    ([url, token]: [string, string]) => fetcher(url, token),
    {
      refreshInterval: DASHBOARD_CONFIG.refreshIntervals.stats,
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
