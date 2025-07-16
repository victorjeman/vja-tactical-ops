"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Code, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">TACTICAL OPS</h1>
          <p className="text-xl text-neutral-400 mb-2">Workshop Preparation Project</p>
          <p className="text-sm text-neutral-500">Choose your viewing mode</p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Design Pages Card */}
          <Card className="bg-neutral-800/50 border-neutral-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-orange-500" />
              </div>
              <CardTitle className="text-white text-2xl">Design Pages</CardTitle>
              <CardDescription className="text-neutral-400">
                View the original design mockups and UI prototypes
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-neutral-500 mb-6">
                Static design pages showing the intended UI/UX without functionality. Perfect for reference
                and design review.
              </p>
              <Button
                onClick={() => handleNavigate("/design")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                View Design Pages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Prototype Pages Card */}
          <Card className="bg-neutral-800/50 border-neutral-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <CardTitle className="text-white text-2xl">Prototype Pages</CardTitle>
              <CardDescription className="text-neutral-400">
                Interactive prototype with functional implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-neutral-500 mb-6">
                Working prototype with real functionality, database integration, and interactive features.
                Ready for development and testing.
              </p>
              <Button
                onClick={() => handleNavigate("/prototype")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                View Prototype
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-xs text-neutral-600">
            Tactical Operations Dashboard - Workshop Reference Implementation
          </p>
        </div>
      </div>
    </div>
  );
}
