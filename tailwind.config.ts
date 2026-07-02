import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        fg: '#F5F5F5',
        muted: '#737373',
        dim: '#404040',
        rule: '#1F1F1F',
        accent: '#E8E8E8',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        shimmer:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        glow: '0 0 80px rgba(255,255,255,0.04)',
        card: '0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 48px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
