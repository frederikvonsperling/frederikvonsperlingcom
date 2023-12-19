import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "./src/panda-preset";
import { Config } from "@pandacss/types";

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

  // The output directory for your css system
  outdir: "styled-system",

  staticCss: {
    recipes: {
      heading: [
        {
          size: ["h1", "h2"],
        },
      ],
    },
  },
}) satisfies Config;
