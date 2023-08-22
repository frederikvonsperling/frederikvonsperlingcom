import { definePreset } from "@pandacss/dev";

import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({});

export const uiPreset = definePreset({
  theme: {
    tokens: {},
    extend: {
      textStyles,
      tokens: {
        fonts: {
          heading: {
            value: "var(--font-family-nunito)",
          },
          body: {
            value: "var(--font-family-pt-sans)",
          },
          code: {
            value: "var(--font-family-source-code-pro)",
          },
        },
      },
    },
  },
});
