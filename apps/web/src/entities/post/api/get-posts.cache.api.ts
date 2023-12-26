import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { z } from "zod";
import { postSchema } from "../model/post.model";
import intoError from "@/shared/api/into-error";
import { cache } from "react";
import { ENTRY_STATUS } from "@/shared/lib/constants";

const query = `
*[_type == 'post' && status == $status] {
    _type,
    content,
    credits,
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
    featuredImage,
    _createdAt
  }`;

async function getPostsApi() {
  const postsResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, { status: ENTRY_STATUS })
      .then((posts) => z.array(postSchema).parse(posts)),
    (error) => intoError(error, "Something went wrong")
  );

  if (postsResponse.isErr()) {
    return err(postsResponse.error);
  }

  return ok(postsResponse.value);
}

export default cache(getPostsApi);
