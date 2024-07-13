import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        'section-padding': '0 12rem'
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
        display: ['var(--font-clash-display)'],
      },
      fontSize: {
        '9xl': ['8rem', {
          lineHeight: '0.81'
        }],
      },
      backgroundImage: {
        'hero-gradient': 'url("/images/hero-gradient.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foreground': 'rgba(var(--foreground-rgb))',
        'background': 'rgba(var(--background-rgb))',
        'secondary': 'rgba(var(--secondary-rgb))',
        'tertiary': 'rgba(var(--tertiary-rgb))',
        'highlight': 'rgba(var(--highlight-rgb))',
        'label-bg': '#d9d9d9'
      }
    },
  },
  plugins: [],
};
export default config;
