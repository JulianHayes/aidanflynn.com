import { SPOT_PRICES, BUY_PERCENTAGES } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

interface PriceTableProps {
  currency?: 'GBP' | 'EUR'
  eurRate?: number
}

export default function PriceTable({ currency = 'GBP', eurRate = 1.19 }: PriceTableProps) {
  const convert = (amount: number) => (currency === 'EUR' ? amount * eurRate : amount)

  const goldRows = Object.entries(SPOT_PRICES.gold).map(([carat, spotPrice]) => {
    const buyPct = BUY_PERCENTAGES.gold[carat as keyof typeof BUY_PERCENTAGES.gold]
    const wePayPerGram = spotPrice * buyPct
    return {
      carat,
      spotPrice: convert(spotPrice),
      buyPct,
      wePayPerGram: convert(wePayPerGram),
    }
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left" role="table">
        <thead>
          <tr className="border-b-2 border-stone">
            <th className="py-3 pr-4 text-small font-semibold text-charcoal">Carat</th>
            <th className="px-4 py-3 text-small font-semibold text-charcoal">
              Spot price per gram
            </th>
            <th className="px-4 py-3 text-small font-semibold text-charcoal">We pay (%)</th>
            <th className="py-3 pl-4 text-small font-semibold text-charcoal">We pay per gram</th>
          </tr>
        </thead>
        <tbody>
          {goldRows.map((row) => (
            <tr key={row.carat} className="border-stone/50 border-b">
              <td className="py-4 pr-4 font-semibold text-charcoal">{row.carat}</td>
              <td className="px-4 py-4 text-warm-grey">
                {formatCurrency(row.spotPrice, currency)}
              </td>
              <td className="px-4 py-4 text-warm-grey">{Math.round(row.buyPct * 100)}%</td>
              <td className="py-4 pl-4 font-semibold text-gold">
                {formatCurrency(row.wePayPerGram, currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-caption text-warm-grey">
        Prices last updated:{' '}
        {new Date().toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' })}
        {/* TODO: Replace with real-time timestamp from API */}
      </p>
    </div>
  )
}
