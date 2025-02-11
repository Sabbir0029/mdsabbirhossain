import type { Config } from "tailwindcss";
import daisyui from "daisyui"
export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: "3rem", // Adds padding (optional)
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  
} satisfies Config;
