import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wedding: ["'Griffiths'", "cursive"],
        body: ["'MADE Tommy'", "sans-serif"],
        regular: ["'MADE Tommy'", "sans-serif"],
        bold: ["'MADE Tommy'", "sans-serif"],
        thin: ["'MADE Tommy'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
