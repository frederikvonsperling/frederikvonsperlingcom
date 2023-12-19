import { cva, cx } from "@styled-system/css";
import type { HeadingVariant } from "@styled-system/recipes";

type Props = HeadingVariant & {
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const headingStyles = cva({
  base: {
    fontFamily: "heading",
    color: "white",
    lineHeight: "tight",
  },
  variants: {
    size: {
      h1: { fontSize: "5xl", fontWeight: "normal" },
      h2: { fontSize: "4xl", fontWeight: "extrabold" },
      h3: { fontSize: "xl", fontWeight: "600" },
      h4: {},
      h5: {},
      h6: {},
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export default function Heading({ children, element, size, className }: Props) {
  const Component = element;

  return (
    <Component className={cx(headingStyles({ size }), className)}>
      {children}
    </Component>
  );
}
