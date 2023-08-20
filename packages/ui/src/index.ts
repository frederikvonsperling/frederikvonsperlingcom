import { definePreset } from "@pandacss/dev";

export const uiPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: { primary: "blue.500" },
      },
    },
  },
});
