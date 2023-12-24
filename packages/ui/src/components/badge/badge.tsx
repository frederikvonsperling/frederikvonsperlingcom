import { css } from "@styled-system/css";

export type Props = {
  children: string;
};

export default function Badge({ children }: Props) {
  return (
    <p
      className={css({
        display: "block",
        rounded: "sm",
        fontFamily: "code",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        fontSize: 12,
        fontWeight: 600,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        px: 1,
        lineHeight: "none",
        py: 0.5,
      })}
    >
      {children}
    </p>
  );
}
