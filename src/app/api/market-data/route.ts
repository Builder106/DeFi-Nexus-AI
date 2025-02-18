import { getMarketData } from '@/lib/marketDataService';

export async function GET(request: Request) {
  try {
    const marketData = await getMarketData();
    return new Response(JSON.stringify(marketData), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 