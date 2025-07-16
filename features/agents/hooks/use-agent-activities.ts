import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { AgentActivity, AgentActivitiesQueryParams } from "../types/agent-types";
import { AGENT_CONFIG } from "../config/agent-config";

export function useAgentActivities(agentId: string, queryParams?: AgentActivitiesQueryParams) {
  return useFetchList<AgentActivity>(AGENT_CONFIG.endpoints.activities.list(agentId), {
    queryParams: {
      page: 1,
      limit: 10,
      ...queryParams,
    },
  });
}
