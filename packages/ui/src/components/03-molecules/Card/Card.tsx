import { css } from "@styled-system/css";
import { Badge } from "@ui/components/01-atoms/Badge/Badge";
import { Picture } from "@ui/components/01-atoms/Picture/Picture";
import { ComponentProps } from "react";
import { Heading } from "../../01-atoms/Heading/Heading";

type Props = {
  title: string;
  excerpt: string;
  image: ComponentProps<typeof Picture>;
  categories: string[];
};

export const Card = ({ title, excerpt, categories, image }: Props) => {
  return (
    <div className={css({ color: "white" })}>
      <div className={css({ mb: 22 })}>
        <Picture {...image} />
      </div>
      <Heading size="h3" element="h2">
        {title}
      </Heading>
      <p
        className={css({
          fontFamily: "body",
          fontSize: 16,
          color: "purple",
          mb: 6,
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
