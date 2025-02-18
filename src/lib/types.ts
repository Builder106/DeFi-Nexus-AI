export interface MarketMakingData {
  tradesExecuted: number;
  avgTradeProfit: string;
  successRate: string;
}

export interface PortfolioManagerData {
  portfolioValue: string;
  dailyChange: string;
  allocation: {
    stocks: string;
    crypto: string;
    bonds: string;
  };
}

export interface AiTradingData {
  tradesExecuted: number;
  profit: string;
  roi: string;
}

export interface DCAData {
  totalInvested: string;
  currentValue: string;
  period: string;
}

export interface AiBuyingDipData {
  dipEntries: number;
  avgBuyPrice: string;
  currentPrice: string;
  gain: string;
}

export interface DefiAgentData {
  marketMaking: MarketMakingData;
  portfolioManager: PortfolioManagerData;
  aiTrading: AiTradingData;
  dca: DCAData;
  aiBuyingDip: AiBuyingDipData;
  lastUpdated: string;
}

export interface MarketData {
  totalValueLocked: string;
  tradingVolume24h: string;
  activeStrategies: {
    marketMaking: number;
    yieldFarming: number;
  };
  lastUpdated: string;
} 