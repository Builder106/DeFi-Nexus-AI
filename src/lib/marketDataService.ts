import { logger } from '@/lib/logger';
import { config } from '@/lib/config';

let marketDataCache: any = null;
let marketDataCacheTimestamp = 0;

export async function getMarketData() {
  const now = Date.now();
  if (marketDataCache && (now - marketDataCacheTimestamp) < config.CACHE_TTL) {
    logger.info('Returning cached market data.');
    return marketDataCache;
  }

  try {
    // Fetch 24h trading volume from CoinGecko global endpoint
    const coingeckoResponse = await fetch(config.COINGECKO_API_URL);
    if (!coingeckoResponse.ok) {
      throw new Error('Failed to fetch trading volume data from CoinGecko');
    }
    const coingeckoData = await coingeckoResponse.json();
    const volumeUSD = coingeckoData?.data?.total_volume?.usd;
    if (volumeUSD === undefined) {
      throw new Error('Trading volume data not found');
    }
    const tradingVolume24hFormatted = `$${Number(volumeUSD).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

    // Fetch protocol data from DefiLlama to compute active strategies and total TVL
    const protocolsResponse = await fetch(config.PROTOCOLS_API_URL);
    if (!protocolsResponse.ok) {
      throw new Error('Failed to fetch protocols data');
    }
    const protocolsData = await protocolsResponse.json();

    // Compute total TVL from protocols. Each protocol object should have a 'tvl' property.
    const totalTVLValue = protocolsData.reduce((acc: number, protocol: any) => acc + (protocol.tvl || 0), 0);
    const totalValueLockedFormatted = `$${Number(totalTVLValue).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

    // Count protocols that include 'market' in their name as market-making strategies
    const marketMakingCount = protocolsData.filter((protocol: any) => 
      protocol.name && protocol.name.toLowerCase().includes('market')
    ).length;
    // The rest are assumed to be yield farming strategies for demonstration
    const yieldFarmingCount = protocolsData.length - marketMakingCount;

    const marketData = {
      totalValueLocked: totalValueLockedFormatted,
      tradingVolume24h: tradingVolume24hFormatted,
      activeStrategies: {
        marketMaking: marketMakingCount,
        yieldFarming: yieldFarmingCount,
      },
      lastUpdated: new Date().toISOString(),
    };

    marketDataCache = marketData;
    marketDataCacheTimestamp = now;
    logger.info('Fetched new market data.');
    return marketDataCache;
  } catch (error: any) {
    logger.error('Error fetching market data: ' + error.message);
    throw error;
  }
} 