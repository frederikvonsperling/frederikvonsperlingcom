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
        backgroundColor: "transparent",
        fontSize: "md",
        fontWeight: "bold",
        border: "offWhite",
        px: "1",
        lineHeight: "none",
        py: "0.5",
      })}
    >
      {children}
    </p>
  );
}
