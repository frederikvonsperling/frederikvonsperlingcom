import { Metadata, ResolvingMetadata } from "next";
import Post from "./post";
import { css } from "styled-system/css";
import { postRepository } from "@/features/post/post.repository";

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
  return (
    <div
      className={css({
        maxW: "3xl",
        marginLeft: "auto",
        marginRight: "auto",
        p: 4,
      })}
    >
      <Post slug={params.slug} />
    </div>
  );
}
