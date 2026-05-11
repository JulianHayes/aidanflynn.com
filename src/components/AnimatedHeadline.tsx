'use client'

import { motion } from 'framer-motion'

export default function AnimatedHeadline() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mt-2 block text-navy"
    >
      Aidan Flynn will show you exactly how much.
    </motion.span>
  )
}
