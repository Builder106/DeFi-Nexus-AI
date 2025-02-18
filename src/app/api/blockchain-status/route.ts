import { getNearStatus, getAuroraStatus } from '@/lib/blockchain';

export async function GET(request: Request) {
  try {
    const [nearStatus, auroraStatus] = await Promise.all([
      getNearStatus(),
      getAuroraStatus()
    ]);

    const result = {
      nearStatus,
      auroraStatus,
      lastUpdated: new Date().toISOString()
    };

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch blockchain statuses' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 