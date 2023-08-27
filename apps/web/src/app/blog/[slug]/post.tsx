import Link from "next/link";
import { notFound } from "next/navigation";
import { postRepository } from "@/features/post/post.repository";
import { CodeBlock } from "@/foundation/components/code-block";
import { css } from "styled-system/css";
import { PortableText } from "@portabletext/react";
import { grid } from "styled-system/patterns";
import { getImageDimensions } from "@sanity/asset-utils";
import { imageUrlBuilder } from "@/foundation/sanity-client";

export default async function Post({ slug }: { slug: string }) {
  const response = await postRepository.getPost({
    params: { slug },
    config: { next: { revalidate: 10 } },
  });

  if (response.status === "error") {
    throw new Error(`Error getting post with slug ${slug}`);
  }

  const post = response.data;

  if (!post) {
    return notFound();
  }

  const { width, height } = getImageDimensions(post.featuredImage);

  const Content = (child: any) => {
    if (child.marks.includes("code")) {
      return (
        <span
          className={css({
            display: "inline-block",
            bg: "gray.700",
            px: 1,
            rounded: "sm",
            fontFamily: "code",
            fontSize: "sm",
            transform: "translateY(-1.5px)",
          })}
        >
          {child.text}
        </span>
      );
    }
    return <>{child.text}</>;
  };

  return (
    <div>
      <Link
        className={css({
          fontFamily: "body",
          color: "white",
          mb: 8,
          display: "block",
        })}
        href="/blog"
      >
        Back to Posts
      </Link>

      <div className={css({ mb: 10 })}>
        <div className={css({ overflow: "hidden", rounded: "sm", mx: -10 })}>
          <img
            src={imageUrlBuilder
              .image(post.featuredImage)
              .width(1920)
              .height(1080)
              .fit("crop")
              .format("webp")
              .url()}
            alt={""}
            className={css({
              transition: "transform 0.1s ease-in-out",

              _hover: {
                transform: "scale(1.01)",
              },
            })}
          />
        </div>
        <p
          className={css({
            fontFamily: "body",
            color: "white",
            opacity: 0.5,
            fontSize: "sm",
            mt: 2,
          })}
        >
          @ <span dangerouslySetInnerHTML={{ __html: post.credits }} />
        </p>
      </div>

      <header className={css({ mb: 8 })}>
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: "5xl",
            mb: 2,
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
            fontWeight: 400,
            fontSize: "2xl",
          })}
        >
          {post.excerpt}
        </p>
        <div className={css({ mt: 4 })}>
          <div className={css({ display: "flex", gap: 2 })}>
            {post.categories.map((category, index) => {
              return (
                <p
                  className={css({
                    bg: "purple",
                    display: "inline-block",
                    rounded: "sm",
                    py: "0.5",
                    px: 2,
                    color: "white",
                    font: "body",
                    fontSize: "sm",
                    fontWeight: "semibold",
                  })}
                  key={index}
                >
                  {category.title}
                </p>
              );
            })}
          </div>
        </div>
      </header>
      <div className={grid({ gap: 4 })}>
        {post.content?.map((block, index) => {
          return (
            <PortableText
              value={block}
              key={index}
              components={{
                types: {
                  "code-snippet": ({ value }) => {
                    return (
                      <CodeBlock language={value.language}>
                        {value.code}
                      </CodeBlock>
                    );
                  },
                  block: ({ value }) => {
                    if (value.style === "h2") {
                      return (
                        <h2
                          className={css({
                            fontSize: "4xl",
                            color: "white",
                            fontFamily: "heading",
                            fontWeight: "bold",
                            lineHeight: "tight",
                            mt: 4,
                            mb: -2,
                          })}
                        >
                          {value.children.map((child, index) => (
                            <Content key={index} {...child} />
                          ))}
                        </h2>
                      );
                    }

                    return (
                      <p
                        className={css({
                          color: "white",
                          fontFamily: "body",
                          fontSize: "lg",
                        })}
                      >
                        {value.children.map((child, index) => (
                          <Content key={index} {...child} />
                        ))}
                      </p>
                    );
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
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
