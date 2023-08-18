import { sanityClient } from "@/foundation/sanity-client";
import { AsyncRequest, AsyncResponse } from "../post.repository";
import { PostType } from "../post.entities";

export const getPostOperation = async ({
  config,
  params,
}: AsyncRequest<{ slug: string }>): Promise<AsyncResponse<PostType | null>> => {
  const response = await sanityClient.fetch<PostType[]>(
    "*[_type == 'post' && slug.current == $slug]",
    params,
    {
      next: {
        revalidate: 1,
      },
    }
  );

  return {
    status: "success",
    data: response[0] ?? null,
  };
};
