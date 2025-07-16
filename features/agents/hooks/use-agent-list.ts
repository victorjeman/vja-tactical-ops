import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { Agent, AgentListQueryParams } from "../types/agent-types";
import { AGENT_CONFIG } from "../config/agent-config";

export function useAgentList(queryParams?: AgentListQueryParams) {
  return useFetchList<Agent>(AGENT_CONFIG.endpoints.list, {
    queryParams: {
      ...AGENT_CONFIG.defaultQueryParams,
      ...queryParams,
    },
  });
}
