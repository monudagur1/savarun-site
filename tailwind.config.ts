import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          secondary: '#F4F4F5',
        },
        surface: '#FAFAFA',
        fg: {
          DEFAULT: '#0A0A0A',
          secondary: '#52525B',
          muted: '#71717A',
        },
        border: 'rgba(0,0,0,0.1)',
        glass: 'rgba(0,0,0,0.03)',
        accent: '#2563EB',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
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
