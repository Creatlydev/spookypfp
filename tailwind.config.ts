import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#FE2D2D',
        darkgrey: '#272828'
      },

      boxShadow: {
        box: '-12px 12px 24px rgba(39, 40, 40, .3)'
      }
    },
  },
  plugins: [],
};
export default config;
