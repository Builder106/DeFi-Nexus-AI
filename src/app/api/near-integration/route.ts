export async function GET(request: Request) {
  const dummyNearData = {
    status: {
      intentProcessing: "Active",
      smartContractCalls: "Active",
      accountAbstraction: "In Progress"
    },
    lastUpdated: new Date().toISOString(),
  };

  return new Response(JSON.stringify(dummyNearData), {
    headers: { 'Content-Type': 'application/json' },
  });
} 