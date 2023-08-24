import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "@ui/panda-preset";

export default defineConfig({
  presets: [uiPreset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  // The output directory for your css system
  outdir: "./styled-system",
});
