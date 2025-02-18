import { simulateMarketMaking, simulatePortfolioManager, simulateAiTrading, simulateDCA, simulateAiBuyingDip } from '@/lib/defiAgents';

export async function GET(request: Request) {
  try {
    const [marketMaking, portfolioManager, aiTrading, dca, aiBuyingDip] = await Promise.all([
      simulateMarketMaking(),
      simulatePortfolioManager(),
      simulateAiTrading(),
      simulateDCA(),
      simulateAiBuyingDip()
    ]);

    const result = {
      marketMaking,
      portfolioManager,
      aiTrading,
      dca,
      aiBuyingDip,
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 