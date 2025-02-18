import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample data - in a real app, this would come from your API
const recentTrades = [
  {
    id: 1,
    pair: "ETH/USDT",
    type: "buy",
    amount: "1.25 ETH",
    price: "$2,285.50",
    time: "2 mins ago",
    status: "completed",
    profit: "+$123.45"
  },
  {
    id: 2,
    pair: "BTC/USDT",
    type: "sell",
    amount: "0.15 BTC",
    price: "$36,750.00",
    time: "5 mins ago",
    status: "completed",
    profit: "+$89.20"
  },
  {
    id: 3,
    pair: "SOL/USDT",
    type: "buy",
    amount: "25 SOL",
    price: "$103.75",
    time: "12 mins ago",
    status: "completed",
    profit: "+$45.30"
  },
  {
    id: 4,
    pair: "ETH/USDT",
    type: "sell",
    amount: "2.5 ETH",
    price: "$2,290.00",
    time: "15 mins ago",
    status: "completed",
    profit: "+$167.80"
  },
  {
    id: 5,
    pair: "BTC/USDT",
    type: "buy",
    amount: "0.08 BTC",
    price: "$36,800.00",
    time: "20 mins ago",
    status: "processing",
    profit: "pending"
  }
]

export default function RecentTradesList() {
  return (
    <Card className="col-span-3 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
      <CardHeader>
        <CardTitle className="text-purple-300">Recent Trades</CardTitle>
        <CardDescription className="text-purple-300/60">Latest market making activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTrades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {trade.type === "buy" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-slate-200">{trade.pair}</div>
                  <div className="text-sm text-slate-400">
                    {trade.type === "buy" ? "Bought" : "Sold"} {trade.amount} @ {trade.price}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className={cn(
                    "font-medium",
                    trade.profit === "pending" ? "text-slate-400" : "text-emerald-400"
                  )}>
                    {trade.profit}
                  </div>
                  <div className="text-sm text-slate-400">{trade.time}</div>
                </div>
                <div className="flex-shrink-0">
                  <Circle
                    className={cn(
                      "w-2 h-2 animate-pulse",
                      trade.status === "completed" ? "text-emerald-400" : "text-amber-400"
                    )}
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 