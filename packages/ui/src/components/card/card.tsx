import { css } from "@styled-system/css";
import Badge from "@ui/components/badge/badge";
import Heading from "@ui/components/heading";

type Props = {
  title: string;
  excerpt: string;
  categories: string[];
};

export default function Card({ title, excerpt, categories }: Props) {
  return (
    <div className={css({ color: "white" })}>
      <Heading size="h3" element="h2">
        {title}
      </Heading>
      <p
        className={css({
          fontFamily: "body",
          fontSize: 14,
          fontWeight: 400,
          mb: 4,
          mt: 2,
        })}
      >
        {excerpt}
      </p>
      <div className={css({ display: "flex", gap: 2 })}>
        {categories.map((category, index) => {
          return <Badge key={index}>{category}</Badge>;
        })}
      </div>
    </div>
  );
}
