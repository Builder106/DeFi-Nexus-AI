import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function CrossChainTrades() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Recent Cross-Chain Trades</CardTitle>
          <CardDescription>Automated by AI agents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">NEAR → Ethereum</div>
                <div className="text-sm text-muted-foreground">100 NEAR → 5 ETH</div>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Aurora → NEAR</div>
                <div className="text-sm text-muted-foreground">1000 USDC → 250 NEAR</div>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">NEAR → Aurora</div>
                <div className="text-sm text-muted-foreground">500 NEAR → 1500 USDC</div>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cross-Chain Opportunities</CardTitle>
          <CardDescription>AI-detected arbitrage chances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">NEAR → Ethereum → Aurora</div>
                <div className="text-sm text-muted-foreground">Potential profit: 2.3%</div>
              </div>
              <Button size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Execute
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Aurora → NEAR → Ethereum</div>
                <div className="text-sm text-muted-foreground">Potential profit: 1.8%</div>
              </div>
              <Button size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Execute
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cross-Chain Analytics</CardTitle>
          <CardDescription>Performance and volume insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">{/* Add cross-chain analytics chart here */}</div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Total Volume (24h)</span>
              <span className="font-medium">$12,345,678</span>
            </div>
            <div className="flex justify-between">
              <span>Most Active Route</span>
              <span className="font-medium">NEAR ↔ Ethereum</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. Transaction Time</span>
              <span className="font-medium">2.3 minutes</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

