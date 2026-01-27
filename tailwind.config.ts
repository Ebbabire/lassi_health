import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0D0F12",
          card: "#16191D",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        indigo: {
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        rose: {
          400: "#fb7185",
          500: "#f43f5e",
        },
      },
    },
  },
};

export default config;
