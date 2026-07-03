import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#000000',
          secondary: '#0A0A0A',
        },
        surface: '#111111',
        fg: {
          DEFAULT: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#808080',
        },
        border: 'rgba(255,255,255,0.08)',
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'IBM Plex Mono', 'monospace'],
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
