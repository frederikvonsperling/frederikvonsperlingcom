import { definePreset } from "@pandacss/dev";
import { Config, Tokens } from "@pandacss/types";
import { headingRecipe } from "@ui/components/01-atoms/Heading/heading.recipe";

const spacing = {
  "3xl": { value: "48rem", description: "768px" },
} satisfies Tokens["spacing"];

const sizes = {
  "3xl": { value: "48rem", description: "768px" },
} satisfies Tokens["sizes"];

const colors = {
  white: { value: "#FFFFFF" },
  yellow: { value: "#F6F7C2" },
  red: { value: "#C6294D" },
  purple: { value: "#D34D89" },
  purpleLight: { value: "rgb(211 77 137 / 20%)" },
  pink: { value: "#DB63B8" },
  blue: { value: "#9ABAFA" },
} satisfies Tokens["colors"];

const fonts = {
  heading: { value: "var(--font-family-nunito)" },
  body: { value: "var(--font-family-pt-sans)" },
  code: { value: "var(--font-family-source-code-pro)" },
} satisfies Tokens["fonts"];

export const uiPreset = definePreset({
  conditions: {},
  patterns: {},
  globalCss: {
    "html, body": {
      color: "white",
    },
  },
  theme: {
    extend: {
      tokens: {
        spacing,
        colors,
        fonts,
        sizes,
      },
      recipes: {
        heading: headingRecipe,
      },
    },
  },
}) satisfies Config;
