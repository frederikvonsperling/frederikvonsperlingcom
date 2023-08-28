import Link from "next/link";
import { postRepository } from "@/features/post/post.repository";
import { css } from "@styled-system/css";
import { Card } from "@ui/components/03-molecules/Card/Card";
import { imageUrlBuilder } from "@/foundation/sanity-client";
import { Heading } from "@ui/components/01-atoms/Heading/Heading";

export default async function Posts() {
  const response = await postRepository.getPosts({
    params: {},
    config: { next: { revalidate: 10 } },
  });

  return (
    <div className={css({ maxW: "3xl", mx: "auto", p: 4 })}>
      <div>
        <div className={css({ mb: 10 })}>
          <Heading size="h1" element="h1">
            Posts
          </Heading>
        </div>
        <div
          className={css({ display: "grid", gridTemplateColumns: "3", gap: 8 })}
        >
          {response.status === "success" &&
            response.data.map((post) => {
              const categories = post.categories.map(
                (category) => category.title
              );

              console.log("categories", categories);

              const imageUrl = imageUrlBuilder
                .image(post.featuredImage)
                .width(400)
                .height(225)
                .fit("crop")
                .format("webp")
                .url();

              return (
                <Link
                  data-post-id={post._id}
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                >
                  <Card
                    title={post.title}
                    excerpt={post.excerpt}
                    categories={post.categories.map(
                      (category) => category.title
                    )}
                    image={{
                      sizes: "100vw",
                      srcSets: [
                        {
                          src: imageUrl,
                          size: 200,
                        },
                      ],
                    }}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
