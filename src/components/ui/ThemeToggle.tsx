'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored)
    }
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-base ease-standard focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        backgroundColor: isDark
          ? 'var(--color-surface-elevated)'
          : 'var(--color-action-secondary-bg)',
        outlineColor: 'var(--color-focus-ring)',
      }}
    >
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-base ease-standard"
        style={{
          transform: isDark ? 'translateX(1.375rem)' : 'translateX(0.25rem)',
          backgroundColor: isDark
            ? 'var(--color-brand-primary)'
            : 'var(--color-brand-primary)',
        }}
      >
        {isDark ? (
          <Moon size={12} style={{ color: 'var(--color-action-primary-text)' }} />
        ) : (
          <Sun size={12} style={{ color: 'var(--color-action-primary-text)' }} />
        )}
      </span>
    </button>
  )
}
