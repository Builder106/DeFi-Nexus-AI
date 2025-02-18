import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Percent, PiggyBank, TrendingUp, Wallet } from "lucide-react"
import YieldPerformanceChart from "./yield-performance-chart"

export default function YieldOptimization() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Yield Optimization
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-300">Total Value Deposited</CardTitle>
            <PiggyBank className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-100">$1.2M</div>
            <p className="text-xs text-purple-300">Across all protocols</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-300">Average APY</CardTitle>
            <Percent className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-100">12.8%</div>
            <p className="text-xs text-blue-300">Weighted average</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-300">Total Earnings</CardTitle>
            <Wallet className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-100">$45,890</div>
            <p className="text-xs text-emerald-300">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-300">Active Positions</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-100">18</div>
            <p className="text-xs text-orange-300">In 6 protocols</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <YieldPerformanceChart />
        
        <Card className="col-span-3 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
          <CardHeader>
            <CardTitle className="text-blue-300">Top Opportunities</CardTitle>
            <CardDescription className="text-blue-300/60">Highest yielding protocols</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { protocol: "Curve", apy: "11.0%", tvl: "$850M", risk: "Medium" },
                { protocol: "Lido", apy: "6.5%", tvl: "$2.1B", risk: "Low" },
                { protocol: "Aave", apy: "5.5%", tvl: "$1.5B", risk: "Low" },
                { protocol: "Compound", apy: "5.0%", tvl: "$980M", risk: "Low" },
              ].map((opportunity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                >
                  <div>
                    <div className="font-medium text-slate-200">{opportunity.protocol}</div>
                    <div className="text-sm text-slate-400">TVL: {opportunity.tvl}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-emerald-400">{opportunity.apy} APY</div>
                    <div className="text-sm text-slate-400">Risk: {opportunity.risk}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

