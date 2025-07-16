import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { Operation, OperationListQueryParams } from "../types/operation-types";
import { OPERATION_CONFIG } from "../config/operation-config";

export function useOperationList(queryParams?: OperationListQueryParams) {
  return useFetchList<Operation>(OPERATION_CONFIG.endpoints.list, {
    queryParams: {
      ...OPERATION_CONFIG.defaultQueryParams,
      ...queryParams,
    },
  });
}
