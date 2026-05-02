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
        surface: "var(--surface)",
        'surface-hover': "var(--surface-hover)",
        border: "var(--border)",
        accent: "var(--accent)",
        'trip-start': "var(--trip-bg-start)",
        'trip-end': "var(--trip-bg-end)",
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.075em',
      }
    },
  },
  plugins: [],
};
export default config;
