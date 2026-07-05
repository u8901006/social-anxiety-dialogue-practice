import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f1e8",
        surface: "#fffaf2",
        line: "#d8c5ab",
        ink: "#2b2118",
        muted: "#766453",
        accent: "#8c4f2b",
        "accent-soft": "#ead2bf",
        "accent-deep": "#6b3a1f",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"PingFang TC"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(140, 79, 43, 0.08), 0 4px 16px rgba(140, 79, 43, 0.06)",
        lift: "0 4px 24px rgba(140, 79, 43, 0.14)",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideUp: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.35s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
