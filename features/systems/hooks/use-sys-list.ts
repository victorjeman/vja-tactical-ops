import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { System, SystemListQueryParams } from "../types/sys-types";
import { SYS_CONFIG } from "../config/sys-config";

export function useSysList(queryParams?: SystemListQueryParams) {
  return useFetchList<System>(SYS_CONFIG.endpoints.list, {
    queryParams: {
      ...SYS_CONFIG.defaultQueryParams,
      ...queryParams,
    },
  });
}
