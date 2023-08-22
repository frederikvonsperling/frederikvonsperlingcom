import Link from "next/link";
import { notFound } from "next/navigation";
import { postRepository } from "@/features/post/post.repository";
import { CodeBlock } from "@/foundation/components/code-block";
import { css } from "styled-system/css";
import { PortableText } from "@portabletext/react";
import { grid } from "styled-system/patterns";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/foundation/sanity-client";

const builder = imageUrlBuilder(sanityClient);

export default async function Post({ slug }: { slug: string }) {
  const response = await postRepository.getPost({
    params: { slug },
    config: { next: { revalidate: 1 } },
  });

  if (response.status === "error") {
    throw new Error(`Error getting post with slug ${slug}`);
  }

  const post = response.data;

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Link href="/blog">Back to Posts</Link>

      <h2
        className={css({
          fontFamily: "heading",
          fontSize: "xx-large",
          mb: 1,
          fontWeight: "extrabold",
          color: "white",
        })}
      >
        {post.title}
      </h2>
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
                    return (
                      <p
                        className={css({
                          color: "white",
                          fontFamily: "body",
                          fontSize: "lg",
                        })}
                      >
                        {value.children.map((child, index) => {
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
                                key={index}
                              >
                                {child.text}
                              </span>
                            );
                          }
                          return <>{child.text}</>;
                        })}
                      </p>
                    );
                  },
                  image: ({ value, isInline }) => {
                    const { width, height } = getImageDimensions(value);

                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={builder
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
