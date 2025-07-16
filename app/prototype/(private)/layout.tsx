"use client";

import { useState } from "react";
import {
  ChevronRight,
  Monitor,
  Settings,
  Shield,
  Target,
  Users,
  Bell,
  RefreshCw,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthGuard } from "@/components/auth-guard";
import { useAuth } from "@/hooks/use-auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface PrototypeLayoutProps {
  children: React.ReactNode;
}

function PrototypeLayout({ children }: PrototypeLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/prototype/login");
  };

  const navigationItems = [
    { id: "overview", icon: Monitor, label: "COMMAND CENTER", href: "/prototype" },
    { id: "agents", icon: Users, label: "AGENT NETWORK", href: "/prototype/agent-network" },
    { id: "operations", icon: Target, label: "OPERATIONS", href: "/prototype/operations" },
    { id: "intelligence", icon: Shield, label: "INTELLIGENCE", href: "/prototype/intelligence" },
    { id: "systems", icon: Settings, label: "SYSTEMS", href: "/prototype/systems" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/prototype") {
      return pathname === "/prototype";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-16" : "w-70"
        } bg-neutral-900 border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full md:h-auto ${
          !sidebarCollapsed ? "md:block" : ""
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
              <h1 className="text-orange-500 font-bold text-lg tracking-wider">TACTICAL OPS</h1>
              <p className="text-neutral-500 text-xs">v2.1.7 CLASSIFIED</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-neutral-400 hover:text-orange-500"
            >
              <ChevronRight
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                  sidebarCollapsed ? "" : "rotate-180"
                }`}
              />
            </Button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  <item.icon className="w-5 h-5 md:w-5 md:h-5 sm:w-6 sm:h-6" />
                  {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {!sidebarCollapsed && (
            <div className="mt-8 p-4 bg-neutral-800 border border-neutral-700 rounded">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-white">SYSTEM ONLINE</span>
              </div>
              <div className="text-xs text-neutral-500">
                <div>UPTIME: 72:14:33</div>
                <div>AGENTS: 847 ACTIVE</div>
                <div>MISSIONS: 23 ONGOING</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${!sidebarCollapsed ? "md:ml-0" : ""}`}>
        {/* Top Toolbar */}
        <div className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="text-sm text-neutral-400">
              TACTICAL COMMAND /{" "}
              <span className="text-orange-500">
                {pathname === "/prototype"
                  ? "COMMAND CENTER"
                  : pathname.includes("/agent-network")
                  ? "AGENT NETWORK"
                  : pathname.includes("/operations")
                  ? "OPERATIONS"
                  : pathname.includes("/intelligence")
                  ? "INTELLIGENCE"
                  : pathname.includes("/systems")
                  ? "SYSTEMS"
                  : "OVERVIEW"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-neutral-500">LAST UPDATE: 05/06/2025 20:00 UTC</div>

            {/* User Info */}
            {user && (
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <User className="w-3 h-3" />
                <span>{user.username}</span>
                <span className="text-orange-500">({user.role})</span>
              </div>
            )}

            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
              <Bell className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
              <RefreshCw className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="text-neutral-400 hover:text-red-500"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default function ProtectedPrototypeLayout({ children }: PrototypeLayoutProps) {
  return (
    <AuthGuard>
      <PrototypeLayout>{children}</PrototypeLayout>
    </AuthGuard>
  );
}
