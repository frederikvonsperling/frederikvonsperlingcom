import Link from "next/link";
import { notFound } from "next/navigation";
import { postRepository } from "@/features/post/post.repository";
import { CodeBlock } from "@/foundation/components/code-block";

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
      <Link href="/posts">Back to Posts</Link>
      <h1>{post.title}</h1>
      <div>
        {post.body?.map((block, index) => {
          console.log(block);

          switch (block._type) {
            case "block": {
              return (
                <div key={index}>
                  {block.children.map((child, index) => {
                    return <p key={index}>{child.text}</p>;
                  })}
                </div>
              );
            }
            case "code-snippet": {
              return <CodeBlock language="typescript">{block.code}</CodeBlock>;
            }
          }
        })}
      </div>
    </div>
  );
}
