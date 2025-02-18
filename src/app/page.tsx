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
import DeFiAgents from "@/components/defi-agents"
import { useEffect, useState } from "react"
import { MarketData } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

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

// Updated OverviewCards component
function OverviewCards() {
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchMarketData() {
      setLoading(true);
      try {
        const response = await fetch('/api/market-data');
        if (!response.ok) {
          throw new Error('Failed to fetch market data');
        }
        const data = await response.json();
        if (mounted) {
          setMarketData(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('An error occurred'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchMarketData();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[100px] mb-2" />
                <Skeleton className="h-4 w-[150px]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <div className="text-red-500 mb-2">Error: {error.message}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="text-blue-500 underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!marketData) {
    return <div className="text-center py-10">No market data available</div>;
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketData.totalValueLocked}</div>
            <p className="text-xs text-muted-foreground">Updated at {new Date(marketData.lastUpdated).toLocaleTimeString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Strategies</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {marketData.activeStrategies.marketMaking + marketData.activeStrategies.yieldFarming}
            </div>
            <p className="text-xs text-muted-foreground">
              {marketData.activeStrategies.marketMaking} market-making, {marketData.activeStrategies.yieldFarming} yield farming
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Trading Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketData.tradingVolume24h}</div>
            <p className="text-xs text-muted-foreground">Across all chains</p>
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Market Overview Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Across all integrated chains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 flex items-center justify-center text-muted-foreground">
              Transactions List Placeholder
            </div>
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
            <TabsTrigger value="defi-agents">DeFi Agents</TabsTrigger>
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
          <TabsContent value="defi-agents" className="space-y-4">
            <DeFiAgents />
          </TabsContent>
        </Tabs>
      </main>
      <AIPerformance />
      <NearIntegration />
    </div>
  )
}

