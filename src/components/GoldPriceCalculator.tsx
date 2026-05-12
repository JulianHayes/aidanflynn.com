'use client'

import { useState, useMemo } from 'react'
import {
  SPOT_PRICES,
  BUY_PERCENTAGES,
  EUR_CONVERSION_RATE,
  METAL_OPTIONS,
  CARAT_OPTIONS,
} from '@/lib/constants'
import { cn, formatCurrency } from '@/lib/utils'

type MetalType = 'gold' | 'silver' | 'platinum'
type Currency = 'GBP' | 'EUR'

interface GoldPriceCalculatorProps {
  className?: string
  compact?: boolean
}

const fieldClass =
  'w-full px-4 py-3 min-h-[44px] rounded-lg border border-border-subtle bg-background text-charcoal text-body placeholder:text-warm-grey/60 shadow-elev-inset focus:outline-none focus:border-navy focus:shadow-elev-inset-focus transition-[box-shadow,border-color] duration-200'

export default function GoldPriceCalculator({ className, compact = false }: GoldPriceCalculatorProps) {
  const [metal, setMetal] = useState<MetalType>('gold')
  const [carat, setCarat] = useState<string>('9ct')
  const [weight, setWeight] = useState<string>('')
  const [currency, setCurrency] = useState<Currency>('GBP')

  const caratOptions = CARAT_OPTIONS[metal]

  // Reset carat when metal changes
  const handleMetalChange = (newMetal: MetalType) => {
    setMetal(newMetal)
    setCarat(CARAT_OPTIONS[newMetal][0].value)
  }

  const calculation = useMemo(() => {
    const weightNum = parseFloat(weight)
    if (!weightNum || weightNum <= 0) return null

    const spotPrices = SPOT_PRICES[metal] as Record<string, number>
    const buyPercentages = BUY_PERCENTAGES[metal] as Record<string, number>

    const spotPrice = spotPrices[carat]
    const buyPct = buyPercentages[carat]

    if (spotPrice === undefined || buyPct === undefined) return null

    const rawAmount = weightNum * spotPrice * buyPct
    const convert = (amount: number) => (currency === 'EUR' ? amount * EUR_CONVERSION_RATE : amount)

    return {
      spotPricePerGram: convert(spotPrice),
      buyPercentage: buyPct,
      wePayPerGram: convert(spotPrice * buyPct),
      totalAmount: convert(rawAmount),
    }
  }, [metal, carat, weight, currency])

  return (
    <div className={cn('bg-surface rounded-[14px] border border-border-subtle shadow-elev-card', className)}>
      <div className={cn(compact ? 'p-6' : 'p-6 md:p-8')}>
        {!compact && (
          <h3 className="mb-6 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
            Gold price calculator
          </h3>
        )}

        <div className="space-y-4">
          {/* Metal type */}
          <div className="space-y-1">
            <label htmlFor="calc-metal" className="block text-small font-medium text-charcoal">
              Metal type
            </label>
            <select
              id="calc-metal"
              value={metal}
              onChange={(e) => handleMetalChange(e.target.value as MetalType)}
              className={fieldClass}
            >
              {METAL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Carat / Purity */}
          <div className="space-y-1">
            <label htmlFor="calc-carat" className="block text-small font-medium text-charcoal">
              {metal === 'gold' ? 'Carat' : 'Purity'}
            </label>
            <select
              id="calc-carat"
              value={carat}
              onChange={(e) => setCarat(e.target.value)}
              className={fieldClass}
            >
              {caratOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Weight */}
          <div className="space-y-1">
            <label htmlFor="calc-weight" className="block text-small font-medium text-charcoal">
              Weight in grams
            </label>
            <input
              id="calc-weight"
              type="number"
              min="0"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in grams"
              className={fieldClass}
            />
          </div>

          {/* Currency toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrency('GBP')}
              className={cn(
                'px-4 py-2 min-h-[40px] rounded-lg text-small font-medium transition-[box-shadow,background-color,color] duration-200',
                currency === 'GBP'
                  ? 'bg-navy text-white shadow-elev-inset'
                  : 'bg-background text-warm-grey hover:text-navy shadow-elev-chip-inset'
              )}
            >
              GBP (£)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={cn(
                'px-4 py-2 min-h-[40px] rounded-lg text-small font-medium transition-[box-shadow,background-color,color] duration-200',
                currency === 'EUR'
                  ? 'bg-navy text-white shadow-elev-inset'
                  : 'bg-background text-warm-grey hover:text-navy shadow-elev-chip-inset'
              )}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Result */}
        <div className="mt-6 pt-6 border-t border-border-subtle">
          {calculation ? (
            <div>
              <p className="text-small text-warm-grey mb-1">We would pay you:</p>
              <p className="text-hero-mobile md:text-hero font-bold font-serif text-gold">
                {formatCurrency(calculation.totalAmount, currency)}
              </p>
              <div className="mt-4 space-y-2 text-small text-warm-grey">
                <div className="flex justify-between">
                  <span>Spot price per gram ({carat})</span>
                  <span className="text-charcoal">
                    {formatCurrency(calculation.spotPricePerGram, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>We pay</span>
                  <span className="text-charcoal">
                    {Math.round(calculation.buyPercentage * 100)}% of spot
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Our rate per gram</span>
                  <span className="text-charcoal">
                    {formatCurrency(calculation.wePayPerGram, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Weight</span>
                  <span className="text-charcoal">{weight}g</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4 text-center">
              <p className="text-body text-warm-grey">
                Enter the weight of your items to see an estimate
              </p>
            </div>
          )}
        </div>

        <p className="mt-4 text-caption caption-italic text-warm-grey">
          This is an estimate based on the live spot price. Your final valuation may differ based on the exact purity of your items.
        </p>
      </div>
    </div>
  )
}
