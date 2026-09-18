import type { Config } from "tailwindcss";

/**
 * IAS design system — single source of truth for Tailwind.
 * Color values traced directly to ias_color_system.csv.
 * Preflight is disabled to match the existing IAS/Wix build conventions;
 * base resets live in globals.css instead.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // --- Base Colors (Core 5) ---
        primary: {
          DEFAULT: "#0A2E36", // Deep Slate Teal — headers, nav, dark surfaces
          50: "#E8F0F1",
          100: "#C1D5D9",
          400: "#4B7A8A",
          800: "#062028",
          950: "#030F12",
          975: "#051B1E", // footer bottom bar
        },
        secondary: {
          DEFAULT: "#3F7266", // Muted Seafoam
          50: "#E6F0EE",
          200: "#9BBEC0",
          400: "#5C8A8C",
          700: "#2A5047",
          900: "#1A3330",
        },
        accent: {
          DEFAULT: "#00E5A3", // Kinetic Emerald — CTAs / links / active only
          600: "#00B882", // pressed CTA
        },
        ink: "#111827", // Ink Blue-Gray — body type, borders
        ash: "#F9FAFB", // Pure Ash — page canvas, card fills
        // --- Neutral scale ---
        "border-gray": "#E5E7EB",
        "disabled-gray": "#9CA3AF",
        "muted-gray": "#6B7280",
        "body-gray": "#374151",
      },
      backgroundColor: {
        // Accent selection / dropzone tints (rgba tokens from CSV)
        "accent-04": "rgba(0,229,163,0.04)",
        "accent-05": "rgba(0,229,163,0.05)",
      },
      borderColor: {
        "accent-15": "rgba(0,229,163,0.15)",
        "accent-30": "rgba(0,229,163,0.30)",
      },
      fontFamily: {
        // Display + body: Space Grotesk / DM Sans.
        // Mono for code, terminals, payloads, data labels.
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Deliberate type scale
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        content: "72rem", // 1152px content column
      },
      borderRadius: {
        card: "0.75rem",
        btn: "5px", // button radius — single source of truth
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "pulse-live": "pulse-live 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
