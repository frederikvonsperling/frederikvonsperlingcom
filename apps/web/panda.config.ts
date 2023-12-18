import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "@ui/panda-preset";
import { Config } from "@pandacss/types";

export default defineConfig({
  presets: ["@pandacss/dev/presets", uiPreset],
  preflight: true,
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  jsxFramework: "react",
  strictTokens: true,
  outdir: "styled-system",
}) satisfies Config;
