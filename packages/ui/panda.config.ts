import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "./src/panda-preset";
import { Config } from "@pandacss/types";

export default defineConfig({
  presets: ["@pandacss/dev/presets", uiPreset],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: "react",
  strictTokens: true,
  outdir: "styled-system",
  staticCss: {
    recipes: {
      heading: [
        {
          size: ["h1", "h2", "h3"],
        },
      ],
    },
  },
}) satisfies Config;
