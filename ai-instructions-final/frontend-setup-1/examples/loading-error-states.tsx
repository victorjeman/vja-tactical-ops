// Example: Loading and error state patterns
// This shows different ways to handle loading states, error states, and empty states

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Loader2 } from "lucide-react";

// Skeleton loading component
export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-neutral-800 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

// Spinner loading component
export function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader2 className="h-8 w-8 animate-spin text-white" />
    </div>
  );
}

// Error state component
export function ErrorState({ error, onRetry }: { error: string; onRetry?: () => void }) {
  return (
    <Card className="border-red-500/20 bg-red-500/10">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-2 text-red-500 mb-4">
          <AlertCircle className="h-5 w-5" />
          <span className="font-medium">Error</span>
        </div>
        <p className="text-red-400 mb-4">{error}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// Empty state component
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <Card>
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-neutral-400 mb-4">{description}</p>
        {action && <Button onClick={action.onClick}>{action.label}</Button>}
      </CardContent>
    </Card>
  );
}

// Component with all states
export function DataComponent({
  data,
  isLoading,
  error,
  onRetry,
}: {
  data: any[];
  isLoading: boolean;
  error: string | null;
  onRetry?: () => void;
}) {
  // Initial loading state
  if (isLoading && !data.length) {
    return (
      <div className="p-6">
        <SkeletonLoader />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6">
        <ErrorState error={error} onRetry={onRetry} />
      </div>
    );
  }

  // Empty state
  if (!data.length && !isLoading) {
    return (
      <div className="p-6">
        <EmptyState
          title="No data found"
          description="There are no items to display at the moment."
          action={{
            label: "Create New Item",
            onClick: () => console.log("Create new item"),
          }}
        />
      </div>
    );
  }

  // Success state with data
  return (
    <div className="p-6">
      <div className="space-y-4">
        {data.map((item: any) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-neutral-400">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loading indicator for subsequent loads */}
      {isLoading && data.length > 0 && (
        <div className="mt-4">
          <SpinnerLoader />
        </div>
      )}
    </div>
  );
}

// Progressive loading component
export function ProgressiveLoadingComponent({
  data,
  isLoading,
  error,
  onRetry,
}: {
  data: any[];
  isLoading: boolean;
  error: string | null;
  onRetry?: () => void;
}) {
  return (
    <div className="p-6">
      {/* Always show existing data if available */}
      {data.length > 0 && (
        <div className="space-y-4 mb-6">
          {data.map((item: any) => (
            <Card key={item.id}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Show loading indicator */}
      {isLoading && (
        <div className="mb-6">
          <SpinnerLoader />
        </div>
      )}

      {/* Show error if no data and error exists */}
      {error && !data.length && <ErrorState error={error} onRetry={onRetry} />}

      {/* Show empty state if no data, no loading, no error */}
      {!data.length && !isLoading && !error && (
        <EmptyState
          title="No data available"
          description="Start by creating your first item."
          action={{
            label: "Get Started",
            onClick: () => console.log("Get started"),
          }}
        />
      )}
    </div>
  );
}
