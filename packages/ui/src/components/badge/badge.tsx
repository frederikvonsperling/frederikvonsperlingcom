import { css } from "@styled-system/css";

export type Props = {
  children: string;
};

export default function Badge({ children }: Props) {
  return (
    <p
      className={css({
        display: "inline-block",
        rounded: "sm",
        fontFamily: "code",
        fontSize: 12,
        fontWeight: 400,
      })}
    >
      {children}
    </p>
  );
}
