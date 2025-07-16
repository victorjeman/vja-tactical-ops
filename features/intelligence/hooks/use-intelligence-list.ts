import { useFetchList } from "../../shared/hooks/use-fetch-list";
import { IntelligenceReport, IntelligenceListQueryParams } from "../types/intelligence-types";
import { INTELLIGENCE_CONFIG } from "../config/intelligence-config";

export function useIntelligenceList(queryParams?: IntelligenceListQueryParams) {
  return useFetchList<IntelligenceReport>(INTELLIGENCE_CONFIG.endpoints.list, {
    queryParams: {
      ...INTELLIGENCE_CONFIG.defaultQueryParams,
      ...queryParams,
    },
  });
}
