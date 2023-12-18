import { definePreset } from "@pandacss/dev";
import { Config } from "@pandacss/types";
import tokens from "./tokens";
import globalCss from "./global-css";

export const uiPreset = definePreset({
  conditions: {},
  patterns: {},
  globalCss,
  theme: {
    extend: {
      tokens,
    },
  },
}) satisfies Config;
