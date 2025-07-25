"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreHorizontal, MapPin, Clock, Shield } from "lucide-react";
import { useAgentList, type Agent, type AgentListQueryParams } from "@/features";

export default function AgentNetworkPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [queryParams, setQueryParams] = useState<AgentListQueryParams>({
    page: 1,
    limit: 10,
    search: "",
  });

  // Fetch agents using the new hook
  const { data: agents, isLoading, error, pagination } = useAgentList(queryParams);

  // Update search when searchTerm changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setQueryParams((prev) => ({ ...prev, search: value }));
  };

  // Filter agents based on search term (client-side filtering for demo)
  const filteredAgents =
    agents?.filter(
      (agent) =>
        agent.codename.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.id.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">AGENT NETWORK</h1>
          <p className="text-sm text-neutral-400">Manage and monitor field operatives</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Deploy Agent</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-1 bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE AGENTS</p>
                <p className="text-2xl font-bold text-white font-mono">847</p>
              </div>
              <Shield className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">COMPROMISED</p>
                <p className="text-2xl font-bold text-red-500 font-mono">3</p>
              </div>
              <Shield className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">IN TRAINING</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">23</p>
              </div>
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent List */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">AGENT ROSTER</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    AGENT ID
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    CODENAME
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    STATUS
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    LOCATION
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    LAST SEEN
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    MISSIONS
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    RISK
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAgents.map((agent, index) => (
                  <tr
                    key={agent.id}
                    className={`border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer ${
                      index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-850"
                    }`}
                    onClick={() => setSelectedAgent(agent)}
                  >
                    <td className="py-3 px-4 text-sm text-white font-mono">{agent.id}</td>
                    <td className="py-3 px-4 text-sm text-white">{agent.codename}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            agent.status === "ACTIVE"
                              ? "bg-white"
                              : agent.status === "STANDBY"
                              ? "bg-neutral-500"
                              : agent.status === "TRAINING"
                              ? "bg-orange-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <span className="text-xs text-neutral-300 uppercase tracking-wider">
                          {agent.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span className="text-sm text-neutral-300">{agent.location}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span className="text-sm text-neutral-300 font-mono">
                          {agent.lastSeen || "Unknown"}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-white font-mono">{agent.missionsCompleted}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                          agent.riskLevel === "CRITICAL"
                            ? "bg-red-500/20 text-red-500"
                            : agent.riskLevel === "HIGH"
                            ? "bg-orange-500/20 text-orange-500"
                            : agent.riskLevel === "MEDIUM"
                            ? "bg-neutral-500/20 text-neutral-300"
                            : "bg-white/20 text-white"
                        }`}
                      >
                        {agent.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedAgent.codename}
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedAgent.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedAgent(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">STATUS</p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selectedAgent.status === "ACTIVE"
                          ? "bg-white"
                          : selectedAgent.status === "STANDBY"
                          ? "bg-neutral-500"
                          : selectedAgent.status === "TRAINING"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm text-white uppercase tracking-wider">
                      {selectedAgent.status}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LOCATION</p>
                  <p className="text-sm text-white">{selectedAgent.location}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">MISSIONS COMPLETED</p>
                  <p className="text-sm text-white font-mono">{selectedAgent.missionsCompleted}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">RISK LEVEL</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedAgent.riskLevel === "CRITICAL"
                        ? "bg-red-500/20 text-red-500"
                        : selectedAgent.riskLevel === "HIGH"
                        ? "bg-orange-500/20 text-orange-500"
                        : selectedAgent.riskLevel === "MEDIUM"
                        ? "bg-neutral-500/20 text-neutral-300"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {selectedAgent.riskLevel}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Assign Mission</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  View History
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
