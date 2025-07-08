import { heroui } from '@heroui/react';
import type { Config } from 'tailwindcss';

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;

export default config;
