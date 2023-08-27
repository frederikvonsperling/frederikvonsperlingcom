import { css } from "@styled-system/css";
import { Badge } from "../../01-atoms/Badge/Badge";

type Props = {
  title: string;
  excerpt: string;
  image: {
    srcSets: {
      src: string;
      size: number;
    }[];
    sizes: string;
  };
  categories: string[];
};

export const Card = ({ title, excerpt, categories, image }: Props) => {
  return (
    <div className={css({ color: "white" })}>
      <picture
        className={css({
          mb: 22,
          display: "block",
          bg: "gray.100",
          aspectRatio: 16 / 9,
          width: "full",
          overflow: "hidden",
          rounded: "sm",
        })}
      >
        <source
          srcSet={image.srcSets
            .map((srcSet) => `${srcSet.src} ${srcSet.size}w`)
            .join(", ")}
          sizes="100vw"
        />
        <img
          src="https://picsum.photos/200"
          alt="image"
          className={css({ width: "full", height: "full", objectFit: "cover" })}
        />
      </picture>
      <h1
        className={css({
          fontFamily: "heading",
          fontWeight: 800,
          lineHeight: 1.2,
          fontSize: 24,
          mb: 1,
        })}
      >
        {title}
      </h1>
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
