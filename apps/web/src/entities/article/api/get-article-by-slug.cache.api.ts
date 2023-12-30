import { cache } from "react";
import { err, ok, ResultAsync } from "neverthrow";

import { articleSchema } from "@/entities/article/model/article.model";
import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";

const query = ` 
*[_type == 'article' && slug.current == $slug] {
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

type Parameters = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

/**
 * Get article by slug
 */
async function getArticleBySlugApi({ params }: Parameters) {
  const articleResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, params)
      .then((response) => articleSchema.parse(response[0])),
    (error) => intoError(error, "Something went wrong")
  );

  if (articleResponse.isErr()) {
    return err(articleResponse.error);
  }

  return ok(articleResponse.value);
}

export default cache(getArticleBySlugApi);
