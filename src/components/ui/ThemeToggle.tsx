'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const resolved = stored ?? getSystemTheme()
    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)

    // Listen for system preference changes (only when no stored preference)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const next = e.matches ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
      }
    }
    mq.addEventListener('change', onSystemChange)
    return () => mq.removeEventListener('change', onSystemChange)
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
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
      style={{
        backgroundColor: isDark
          ? 'var(--color-surface-elevated)'
          : 'var(--color-action-secondary-bg)',
        outlineColor: 'var(--color-focus-ring)',
        transitionDuration: 'var(--motion-base)',
      }}
    >
      <span
        className="pointer-events-none inline-flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-transform ease-standard motion-reduce:transition-none"
        style={{
          transform: isDark ? 'translateX(1.625rem)' : 'translateX(0.25rem)',
          backgroundColor: 'var(--color-brand-primary)',
          transitionDuration: 'var(--motion-base)',
        }}
      >
        {isDark ? (
          <Moon size={14} style={{ color: 'var(--color-action-primary-text)' }} />
        ) : (
          <Sun size={14} style={{ color: 'var(--color-action-primary-text)' }} />
        )}
      </span>
    </button>
  )
}
