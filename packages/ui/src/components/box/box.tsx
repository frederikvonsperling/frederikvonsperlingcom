import { HTMLAttributes } from "react";
import { RecipeVariantProps } from "@pandacss/types";

import { cx } from "@styled-system/css";
import boxStyles from "./box.styles";

type BoxOwnProperties = {
  children?: React.ReactNode;
  className?: string;
};

type BoxVariantProperties = RecipeVariantProps<typeof boxStyles>;

type Properties = BoxOwnProperties &
  BoxVariantProperties &
  HTMLAttributes<HTMLDivElement>;

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
      className={cx(boxStyles({ isLoading }), className)}
      {...properties}
    >
      {children}
    </div>
  );
}
