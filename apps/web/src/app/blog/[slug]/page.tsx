import Link from "next/link";
import { notFound } from "next/navigation";
import { postRepository } from "@/features/post/post.repository";
import { css } from "styled-system/css";

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await postRepository.getPost({
    params,
    config: { next: { revalidate: 1 } },
  });

  if (response.status === "error") {
    throw new Error(`Error getting post with slug ${params.slug}`);
  }

  const post = response.data;

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Link href="/blog">Back to Posts</Link>
      <h1
        className={css({
          fontFamily: "var(--font-family-oswald)",
          fontSize: "5xl",
          color: "white",
        })}
      >
        {post.title}
      </h1>
      <div>
        {post.body?.map((block, index) => {
          switch (block._type) {
            case "block": {
              return (
                <div key={index}>
                  {block.children.map((child, index) => {
                    return (
                      <p
                        style={{
                          fontFamily: "var(--font-family-source-sans)",
                          color: "white",
                        }}
                        key={index}
                      >
                        {child.text}
                      </p>
                    );
                  })}
                </div>
              );
            }
            case "code-snippet": {
              return <p key={index}>Hye</p>;
            }
          }
        })}
      </div>
    </div>
  );
}
