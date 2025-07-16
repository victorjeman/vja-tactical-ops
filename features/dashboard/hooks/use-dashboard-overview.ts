import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";
import { DashboardOverviewAPIResponse } from "../types/dashboard-types";
import { DASHBOARD_CONFIG } from "../config/dashboard-config";

const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard overview");
  }

  return response.json();
};

export function useDashboardOverview() {
  const { token } = useAuth();

  const { data, error, isLoading, mutate } = useSWR<DashboardOverviewAPIResponse>(
    token ? [DASHBOARD_CONFIG.endpoints.overview, token] : null,
    ([url, token]: [string, string]) => fetcher(url, token),
    {
      refreshInterval: DASHBOARD_CONFIG.refreshIntervals.overview,
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
