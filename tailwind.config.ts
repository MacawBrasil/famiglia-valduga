import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    screens: {
      "2xl": { max: "1440px" },

      "1xl": { max: "1366px" },

      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "768px" },

      sm: { max: "640px" },
    },
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      fontFamily: {
        basker: ["var(--font-baskervville)"],
        mont: ["var(--font-montserrat)"],
      },
      colors: {
        ouro_light: "#D2AC67",
        ouro: "#C18F33",
      },
      backgroundImage: {
        "banner-historia": "url('/bg-historia.png')",
        "banner-boards": "url('/bg-boards.png')",
        "hero-home": "url('/bg-home.png')",
        "hero-contact": "url('/bg-contato.png')",
        "hero-sobre": "url('/bg-sobre.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
