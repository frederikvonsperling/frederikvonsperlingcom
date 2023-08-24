import { sanityClient } from "@/foundation/sanity-client";
import { AsyncRequest, AsyncResponse } from "../post.repository";
import { PostType } from "../post.entities";

export const getPostOperation = async ({
  config = {},
  params,
}: AsyncRequest<{ slug: string }>): Promise<AsyncResponse<PostType | null>> => {
  const response = await sanityClient.fetch<PostType[]>(
    `*[_type == 'post' && slug.current == $slug] {
      _type,
      content,
      credits,
      "categories": categories[]->{
        _id,
        _type,
        title,
      },
      _updatedAt,
      _id,
      excerpt,
      slug,
      "author": author->{
        name,
        _id
      },
      title,
      featuredImage,
      _createdAt
    }`,
    params,
    config
  );

  console.log(response);

  return {
    status: "success",
    data: response[0] ?? null,
  };
};
