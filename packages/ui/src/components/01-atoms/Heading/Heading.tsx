import { heading } from "@styled-system/recipes";
import type { HeadingVariant } from "@styled-system/recipes";

type Props = HeadingVariant & {
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ children, element, size }: Props) => {
  const Component = element;

  return <Component className={heading({ size })}>{children}</Component>;
};
