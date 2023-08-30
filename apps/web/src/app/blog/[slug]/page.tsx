import { Metadata, ResolvingMetadata } from "next";
import { css } from "styled-system/css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { postRepository } from "@/features/post/post.repository";
import { CodeBlock } from "@/foundation/components/code-block";
import { PortableText } from "@portabletext/react";
import { grid } from "styled-system/patterns";
import { getImageDimensions } from "@sanity/asset-utils";
import { imageUrlBuilder } from "@/foundation/sanity-client";
import { Picture } from "@ui/components/01-atoms/Picture/Picture";
import { Badge } from "@ui/components/01-atoms/Badge/Badge";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const response = await postRepository.getPost({
    params: { slug },
    config: { next: { revalidate: 10 } },
  });

  if (response.status === "error") {
    throw new Error(`Error getting post with slug ${slug}`);
  }

  return {
    title: response.data?.title,
  };
}

export default async function Page({ params }: Props) {
  const slug = params.slug;

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

  const featuredImage = imageUrlBuilder
    .image(post.featuredImage)
    .width(1920)
    .height(Math.round(1920 * (9 / 16)))
    .fit("crop")
    .format("webp")
    .url();

  const Content = (child: any) => {
    if (child.marks.includes("code")) {
      return (
        <span
          className={css({
            display: "inline-block",
            color: "gray.300",
            bg: "#16171a",
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
    <div className={css({ maxW: "3xl", mx: "auto", px: 4 })}>
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
          <Picture srcSets={[{ src: featuredImage, size: 1920 }]} />
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
        <p className={css({ color: "gray.500", fontFamily: "body", mb: 2 })}>
          Last updated: {new Date(post._updatedAt).toLocaleDateString("en-US")}
        </p>
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
              return <Badge key={category._id}>{category.title}</Badge>;
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
