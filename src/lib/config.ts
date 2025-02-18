import dotenv from 'dotenv';

dotenv.config();

export const config = {
  CACHE_TTL: Number(process.env.CACHE_TTL) || 60000,
  TVL_API_URL: process.env.TVL_API_URL || 'https://api.llama.fi/tvl',
  COINGECKO_API_URL: process.env.COINGECKO_API_URL || 'https://api.coingecko.com/api/v3/global',
  PROTOCOLS_API_URL: process.env.PROTOCOLS_API_URL || 'https://api.llama.fi/protocols',
}; 