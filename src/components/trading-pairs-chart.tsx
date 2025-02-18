import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Sample data - in a real app, this would come from your API
const data = [
  { time: '00:00', ETH_USDT: 2150, BTC_USDT: 35000, SOL_USDT: 98 },
  { time: '04:00', ETH_USDT: 2200, BTC_USDT: 36000, SOL_USDT: 101 },
  { time: '08:00', ETH_USDT: 2180, BTC_USDT: 35800, SOL_USDT: 99 },
  { time: '12:00', ETH_USDT: 2250, BTC_USDT: 36500, SOL_USDT: 103 },
  { time: '16:00', ETH_USDT: 2300, BTC_USDT: 37000, SOL_USDT: 105 },
  { time: '20:00', ETH_USDT: 2280, BTC_USDT: 36800, SOL_USDT: 104 },
  { time: '24:00', ETH_USDT: 2320, BTC_USDT: 37200, SOL_USDT: 106 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="text-slate-300 mb-1">{`Time: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function TradingPairsChart() {
  return (
    <Card className="col-span-4 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
      <CardHeader>
        <CardTitle className="text-blue-300">Trading Pairs Performance</CardTitle>
        <CardDescription className="text-blue-300/60">24-hour price movement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="time"
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                width={80}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="ETH_USDT"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.2}
                name="ETH/USDT"
              />
              <Area
                type="monotone"
                dataKey="BTC_USDT"
                stackId="2"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.2}
                name="BTC/USDT"
              />
              <Area
                type="monotone"
                dataKey="SOL_USDT"
                stackId="3"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.2}
                name="SOL/USDT"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 