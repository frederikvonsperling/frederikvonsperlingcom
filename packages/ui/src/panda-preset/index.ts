import { definePreset } from "@pandacss/dev";
import { Config } from "@pandacss/types";
import tokens from "./tokens";
import globalCss from "./global-css";
import keyframes from "./keyframes.tokens";

export const uiPreset = definePreset({
  conditions: {},
  patterns: {},
  globalCss,
  theme: {
    extend: {
      tokens,
      keyframes,
    },
  },
}) satisfies Config;
