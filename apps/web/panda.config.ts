import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "ui/src/index";

export default defineConfig({
  presets: ["@pandacss/dev/presets", uiPreset],
  
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}"],
  
    // Files to exclude
    exclude: [],
  
    // Useful for theme customization
    theme: {
      extend: {},
    },

 
});
