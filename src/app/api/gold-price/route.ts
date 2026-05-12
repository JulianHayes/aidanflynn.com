import { NextResponse } from 'next/server'

// TODO: Replace with GoldAPI.io or Metals-API live feed
// This is a placeholder API route returning hardcoded spot prices
// The structure mirrors what a real API response would look like,
// making it straightforward to swap in a live data source later

export async function GET() {
  const data = {
    timestamp: new Date().toISOString(),
    currency: 'GBP',
    spotPrices: {
      gold: {
        '24ct': { perGram: 105.0, perOz: 3265.63 },
        '22ct': { perGram: 96.44, perOz: 2999.43 },
        '18ct': { perGram: 78.96, perOz: 2455.69 },
        '14ct': { perGram: 61.59, perOz: 1915.41 },
        '9ct': { perGram: 39.48, perOz: 1228.0 },
      },
      silver: {
        '999': { perGram: 1.65, perOz: 51.32 },
      },
      platinum: {
        '999': { perGram: 25.0, perOz: 777.59 },
      },
    },
    buyPercentages: {
      gold: {
        '24ct': 0.9,
        '22ct': 0.88,
        '18ct': 0.85,
        '14ct': 0.82,
        '9ct': 0.8,
      },
      silver: {
        '999': 0.75,
      },
      platinum: {
        '999': 0.8,
      },
    },
    eurRate: 1.19,
  }

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })
}
