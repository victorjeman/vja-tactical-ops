import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { OperationAgent, OperationAgentsQueryParams } from "../types/operation-types";
import { OPERATION_CONFIG } from "../config/operation-config";

export function useOperationAgents(operationId: string, queryParams?: OperationAgentsQueryParams) {
  return useFetchList<OperationAgent>(OPERATION_CONFIG.endpoints.agents.list(operationId), {
    queryParams: {
      page: 1,
      limit: 10,
      ...queryParams,
    },
  });
}
