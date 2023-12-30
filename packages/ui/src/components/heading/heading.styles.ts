import { cva } from "@styled-system/css";

export default cva({
  base: {
    fontFamily: "heading",
    color: "white",
    lineHeight: "tight",
  },
  variants: {
    size: {
      h1: { fontSize: "5xl", fontWeight: "normal" },
      h2: { fontSize: "4xl", fontWeight: "extrabold" },
      h3: { fontSize: "xl", fontWeight: "bold" },
      h4: {},
      h5: {},
      h6: {},
    },
  },
  defaultVariants: {
    size: "h1",
  },
});
