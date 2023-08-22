import Link from "next/link";
import { postRepository } from "@/features/post/post.repository";
import { css } from "styled-system/css";

export default async function Posts() {
  const response = await postRepository.getPosts({
    params: {},
    config: { next: { revalidate: 1 } },
  });

  return (
    <div>
      <h1 className={css({ textStyle: "body", color: "white" })}>Posts</h1>
      <div>
        {response.status === "success" &&
          response.data.map((post) => {
            return (
              <Link
                data-post-id={post._id}
                key={post._id}
                href={`/blog/${post.slug.current}`}
              >
                <h2>{post.title}</h2>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
