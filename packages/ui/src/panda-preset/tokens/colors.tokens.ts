import { defineTokens } from "@pandacss/dev";

export default defineTokens.colors({
  white: { value: "#FFFFFF" },
  yellow: { value: "#F6F7C2" },
  red: { value: "#C6294D" },
  purple: { value: "#D34D89" },
  purpleLight: { value: "rgb(211 77 137 / 20%)" },
  pink: { value: "#DB63B8" },
  blue: { value: "#9ABAFA" },
  darkGray: { value: "#16171a" },
  offWhite: {
    50: {
      value: "hsla(0, 0%, 100%, 0.05)",
    },
    100: {
      value: "hsla(0, 0%, 100%, 0.1)",
    },
    200: {
      value: "hsla(0, 0%, 100%, 0.2)",
    },
  },
});
