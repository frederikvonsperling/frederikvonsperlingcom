import { imageUrlBuilder } from "@/shared/sanity-client";
import { css } from "@styled-system/css";
import Link from "next/link";
import { Picture } from "@ui/components/01-atoms/Picture/Picture";
import { Badge } from "@ui/components/01-atoms/Badge/Badge";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { grid } from "@styled-system/patterns";
import { getImageDimensions } from "@sanity/asset-utils";
import { PostType } from "@/entities/post/model/post.model";

type Props = {
  post: PostType;
};

export default async function SinglePostWidget({ post }: Props) {
  const components = {
    types: {
      "code-snippet": ({ value }) => {
        return <p>{JSON.stringify(value)}</p>;
      },
      image: ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);

        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrlBuilder
              .image(value)
              .width(isInline ? 100 : 800)
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alt || " "}
            loading="lazy"
            style={{
              // Display alongside text if image appears inside a block text span
              display: isInline ? "inline-block" : "block",

              width: "100%",

              // Avoid jumping around with aspect-ratio CSS property
              aspectRatio: width / height,
            }}
          />
        );
      },
    },
    marks: {
      code: ({ children }) => {
        return <pre>{children}</pre>;
      },
      link: ({ children, value }) => {
        return <a href={value.href}>{children}</a>;
      },
    },
  } satisfies PortableTextComponents;

  return (
    <div className={css({ maxW: "3xl", mx: "auto", px: "4" })}>
      <Link
        className={css({
          fontFamily: "body",
          color: "white",
          mb: "8",
          display: "block",
        })}
        href="/blog"
      >
        Back to Posts
      </Link>

      <header className={css({ mb: "8" })}>
        <p className={css({ color: "gray.500", fontFamily: "body", mb: "2" })}>
          Last updated: {new Date(post._updatedAt).toLocaleDateString("en-US")}
        </p>
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: "5xl",
            mb: "2",
            fontWeight: "extrabold",
            color: "white",
            lineHeight: "tight",
          })}
        >
          {post.title}
        </h1>
        <p
          className={css({
            color: "purple",
            fontFamily: "body",
            fontWeight: "400",
            fontSize: "2xl",
          })}
        >
          {post.excerpt}
        </p>
        <div className={css({ mt: "4" })}>
          <div className={css({ display: "flex", gap: "2" })}>
            {post.categories.map((category, index) => {
              return <Badge key={category._id}>{category.title}</Badge>;
            })}
          </div>
        </div>
      </header>
      <div className={grid({ gap: "4" })}>
        <PortableText
          value={post.content}
          onMissingComponent={(message, options) => {
            console.warn(message, options);
          }}
          components={components}
        />
      </div>
    </div>
  );
}
