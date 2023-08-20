import Link from "next/link";
import { postRepository } from "@/features/post/post.repository";

export default async function Posts() {
  const response = await postRepository.getPosts({});

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {response.status === "success" &&
          response.data.map((post) => {
            console.log(post);
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
