import { css } from "@styled-system/css";

type Props = {
  srcSets: {
    src: string;
    size: number;
  }[];
  sizes?: string;
};

export default function Picture({ srcSets, sizes = "100vw" }: Props) {
  const srcSet = srcSets
    .map((srcSet) => `${srcSet.src} ${srcSet.size}w`)
    .join(", ");

  return (
    <picture
      className={css({
        display: "block",
        bg: "gray.100",
        aspectRatio: "wide",
        width: "full",
        overflow: "hidden",
        rounded: "sm",
      })}
    >
      <source srcSet={srcSet} sizes={sizes} />
      <img
        src="https://picsum.photos/200"
        alt="image"
        className={css({ width: "full", height: "full", objectFit: "cover" })}
      />
    </picture>
  );
}
