import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbffe3",
        "cream-dark": "#f0f4d0",
        green: {
          DEFAULT: "#344c2a",
          light: "#4a6b3c",
          muted: "#5a7a4a",
          faint: "#e8f0e0",
          accent: "#8fbc68",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
