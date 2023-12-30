import { cx } from "@styled-system/css";
import bodyStyles from "./body.styles";

type Properties = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function Body({ className, ...props }: Properties) {
  return <p className={cx(bodyStyles, className)} {...props} />;
}
