import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarFooter: "#EBEAEB",
        heroBg: "#BDB2C3",
        textColor: "#000000",
      },
      fontFamily: {
        bitter: ["'Bitter'", "serif"],
        youngSerif: ["'Young Serif'", "serif"], // Added Young Serif font
      },
    },
  },
  plugins: [],
} satisfies Config;
