import { HTMLAttributes } from "react";
import { RecipeVariantProps } from "@pandacss/types";

import { cx } from "@styled-system/css";
import { cva } from "@styled-system/css/cva";

type Properties = {
  children?: React.ReactNode;
  className?: string;
} & CardVariantProperties &
  HTMLAttributes<HTMLDivElement>;

const cardStyles = cva({
  base: {
    p: "4",
    backgroundColor: "offWhite.50",
    borderRadius: "lg",
    border: "subtle",
  },
  variants: {
    isLoading: {
      true: {
        backgroundGradient: "shine",
        animation: "shine",
      },
    },
  },
});

type CardVariantProperties = RecipeVariantProps<typeof cardStyles>;

export default function Box({
  children,
  className,
  isLoading,
  ...properties
}: Properties) {
  return (
    // @NOTE: Background size tokens is not supported in PandaCSS
    <div
      style={{ backgroundSize: "400% 100%" }}
      className={cx(cardStyles({ isLoading }), className)}
      {...properties}
    >
      {children}
    </div>
  );
}
