// Shared API response types used across all features

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface APIError {
  success: false;
  error: string;
  details?: any;
}

export interface APIResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface PaginatedAPIResponse<T> {
  success: true;
  data: {
    [key: string]: T[];
    pagination: PaginationInfo;
  };
}

export interface ListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// Generic type for any API response
export type AnyAPIResponse<T> = APIResponse<T> | PaginatedAPIResponse<T> | APIError;
