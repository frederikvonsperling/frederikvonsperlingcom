import { Tokens } from "@pandacss/types";
import colors from "./colors.tokens";
import sizes from "./sizes.tokens";
import spacing from "./spacing.tokens";
import fonts from "./fonts.tokens";
import gradients from "./gradient.tokens";
import borders from "./borders.tokens";
import animations from "./animation.tokens";

export default {
  spacing,
  sizes,
  colors,
  fonts,
  gradients,
  borders,
  animations,
} satisfies Tokens;
