'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function AnimatedHeadline() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="block mt-2 relative"
    >
      <span
        className={cn(
          'relative inline',
          'before:absolute before:inset-0 before:animate-[onloadopacity_1.2s_ease-out_0.6s_forwards] before:opacity-0 before:content-[attr(data-text)]',
          'before:bg-[linear-gradient(0deg,#1B474A_0%,#2C6366_50%)] before:bg-clip-text before:text-transparent',
          '[filter:url(#hero-glow)]'
        )}
        data-text="Aidan Flynn will show you exactly how much."
      >
        <span className="text-navy">
          Aidan Flynn will show you exactly how much.
        </span>
      </span>

      {/* SVG glow filter \u2014 adapted for teal/gold on cream */}
      <svg
        className="absolute -z-10 h-0 w-0"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="hero-glow"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blur3"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur12"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur6"
            />
            {/* Layer 0: crisp teal text */}
            <feColorMatrix
              in="blur3"
              result="color-0"
              type="matrix"
              values="0.106 0 0 0 0
                      0 0.278 0 0 0
                      0 0 0.290 0 0
                      0 0 0 0.9 0"
            />
            <feOffset in="color-0" result="layer-0" dx="0" dy="0" />
            {/* Layer 1: warm gold inner glow */}
            <feColorMatrix
              in="blur6"
              result="color-1"
              type="matrix"
              values="0.788 0 0 0 0
                      0 0.663 0 0 0
                      0 0 0.431 0 0
                      0 0 0 0.35 0"
            />
            <feOffset in="color-1" result="layer-1" dx="0" dy="1" />
            {/* Layer 2: teal mid glow */}
            <feColorMatrix
              in="blur12"
              result="color-2"
              type="matrix"
              values="0.173 0 0 0 0
                      0 0.388 0 0 0
                      0 0 0.400 0 0
                      0 0 0 0.25 0"
            />
            <feOffset in="color-2" result="layer-2" dx="0" dy="2" />
            {/* Layer 3: subtle gold outer glow */}
            <feColorMatrix
              in="blur12"
              result="color-3"
              type="matrix"
              values="0.788 0 0 0 0
                      0 0.663 0 0 0
                      0 0 0.431 0 0
                      0 0 0 0.15 0"
            />
            <feOffset in="color-3" result="layer-3" dx="0" dy="4" />
            <feMerge>
              <feMergeNode in="layer-3" />
              <feMergeNode in="layer-2" />
              <feMergeNode in="layer-1" />
              <feMergeNode in="layer-0" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.span>
  )
}
