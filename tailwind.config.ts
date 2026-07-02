import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E0E0E',
        fg: '#F4F4F4',
        muted: '#555555',
        dim: '#2A2A2A',
        rule: '#1C1C1C',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
