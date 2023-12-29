import { cx } from "@styled-system/css";
import badgeStyles from "./badge.styles";

export type Props = {
  children: string;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({ children, className }: Props) {
  return <span className={cx(badgeStyles, className)}>{children}</span>;
}
