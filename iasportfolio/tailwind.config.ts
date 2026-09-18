import type { Config } from "tailwindcss";
import iasPreset from "./tailwind-preset";

/**
 * IAS Portfolio — extends the shared IAS preset.
 * KEEP preflight:false — portfolio matches IAS/Wix conventions and supplies its own
 * base resets via globals.css. (Separate decision from adopting the preset.)
 */
const config: Config = {
  presets: [iasPreset],
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
        // App-specific: NOT in ias_color_system.csv.
        // TODO: add Primary-975 to the color CSV, or migrate the footer off it.
        primary: {
          975: "#051B1E", // footer bottom bar
        },
      },
    },
  },
};

export default config;
