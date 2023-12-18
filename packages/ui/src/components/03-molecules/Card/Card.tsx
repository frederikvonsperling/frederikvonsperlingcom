import { css } from "@styled-system/css";
import { Badge } from "@ui/components/01-atoms/Badge/Badge";
import { Picture } from "@ui/components/01-atoms/Picture/Picture";
import { ComponentProps } from "react";
import { Heading } from "../../01-atoms/Heading/Heading";

type Props = {
  title: string;
  excerpt: string;
  categories: string[];
};

export const Card = ({ title, excerpt, categories }: Props) => {
  return (
    <div className={css({ color: "white" })}>
      <Heading size="h3" element="h2">
        {title}
      </Heading>
      <p
        className={css({
          fontFamily: "heading",
          fontSize: 16,
          color: "gray.400",
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
};
