import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function NearIntegration() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <CardTitle>NEAR Intents Integration</CardTitle>
          <CardDescription>Status of NEAR protocol features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Intent Processing</span>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Smart Contract Calls</span>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Account Abstraction</span>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                <AlertCircle className="h-4 w-4 mr-1" />
                In Progress
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Aurora Chain Integration</CardTitle>
          <CardDescription>Status of Aurora network features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>EVM Compatibility</span>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Cross-Chain Transfers</span>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Aurora+ Features</span>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>HOT Omni Transactions</CardTitle>
          <CardDescription>Status of high-performance transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Transaction Speed</span>
              <span className="font-medium">1.2 seconds</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Success Rate</span>
              <span className="font-medium">99.9%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Daily Volume</span>
              <span className="font-medium">1.5M transactions</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

