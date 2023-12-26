import { CssKeyframes } from "@pandacss/types";

export default {
  shine: {
    to: {
      backgroundPositionX: "-400%",
    },
  },
  hoverShine: {
    to: {
      backgroundPosition: "10%",
    },
  },
} satisfies CssKeyframes;
