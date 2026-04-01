import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B474A',
          light: '#2C6366',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BC8A',
        },
        cream: '#FAF7F2',
        stone: '#E8E2D8',
        'warm-grey': '#6B6560',
        charcoal: '#2D2926',
        success: '#2D6A4F',
        error: '#9B2C2C',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '56px' }],
        'hero-mobile': ['32px', { lineHeight: '40px' }],
        'page-heading': ['36px', { lineHeight: '44px' }],
        'page-heading-mobile': ['28px', { lineHeight: '36px' }],
        'section-heading': ['28px', { lineHeight: '36px' }],
        'section-heading-mobile': ['22px', { lineHeight: '30px' }],
        'subheading': ['20px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '26px' }],
        'small': ['14px', { lineHeight: '22px' }],
        'caption': ['12px', { lineHeight: '18px' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04)',
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
