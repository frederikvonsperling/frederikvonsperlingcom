import { RecipeVariantProps } from "@pandacss/types";
import { cx } from "@styled-system/css";
import headingStyles from "./heading.styles";

type HeadingVariants = RecipeVariantProps<typeof headingStyles>;

type HeadingOwnProperties = {
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

type Properties = HeadingOwnProperties &
  React.HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants;

export default function Heading({
  element,
  size,
  className,
  ...props
}: Properties) {
  const Component = element;

  return (
    <Component className={cx(headingStyles({ size }), className)} {...props} />
  );
}
