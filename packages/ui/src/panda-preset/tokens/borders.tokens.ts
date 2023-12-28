import { defineTokens } from "@pandacss/dev";

export default defineTokens.borders({
  subtle: {
    value: {
      color: "{colors.offWhite.50}",
      style: "solid",
      width: 1,
    },
  },
  light: {
    value: {
      color: "{colors.offWhite.100}",
      style: "solid",
      width: 1,
    },
  },
});
