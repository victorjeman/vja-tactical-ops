"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, User, Lock, AlertCircle } from "lucide-react";
import { DEV_USER_CREDENTIALS, type DevUserRole } from "@/lib/constants";
import { useAuth } from "@/hooks/use-auth";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [activeRole, setActiveRole] = useState<DevUserRole>("ADMIN");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get the current user credentials based on active role
  const currentUser = DEV_USER_CREDENTIALS.find((user) => user.role === activeRole);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser.email,
          password: currentUser.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();

      // Use the auth hook to store authentication data
      login(data.data.token, data.data.user);

      // Redirect to dashboard
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleColor = (role: DevUserRole) => {
    switch (role) {
      case "ADMIN":
        return "bg-red-500";
      case "OPERATOR":
        return "bg-blue-500";
      case "ANALYST":
        return "bg-green-500";
      case "VIEWER":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRoleDescription = (role: DevUserRole) => {
    switch (role) {
      case "ADMIN":
        return "Full system access and control";
      case "OPERATOR":
        return "Field operations and agent management";
      case "ANALYST":
        return "Intelligence analysis and reporting";
      case "VIEWER":
        return "Read-only access to reports and data";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-white">Tactical Ops</h1>
          </div>
          <p className="text-slate-400">Secure Access Portal</p>
        </div>

        {/* Login Card */}
        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Authentication Required</CardTitle>
            <CardDescription className="text-slate-400">
              Select your role and authenticate to access the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeRole} onValueChange={(value) => setActiveRole(value as DevUserRole)}>
              <TabsList className="grid w-full grid-cols-4 bg-slate-700">
                {DEV_USER_CREDENTIALS.map((user) => (
                  <TabsTrigger
                    key={user.role}
                    value={user.role}
                    className="data-[state=active]:bg-slate-600 data-[state=active]:text-white"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className={`w-2 h-2 rounded-full ${getRoleColor(user.role)}`} />
                      <span className="text-xs">{user.role}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {DEV_USER_CREDENTIALS.map((user) => (
                <TabsContent key={user.role} value={user.role} className="mt-6">
                  <div className="space-y-4">
                    {/* User Info */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <User className="h-5 w-5 text-slate-400" />
                        <span className="font-medium text-white">{user.displayName}</span>
                        <Badge variant="secondary" className="text-xs">
                          {user.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{getRoleDescription(user.role)}</p>
                    </div>

                    {/* Credentials Display */}
                    <div className="bg-slate-700/50 rounded-lg p-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-400 w-16">Email:</span>
                        <span className="text-xs text-white font-mono">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-400 w-16">Password:</span>
                        <span className="text-xs text-white font-mono">{user.password}</span>
                      </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          readOnly
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-slate-300">
                          Password
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          value={user.password}
                          readOnly
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>

                      {error && (
                        <Alert className="border-red-500 bg-red-500/10">
                          <AlertCircle className="h-4 w-4 text-red-400" />
                          <AlertDescription className="text-red-400">{error}</AlertDescription>
                        </Alert>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                            <span>Authenticating...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Lock className="h-4 w-4" />
                            <span>Access System</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Development Notice */}
            <div className="mt-6 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-xs text-amber-400 text-center">
                <strong>Development Mode:</strong> These are test credentials for development purposes only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
