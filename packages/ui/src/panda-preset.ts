import { definePreset } from "@pandacss/dev";
import { headingRecipe } from "@ui/components/01-atoms/Heading/heading.recipe";

export const uiPreset = definePreset({
  theme: {
    tokens: {},
    extend: {
      tokens: {
        colors: {
          yellow: { value: "#F6F7C2" },
          red: { value: "#C6294D" },
          purple: { value: "#D34D89" },
          pink: { value: "#DB63B8" },
          blue: { value: "#9ABAFA" },
        },
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
      recipes: {
        heading: headingRecipe,
      },
    },
  },
});
