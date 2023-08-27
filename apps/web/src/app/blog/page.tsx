import Link from "next/link";
import { postRepository } from "@/features/post/post.repository";
import { css } from "@styled-system/css";
import { Card } from "@ui/components/03-molecules/Card/Card";
import { imageUrlBuilder } from "@/foundation/sanity-client";

export default async function Posts() {
  const response = await postRepository.getPosts({
    params: {},
    config: { next: { revalidate: 10 } },
  });

  return (
    <div className={css({ maxW: "3xl", mx: "auto", p: 4 })}>
      <div>
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: 30,
            fontWeight: 800,
            mb: 10,
            color: "white",
          })}
        >
          Posts
        </h1>
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
