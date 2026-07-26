import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aic: {
          navy: "var(--aic-navy)",
          blue: "var(--aic-blue)",
          tech: "var(--aic-tech-blue)",
          ink: "var(--aic-ink)",
          muted: "var(--aic-muted)",
          mist: "var(--aic-mist)",
          line: "var(--aic-line)",
          gold: "var(--aic-gold)",
          "gold-dark": "var(--aic-gold-dark)",
          warm: "var(--aic-warm)",
        },
      },
      borderRadius: { card: "22px", media: "24px", video: "28px", hero: "32px" },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        pill: "var(--shadow-pill-dark)",
      },
      backgroundImage: {
        "hero-wash": "linear-gradient(rgba(0, 47, 81, 0.7), rgba(0, 47, 81, 0.7))",
        "hero-main": "linear-gradient(rgba(0, 47, 81, 0.4), rgba(0, 47, 81, 0.8))",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
        display: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      keyframes: {
        "curtain-left": {
          "0%, 64%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "curtain-right": {
          "0%, 64%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "curtain-fade": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "15%": { opacity: "1", transform: "scale(1)" },
          "55%": { opacity: "1", transform: "scale(1)" },
          "70%": { opacity: "0", transform: "scale(0.3)" },
          "100%": { opacity: "0", transform: "scale(0.3)" },
        },
        "network-fade": {
          "0%, 60%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "breathing-glow": {
          "0%, 100%": { boxShadow: "0 0 40px rgba(133,190,255,0.4), inset 0 0 20px rgba(255,255,255,0.2)" },
          "50%": { boxShadow: "0 0 80px rgba(133,190,255,0.8), inset 0 0 40px rgba(255,255,255,0.5)" },
        },
        "flare": {
          "0%, 55%": { opacity: "0", filter: "brightness(1) blur(0px)", transform: "scale(1)" },
          "62%": { opacity: "1", filter: "brightness(2) blur(8px)", transform: "scale(1.5)" },
          "75%": { opacity: "0", filter: "brightness(1) blur(0px)", transform: "scale(0.3)" },
          "100%": { opacity: "0", filter: "brightness(1) blur(0px)", transform: "scale(0.3)" },
        },
        "svg-reveal-fade": {
          "0%": { clipPath: "circle(0% at 50% 50%)", opacity: "1", transform: "scale(0.95)" },
          "60%": { clipPath: "circle(150% at 50% 50%)", opacity: "1", transform: "scale(1)" },
          "64%": { clipPath: "circle(150% at 50% 50%)", opacity: "1", transform: "scale(1)" },
          "100%": { clipPath: "circle(150% at 50% 50%)", opacity: "0", transform: "scale(1.05)" },
        }
      },
      animation: {
        "curtain-left": "curtain-left 3.4s cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "curtain-right": "curtain-right 3.4s cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "curtain-fade": "curtain-fade 3.4s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        "network-fade": "network-fade 3.4s ease-out forwards",
        "breathing-glow": "breathing-glow 2s ease-in-out infinite",
        "flare": "flare 3.4s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        "svg-reveal-fade": "svg-reveal-fade 3.4s cubic-bezier(0.87, 0, 0.13, 1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
