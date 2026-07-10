import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
        neon: "#a855f7",
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "particle-float": "particle-float 20s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #6366f1, 0 0 10px #6366f1" },
          "100%": { boxShadow: "0 0 20px #8b5cf6, 0 0 40px #8b5cf6, 0 0 60px #a855f7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "particle-float": {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "galaxy": "radial-gradient(ellipse at center, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
    },
  },
  plugins: [],
}

export default config