import { getMarketData } from '../marketDataService';

// Jest test for getMarketData

describe('getMarketData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch and return valid market data', async () => {
    // Dummy data for testing
    const dummyTVL = 500000000;  // Example value for total value locked
    const dummyCoinGeckoData = { data: { total_volume: { usd: 123456789 } } };
    const dummyProtocols = [
      { name: 'Market ABC' },
      { name: 'Farm XYZ' },
      { name: 'Market DEF' },
    ];

    (fetch as jest.Mock).mockImplementation((url: string) => {
      if (url === 'https://api.llama.fi/tvl') {
        return Promise.resolve({ ok: true, json: async () => dummyTVL });
      } else if (url === 'https://api.coingecko.com/api/v3/global') {
        return Promise.resolve({ ok: true, json: async () => dummyCoinGeckoData });
      } else if (url === 'https://api.llama.fi/protocols') {
        return Promise.resolve({ ok: true, json: async () => dummyProtocols });
      } else {
        return Promise.reject(new Error('Unknown URL'));
      }
    });

    const marketData = await getMarketData();

    expect(marketData).toHaveProperty('totalValueLocked');
    expect(marketData).toHaveProperty('tradingVolume24h');
    expect(marketData).toHaveProperty('activeStrategies');
    // 'Market ABC' and 'Market DEF' should be counted as market-making strategies
    expect(marketData.activeStrategies.marketMaking).toBe(2);
    // The remaining strategy should be yield farming
    expect(marketData.activeStrategies.yieldFarming).toBe(1);
  });
}); 