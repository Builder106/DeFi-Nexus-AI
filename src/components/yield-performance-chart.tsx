import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Sample data - in a real app, this would come from your API
const data = [
  {
    date: 'Jan',
    'Aave': 4.2,
    'Compound': 3.8,
    'Curve': 8.5,
    'Lido': 5.2,
  },
  {
    date: 'Feb',
    'Aave': 4.5,
    'Compound': 4.0,
    'Curve': 9.2,
    'Lido': 5.5,
  },
  {
    date: 'Mar',
    'Aave': 4.8,
    'Compound': 4.2,
    'Curve': 8.8,
    'Lido': 5.8,
  },
  {
    date: 'Apr',
    'Aave': 5.0,
    'Compound': 4.5,
    'Curve': 9.5,
    'Lido': 6.0,
  },
  {
    date: 'May',
    'Aave': 5.2,
    'Compound': 4.8,
    'Curve': 10.2,
    'Lido': 6.2,
  },
  {
    date: 'Jun',
    'Aave': 5.5,
    'Compound': 5.0,
    'Curve': 11.0,
    'Lido': 6.5,
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="text-slate-300 mb-2 font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between space-x-8">
            <span className="text-sm" style={{ color: entry.color }}>
              {entry.name}
            </span>
            <span className="text-sm font-medium" style={{ color: entry.color }}>
              {entry.value}% APY
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
      {payload.map((entry: any, index: number) => (
        <div
          key={index}
          className="flex items-center space-x-2"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-slate-300">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function YieldPerformanceChart() {
  return (
    <Card className="col-span-4 bg-gradient-to-br from-slate-800 to-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
      <CardHeader>
        <CardTitle className="text-purple-300">Yield Performance</CardTitle>
        <CardDescription className="text-purple-300/60">APY trends across protocols</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="date"
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
              <Line
                type="monotone"
                dataKey="Aave"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Compound"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Curve"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Lido"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: '#f59e0b', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 