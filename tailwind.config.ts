import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- Legacy palette (theme-aware via CSS vars) ---
        navy: {
          DEFAULT: 'var(--color-navy)',
          light: 'var(--color-navy-light)',
          deep: 'var(--color-deep)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          light: 'var(--color-gold-light)',
        },
        cream: 'var(--color-cream)',
        stone: 'var(--color-stone)',
        'warm-grey': 'var(--color-warm-grey)',
        charcoal: 'var(--color-charcoal)',

        // --- Illuminated hero effect ---
        glow: {
          gradient: { from: '#dfe5ee', to: '#fffaf6' },
          text: '#e7dfd6',
          subtitle: { from: '#86868b', to: '#bdc2c9' },
        },

        // --- Reference scales ---
        green: {
          350: '#9CB4A2',
          400: '#8FA89A',
          500: '#2F7455',
          550: '#2F6B53',
          600: '#2E7A5B',
          700: '#1F5C45',
          800: '#17372E',
          900: '#0F241C',
          950: '#071912',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F5F4F1',
          100: '#EEF2EF',
          200: '#E7E2D8',
          400: '#C9C2B3',
          500: '#A8ADA6',
          600: '#9F9684',
          650: '#8F968E',
          700: '#8A9A92',
          750: '#7E8A84',
          800: '#6F766F',
        },

        // --- System semantic tokens (theme-aware via CSS vars) ---
        background: {
          DEFAULT: 'var(--color-bg-base)',
          subtle: 'var(--color-bg-subtle)',
          elevated: 'var(--color-bg-elevated)',
        },
        surface: {
          DEFAULT: 'var(--color-surface-base)',
          subtle: 'var(--color-surface-subtle)',
          elevated: 'var(--color-surface-elevated)',
        },
        foreground: {
          DEFAULT: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle: 'var(--color-border-subtle)',
        },
        brand: {
          DEFAULT: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
        },
        action: {
          'primary-bg': 'var(--color-action-primary-bg)',
          'primary-text': 'var(--color-action-primary-text)',
          'primary-hover': 'var(--color-action-primary-hover)',
          'secondary-bg': 'var(--color-action-secondary-bg)',
          'secondary-text': 'var(--color-action-secondary-text)',
        },
        valuation: {
          DEFAULT: 'var(--color-value-surface)',
          text: 'var(--color-value-text)',
          accent: 'var(--color-value-accent)',
        },
        focus: {
          ring: 'var(--color-focus-ring)',
        },
        success: 'var(--color-state-success)',
        warning: 'var(--color-state-warning)',
        error: 'var(--color-state-error)',
      },
      fontFamily: {
        serif: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
        caption: ['var(--font-caption)'],
        'caption-serif': ['var(--font-caption-serif)'],
      },
      fontSize: {
        hero: ['48px', { lineHeight: '56px' }],
        'hero-mobile': ['32px', { lineHeight: '40px' }],
        'page-heading': ['36px', { lineHeight: '44px' }],
        'page-heading-mobile': ['28px', { lineHeight: '36px' }],
        'section-heading': ['28px', { lineHeight: '36px' }],
        'section-heading-mobile': ['22px', { lineHeight: '30px' }],
        subheading: ['20px', { lineHeight: '28px' }],
        body: ['16px', { lineHeight: '26px' }],
        small: ['14px', { lineHeight: '22px' }],
        caption: ['12px', { lineHeight: '18px' }],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '80px',
        'section-mobile': '48px',
      },
      borderRadius: {
        card: '16px',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        'card': 'var(--elev-card)',
        'elev-card': 'var(--elev-card)',
        'elev-card-hover': 'var(--elev-card-hover)',
        'elev-btn': 'var(--elev-btn)',
        'elev-btn-hover': 'var(--elev-btn-hover)',
        'elev-btn-active': 'var(--elev-btn-active)',
        'elev-btn-outline': 'var(--elev-btn-outline)',
        'elev-btn-outline-hover': 'var(--elev-btn-outline-hover)',
        'elev-inset': 'var(--elev-inset)',
        'elev-inset-focus': 'var(--elev-inset-focus)',
        'elev-chip-inset': 'var(--elev-chip-inset)',
      },
      transitionDuration: {
        fast: 'var(--motion-fast)',
        base: 'var(--motion-base)',
        slow: 'var(--motion-slow)',
      },
      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
      },
      keyframes: {
        onloadopacity: {
          '24%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        onloadbgt: {
          '0%': { translate: '0 -70%', opacity: '0.3' },
          '100%': { translate: '0 -64%', opacity: '0.8' },
        },
        onloadbgb: {
          '0%': { translate: '0 70%', opacity: '0.3' },
          '100%': { translate: '0 64%', opacity: '0.8' },
        },
      },
      animation: {
        'glow-in': 'onloadopacity 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
