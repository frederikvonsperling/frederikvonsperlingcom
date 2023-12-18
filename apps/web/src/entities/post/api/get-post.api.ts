import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { z } from "zod";
import { postSchema } from "../model/post.model";
import { cache } from "react";

const query = ` 
*[_type == 'post' && slug.current == $slug] {
    _type,
    content,
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
    _createdAt
}`;

/**
 * Get all posts
 */

type Params = {
  params: {
    slug: string;
  };
};

async function getPost({ params }: Params) {
  const postResponse = await ResultAsync.fromPromise(
    sanityClient.fetch(query, params).then((res) => postSchema.parse(res[0])),
    (error) => intoError(error, "Something went wrong")
  );

  if (postResponse.isErr()) {
    return err(postResponse.error);
  }

  return ok(postResponse.value);
}

export default cache(getPost);
