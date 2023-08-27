import { sanityClient } from "@/foundation/sanity-client";
import { PostType } from "../post.entities";
import { AsyncRequest, AsyncResponse } from "../post.repository";

export const getPostsOperation = async ({
  params,
  config = {},
}: AsyncRequest): Promise<AsyncResponse<PostType[]>> => {
  const response = await sanityClient.fetch<PostType[]>(
    `*[_type == 'post'] {
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

  return {
    status: "success",
    data: response,
  };
};
