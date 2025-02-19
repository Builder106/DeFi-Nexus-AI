"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Bot, Layers, Zap, Sparkles, RefreshCcw } from "lucide-react"
import MarketMakingStrategy from "@/components/market-making-strategy"
import YieldOptimization from "@/components/yield-optimization"
import CrossChainTrades from "@/components/cross-chain-trades"
import AIPerformance from "@/components/ai-performance"
import NearIntegration from "@/components/near-integration"
import DeFiAgents from "@/components/defi-agents"
import { useEffect, useState, useCallback } from "react"
import { MarketData } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

function MarketMakingStrategyWrapper() {
  return <MarketMakingStrategy />;
}

function YieldOptimizationWrapper() {
  return <YieldOptimization />;
}

// Updated OverviewCards component
function OverviewCards() {
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchMarketData = useCallback(async (showUpdating = true) => {
    if (showUpdating) {
      setUpdating(true);
    }
    try {
      const response = await fetch('/api/market-data');
      if (!response.ok) {
        throw new Error('Failed to fetch market data');
      }
      const data = await response.json();
      setMarketData(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
      setUpdating(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchMarketData(false);
    }
    return () => {
      mounted = false;
    };
  }, [fetchMarketData]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMarketData();
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchMarketData]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-4 rounded-full" />
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
          onClick={() => fetchMarketData()}
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
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
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Market Overview
          </h2>
          {updating && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
              <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
              Updating...j
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-400">
            Last updated: {lastUpdated?.toLocaleTimeString()}
          </span>
          <button
            onClick={() => fetchMarketData()}
            disabled={updating}
            className="p-2 rounded-full hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            <RefreshCcw className={`w-4 h-4 text-slate-400 ${updating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-300">Total Value Locked</CardTitle>
            <Zap className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-100">{marketData.totalValueLocked}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-300">Active Strategies</CardTitle>
            <Layers className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-100">
              {marketData.activeStrategies.marketMaking + marketData.activeStrategies.yieldFarming}
            </div>
            <p className="text-xs text-purple-300">
              {marketData.activeStrategies.marketMaking} market-making, {marketData.activeStrategies.yieldFarming} yield farming
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-300">24h Trading Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-100">{marketData.tradingVolume24h}</div>
            <p className="text-xs text-emerald-300">Across all chains</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-300">AI Agent Performance</CardTitle>
            <Bot className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-100">98.7%</div>
            <p className="text-xs text-orange-300">Accuracy in trade execution</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
          <CardHeader>
            <CardTitle className="text-blue-300">Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-blue-300/60">
              Market Overview Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
          <CardHeader>
            <CardTitle className="text-purple-300">Recent Transactions</CardTitle>
            <CardDescription className="text-purple-300/60">Across all integrated chains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 flex items-center justify-center text-purple-300/60">
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black/20 backdrop-blur-sm border-b border-white/10">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">DeFi Nexus AI</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-sm font-medium text-blue-300 hover:text-blue-200 hover:bg-blue-500/10">
            Documentation
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-blue-300 hover:text-blue-200 hover:bg-blue-500/10">
            Settings
          </Button>
        </nav>
      </header>
      <main className="flex-1 py-6 px-4 lg:px-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-black/20 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="market-making" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Market Making</TabsTrigger>
            <TabsTrigger value="yield" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Yield Optimization</TabsTrigger>
            <TabsTrigger value="cross-chain" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Cross-Chain Trades</TabsTrigger>
            <TabsTrigger value="defi-agents" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">DeFi Agents</TabsTrigger>
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

