"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Bot, Layers, Zap } from "lucide-react"
import MarketMakingStrategy from "@/components/market-making-strategy"
import YieldOptimization from "@/components/yield-optimization"
import CrossChainTrades from "@/components/cross-chain-trades"
import AIPerformance from "@/components/ai-performance"
import NearIntegration from "@/components/near-integration"
import { useEffect } from "react"

function MarketMakingStrategyWrapper() {
  useEffect(() => {
    MarketMakingStrategy();
  }, []);
  return null;
}

function YieldOptimizationWrapper() {
  useEffect(() => {
    YieldOptimization();
  }, []);
  return null;
}

// New component to encapsulate the overview content
function OverviewCards() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Strategies</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 market-making, 8 yield farming</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Trading Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$789,352</div>
            <p className="text-xs text-muted-foreground">Across 3 chains</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Agent Performance</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">Accuracy in trade execution</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">{/* Add market overview chart here */}</div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Across all integrated chains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">{/* Add recent transactions list here */}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <h1 className="text-lg font-bold">DeFi Nexus AI</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-sm font-medium">
            Documentation
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Settings
          </Button>
        </nav>
      </header>
      <main className="flex-1 py-6 px-4 lg:px-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="market-making">Market Making</TabsTrigger>
            <TabsTrigger value="yield">Yield Optimization</TabsTrigger>
            <TabsTrigger value="cross-chain">Cross-Chain Trades</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <OverviewCards />
          </TabsContent>
          <TabsContent value="market-making" className="space-y-4">
            <MarketMakingStrategyWrapper />
          </TabsContent>
          <TabsContent value="yield" className="space-y-4">
            <YieldOptimizationWrapper />
          </TabsContent>
          <TabsContent value="cross-chain" className="space-y-4">
            <CrossChainTrades />
          </TabsContent>
        </Tabs>
      </main>
      <AIPerformance />
      <NearIntegration />
    </div>
  )
}

