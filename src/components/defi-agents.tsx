import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LineChart, DollarSign, TrendingUp, ArrowUpDown } from "lucide-react";
import { DefiAgentData } from "@/lib/types";
import { Skeleton } from "../components/ui/skeleton";
import AgentPerformanceChart from "./agent-performance-chart";

export default function DeFiAgents() {
  const [agentData, setAgentData] = useState<DefiAgentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchAgentData() {
      try {
        const response = await fetch('/api/defi-agents');
        if (!response.ok) {
          throw new Error('Failed to fetch agent data');
        }
        const data = await response.json();
        if (mounted) {
          setAgentData(data);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchAgentData();
    
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <div className="text-red-500 mb-2">Error: {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="text-blue-500 underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!agentData) {
    return <div className="text-center py-10">No data available</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Market Making Bot Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Making Bot</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trades Executed</span>
                <span className="font-medium">{agentData.marketMaking.tradesExecuted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg. Profit</span>
                <span className="font-medium">{agentData.marketMaking.avgTradeProfit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate</span>
                <span className="font-medium text-green-600">{agentData.marketMaking.successRate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Manager Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Manager</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Portfolio Value</span>
                <span className="font-medium">{agentData.portfolioManager.portfolioValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Daily Change</span>
                <span className="font-medium text-green-600">{agentData.portfolioManager.dailyChange}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Allocation: {Object.entries(agentData.portfolioManager.allocation).map(([key, value]) => 
                  `${key} ${value}`
                ).join(', ')}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Trading Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Trading</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trades</span>
                <span className="font-medium">{agentData.aiTrading.tradesExecuted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Profit</span>
                <span className="font-medium text-green-600">{agentData.aiTrading.profit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ROI</span>
                <span className="font-medium">{agentData.aiTrading.roi}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DCA Strategy Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DCA Strategy</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Invested</span>
                <span className="font-medium">{agentData.dca.totalInvested}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Value</span>
                <span className="font-medium">{agentData.dca.currentValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Period</span>
                <span className="font-medium">{agentData.dca.period}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Buying Dip Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Dip Buyer</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dip Entries</span>
                <span className="font-medium">{agentData.aiBuyingDip.dipEntries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Buy Price</span>
                <span className="font-medium">{agentData.aiBuyingDip.avgBuyPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Price</span>
                <span className="font-medium">{agentData.aiBuyingDip.currentPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gain</span>
                <span className="font-medium text-green-600">{agentData.aiBuyingDip.gain}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AgentPerformanceChart />
    </div>
  );
} 