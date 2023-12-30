import codeStyles from "./code.styles";

type Properties = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function CodeMark({ children, ...rest }: Properties) {
  return (
    <span className={codeStyles} {...rest}>
      {children}
    </span>
  );
}
