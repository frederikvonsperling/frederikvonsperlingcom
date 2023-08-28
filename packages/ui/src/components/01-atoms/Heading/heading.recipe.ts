import { defineRecipe } from "@pandacss/dev";

export const headingRecipe = defineRecipe({
  className: "heading",
  description: "Heading styles",
  base: {
    fontFamily: "heading",
    color: "white",
    lineHeight: "tight",
  },
  variants: {
    size: {
      h1: { fontSize: "5xl", fontWeight: "extrabold" },
      h2: { fontSize: "4xl", fontWeight: "extrabold" },
      h3: { fontSize: "2xl", fontWeight: "extrabold" },
      h4: {},
      h5: {},
      h6: {},
    },
  },
  defaultVariants: {
    size: "h1",
  },
  jsx: ["Heading"],
});
