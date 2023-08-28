import { css } from "@styled-system/css";

export type Props = {
  children: string;
};

export const Badge = ({ children }: Props) => {
  return (
    <p
      className={css({
        bg: "purpleLight",
        display: "inline-block",
        rounded: "sm",
        py: 0.5,
        px: 3,
        color: "purple",
        fontFamily: "code",
        fontSize: "xs",
        fontWeight: 700,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "purple",
        textTransform: "uppercase",
        letterSpacing: "wider",
      })}
    >
      {children}
    </p>
  );
};
