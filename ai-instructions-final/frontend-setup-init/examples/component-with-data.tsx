// Example: React component with proper data fetching patterns
// This shows how to implement a component that fetches and displays data

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, RefreshCw, AlertCircle, Plus } from "lucide-react";
import { useCustomFeatureList, useCreateCustomFeature } from "./use-custom-hook";

export default function CustomFeaturePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  // Fetch data using the custom hook
  const { data: features, isLoading, error, pagination, mutate } = useCustomFeatureList(queryParams);

  // Hook for creating new features
  const { createFeature } = useCreateCustomFeature();

  // Handle search input
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setQueryParams((prev) => ({ ...prev, search: value, page: 1 }));
  };

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setQueryParams((prev) => ({ ...prev, page: newPage }));
  };

  // Handle refresh
  const handleRefresh = () => {
    mutate();
  };

  // Loading state
  if (isLoading && !features?.length) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-800 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-24 bg-neutral-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6">
        <Card className="border-red-500/20 bg-red-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              <span>Error loading features: {error}</span>
            </div>
            <Button onClick={handleRefresh} variant="outline" className="mt-4">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Empty state
  if (!features?.length && !isLoading) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-neutral-400 mb-4">No features found</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Feature
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Custom Features</h1>
        <div className="flex items-center space-x-4">
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Feature
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
        <Input
          placeholder="Search features..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Features List */}
      <div className="space-y-4">
        {features?.map((feature: any) => (
          <Card
            key={feature.id}
            className="cursor-pointer hover:bg-neutral-800/50 transition-colors"
            onClick={() => setSelectedFeature(feature)}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{feature.name}</h3>
                  <p className="text-sm text-neutral-400">
                    Created {new Date(feature.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant={feature.status === "ACTIVE" ? "default" : "secondary"}>
                  {feature.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-400">
            Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
            {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} features
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!pagination.hasPrev}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-neutral-400">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={!pagination.hasNext}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Loading indicator for subsequent loads */}
      {isLoading && features?.length && (
        <div className="text-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}
    </div>
  );
}
