"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Users,
  Target,
  Shield,
  Settings,
  ArrowRight,
  Activity,
  AlertTriangle,
  CheckCircle,
  Database,
} from "lucide-react";
import Link from "next/link";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "online" | "warning" | "offline";
  stats: {
    label: string;
    value: string;
    color: string;
  }[];
  badge?: string;
}

const featureCards: FeatureCard[] = [
  {
    id: "command-center",
    title: "COMMAND CENTER",
    description: "Real-time operational overview and mission control interface for tactical decision making",
    href: "/prototype/command-center",
    icon: Monitor,
    status: "online",
    stats: [],
    badge: "PRIMARY",
  },
  {
    id: "agent-network",
    title: "AGENT NETWORK",
    description: "Field agent management and deployment tracking system for operational coordination",
    href: "/prototype/agent-network",
    icon: Users,
    status: "online",
    stats: [],
  },
  {
    id: "operations",
    title: "OPERATIONS",
    description: "Mission planning, execution, and oversight tools for tactical operations management",
    href: "/prototype/operations",
    icon: Target,
    status: "online",
    stats: [],
  },
  {
    id: "intelligence",
    title: "INTELLIGENCE",
    description: "Classified reports and threat analysis platform for intelligence gathering and assessment",
    href: "/prototype/intelligence",
    icon: Shield,
    status: "online",
    stats: [],
  },
  {
    id: "systems",
    title: "SYSTEMS",
    description: "Infrastructure monitoring and maintenance dashboard for system health and performance",
    href: "/prototype/systems",
    icon: Settings,
    status: "online",
    stats: [],
  },
  {
    id: "analytics",
    title: "ANALYTICS",
    description: "Data analysis and performance metrics platform for operational insights and reporting",
    href: "/prototype/analytics",
    icon: Database,
    status: "online",
    stats: [],
  },
];

const getStatusColor = (status: FeatureCard["status"]) => {
  switch (status) {
    case "online":
      return "bg-green-500/20 text-green-500";
    case "warning":
      return "bg-orange-500/20 text-orange-500";
    case "offline":
      return "bg-red-500/20 text-red-500";
    default:
      return "bg-neutral-500/20 text-neutral-300";
  }
};

const getStatusIcon = (status: FeatureCard["status"]) => {
  switch (status) {
    case "online":
      return <CheckCircle className="w-4 h-4" />;
    case "warning":
      return <AlertTriangle className="w-4 h-4" />;
    case "offline":
      return <Activity className="w-4 h-4" />;
    default:
      return <Activity className="w-4 h-4" />;
  }
};

export default function PrototypeLandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-16 w-16 text-orange-500 mr-4" />
            <h1 className="text-4xl font-bold text-white tracking-wider">TACTICAL OPS</h1>
          </div>
          <p className="text-neutral-400 text-lg">v2.1.7 CLASSIFIED - OPERATIONAL DASHBOARD</p>
          <p className="text-neutral-500 text-sm mt-2">Select a module to access operational systems</p>
        </div>

        {/* System Status Bar */}
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-mono">SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <span>Ready to access operational modules</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature) => (
            <Link key={feature.id} href={feature.href}>
              <Card className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-white tracking-wider">
                          {feature.title}
                        </CardTitle>
                        {feature.badge && (
                          <Badge className="bg-orange-500/20 text-orange-500 text-xs mt-1">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(feature.status)}>
                        {getStatusIcon(feature.status)}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-neutral-300 leading-relaxed min-h-[4.5rem]">
                    {feature.description}
                  </p>

                  {/* Access Button */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" variant="default">
                    <span>Access Module</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
            <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">SYSTEM INFORMATION</h3>
            <div className="text-xs text-neutral-400">
              <div className="text-white font-mono mb-2">BUILD: 2.1.7-20250617</div>
              <div>Release Candidate - All Systems Operational</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
