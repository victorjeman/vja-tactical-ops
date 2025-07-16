"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Settings,
  Server,
  Shield,
  Database,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  Cpu,
  HardDrive,
  Network,
} from "lucide-react";
import { useSysList, type System, type SystemListQueryParams } from "@/features";

export default function SystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);
  const [queryParams, setQueryParams] = useState<SystemListQueryParams>({
    page: 1,
    limit: 10,
    search: "",
  });

  // Fetch systems using the new hook
  const { data: systems, isLoading, error, pagination } = useSysList(queryParams);

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-800 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-neutral-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500">Error loading systems: {error}</div>
      </div>
    );
  }

  const getStatusColor = (status: System["status"]) => {
    switch (status) {
      case "ONLINE":
        return "bg-green-500/20 text-green-500";
      case "MAINTENANCE":
        return "bg-orange-500/20 text-orange-500";
      case "OFFLINE":
        return "bg-red-500/20 text-red-500";
      case "WARNING":
        return "bg-orange-500/20 text-orange-500";
      default:
        return "bg-neutral-500/20 text-neutral-300";
    }
  };

  const getStatusIcon = (status: System["status"]) => {
    switch (status) {
      case "ONLINE":
        return <CheckCircle className="w-4 h-4" />;
      case "MAINTENANCE":
        return <AlertTriangle className="w-4 h-4" />;
      case "OFFLINE":
        return <XCircle className="w-4 h-4" />;
      case "WARNING":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getSystemIcon = (type: System["type"]) => {
    switch (type) {
      case "PRIMARY_SERVER":
        return <Server className="w-6 h-6" />;
      case "DATABASE":
        return <Database className="w-6 h-6" />;
      case "NETWORK":
        return <Network className="w-6 h-6" />;
      case "FIREWALL":
        return <Shield className="w-6 h-6" />;
      case "PROCESSING":
        return <Cpu className="w-6 h-6" />;
      case "STORAGE":
        return <HardDrive className="w-6 h-6" />;
      default:
        return <Settings className="w-6 h-6" />;
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 80) return "text-green-500";
    if (health >= 60) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">SYSTEMS MONITOR</h1>
          <p className="text-sm text-neutral-400">Infrastructure and network status</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">System Report</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Maintenance</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ONLINE</p>
                <p className="text-2xl font-bold text-green-500 font-mono">
                  {systems?.filter((sys) => sys.status === "ONLINE").length || 0}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">MAINTENANCE</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">
                  {systems?.filter((sys) => sys.status === "MAINTENANCE").length || 0}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">WARNING</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">
                  {systems?.filter((sys) => sys.status === "WARNING").length || 0}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">AVG HEALTH</p>
                <p
                  className={`text-2xl font-bold font-mono ${
                    systems && systems.length > 0
                      ? getHealthColor(
                          Math.round(systems.reduce((acc, sys) => acc + sys.health, 0) / systems.length)
                        )
                      : "text-neutral-400"
                  }`}
                >
                  {systems && systems.length > 0
                    ? Math.round(systems.reduce((acc, sys) => acc + sys.health, 0) / systems.length)
                    : 0}
                  %
                </p>
              </div>
              <Activity className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {systems?.map((system) => (
          <Card
            key={system.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
            onClick={() => setSelectedSystem(system)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getSystemIcon(system.type)}
                  <div>
                    <CardTitle className="text-sm font-bold text-white tracking-wider">
                      {system.name}
                    </CardTitle>
                    <p className="text-xs text-neutral-400 font-mono">{system.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">{getStatusIcon(system.status)}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Badge className={getStatusColor(system.status)}>{system.status}</Badge>
                <Badge className="bg-neutral-500/20 text-neutral-300">{system.type}</Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-400">Health</span>
                    <span className={`font-mono ${getHealthColor(system.health)}`}>{system.health}%</span>
                  </div>
                  <Progress value={system.health} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Activity className="w-3 h-3" />
                    <span>Uptime: {system.uptime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Cpu className="w-3 h-3" />
                    <span>CPU: {system.cpu}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <HardDrive className="w-3 h-3" />
                    <span>Memory: {system.memory}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Detail Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                {getSystemIcon(selectedSystem.type)}
                <div>
                  <CardTitle className="text-xl font-bold text-white tracking-wider">
                    {selectedSystem.name}
                  </CardTitle>
                  <p className="text-sm text-neutral-400 font-mono">{selectedSystem.id}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedSystem(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">
                      SYSTEM STATUS
                    </h3>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(selectedSystem.status)}>{selectedSystem.status}</Badge>
                      <Badge className="bg-neutral-500/20 text-neutral-300">{selectedSystem.type}</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">
                      SYSTEM DETAILS
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Uptime:</span>
                        <span className="text-white font-mono">{selectedSystem.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">CPU:</span>
                        <span className="text-white font-mono">{selectedSystem.cpu}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Memory:</span>
                        <span className="text-white font-mono">{selectedSystem.memory}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Storage:</span>
                        <span className="text-white font-mono">{selectedSystem.storage}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">
                      HEALTH METRICS
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-neutral-400">Overall Health</span>
                          <span className={`font-mono ${getHealthColor(selectedSystem.health)}`}>
                            {selectedSystem.health}%
                          </span>
                        </div>
                        <Progress value={selectedSystem.health} className="h-3" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">SYSTEM INFO</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-neutral-300">
                        System ID: {selectedSystem.id}
                        <br />
                        Created: {selectedSystem.createdAt}
                        <br />
                        Updated: {selectedSystem.updatedAt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-neutral-700">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Run Diagnostics</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  View Logs
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  Schedule Maintenance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
