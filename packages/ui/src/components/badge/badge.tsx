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
        fontSize: 12,
        fontWeight: 600,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "offWhite.100",
        px: 1,
        lineHeight: "none",
        py: 0.5,
      })}
    >
      {children}
    </p>
  );
}
