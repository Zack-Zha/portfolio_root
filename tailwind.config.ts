import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,tsx,ts,html}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        sfpro: ['"SF Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
