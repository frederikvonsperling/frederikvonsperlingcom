import { cache } from "react";
import { err, ok, ResultAsync } from "neverthrow";
import { z } from "zod";

import { articleSchema } from "../model/article.model";

import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";

const query = `
*[_type == 'article' && count((tags[]->slug.current)[@ in $slugs]) > 0] {
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
  }
`;

type Parameters = {
  params: {
    slugs: Array<string>;
  };
};

async function getArticlesByCategoryApi({ params }: Parameters) {
  const articlesResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, params)
      .then((articles) => z.array(articleSchema).parse(articles)),
    (error) => intoError(error, "Something went wrong")
  );

  if (articlesResponse.isErr()) {
    return err(articlesResponse.error);
  }

  return ok(articlesResponse.value);
}

export default cache(getArticlesByCategoryApi);
