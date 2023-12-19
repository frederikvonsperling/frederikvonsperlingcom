import { Metadata } from "next";

import getPost from "@/entities/post/api/get-post.api";
import SinglePostPage from "@/pages/post/single-post/single-post.page";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postsResponse = await getPost({ params: { slug: params.slug } });

  if (postsResponse.isErr()) {
    throw new Error(`Error getting post with slug ${params.slug}`);
  }

  return {
    title: postsResponse.value.title,
  };
}

export default async function Page({ params }: Props) {
  return <SinglePostPage slug={params.slug} />;
}
