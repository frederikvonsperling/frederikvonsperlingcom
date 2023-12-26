import { RecipeVariantProps } from "@pandacss/types";
import { cx } from "@styled-system/css";
import { cva } from "@styled-system/css/cva";
import { HTMLAttributes } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
} & CardVariantProps &
  HTMLAttributes<HTMLDivElement>;

const cardStyles = cva({
  base: {
    p: "4",
    backgroundColor: "offWhite.50",
    borderRadius: "lg",
    border: "offWhite",
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

type CardVariantProps = RecipeVariantProps<typeof cardStyles>;

export default function Box({
  children,
  className,
  isLoading,
  ...props
}: Props) {
  return (
    // @NOTE: Background size tokens is not supported in PandaCSS
    <div
      style={{ backgroundSize: "400% 100%" }}
      className={cx(cardStyles({ isLoading }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
