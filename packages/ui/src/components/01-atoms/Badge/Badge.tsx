import { css } from "@styled-system/css";

export type Props = {
  children: string;
};

export const Badge = ({ children }: Props) => {
  return (
    <p
      className={css({
        bg: "purple",
        display: "inline-block",
        rounded: "sm",
        py: "0.5",
        px: 2,
        color: "white",
        font: "body",
        fontSize: "sm",
        fontWeight: "semibold",
      })}
    >
      {children}
    </p>
  );
};
