import { css } from "@styled-system/css";

type Props = {
  title: string;
};

export const Card = ({ title }: Props) => {
  return <div className={css({ bg: "blue" })}>{title}</div>;
};
