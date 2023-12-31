import codeStyles from "./code.styles";

type Properties = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function CodeMark({ children }: Properties) {
  return <span className={codeStyles}>{children}</span>;
}
