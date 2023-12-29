import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { cache } from "react";
import { ENTRY_STATUS } from "@/shared/lib/constants";
import { articleSchema } from "../model/article.model";

const query = ` 
*[_type == 'post' && slug.current == $slug && status == $status] {
    _type,
    content,
    "tags": tags[]->{
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

async function getPostBySlugApi({ params }: Params) {
  const postResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, { status: ENTRY_STATUS, ...params })
      .then((res) => articleSchema.parse(res[0])),
    (error) => intoError(error, "Something went wrong")
  );

  if (postResponse.isErr()) {
    return err(postResponse.error);
  }

  return ok(postResponse.value);
}

export default cache(getPostBySlugApi);
