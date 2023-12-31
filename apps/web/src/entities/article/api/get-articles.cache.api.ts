import { cache } from "react";
import { err, ok, ResultAsync } from "neverthrow";
import { z } from "zod";

import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";

import { articleSchema } from "../model/article.model";

const query = `
*[_type == 'article'] {
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

async function getArticlesApi() {
  const articlesResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query)
      .then((articles) => z.array(articleSchema).parse(articles)),
    (error) => intoError(error, "Something went wrong")
  );

  if (articlesResponse.isErr()) {
    return err(articlesResponse.error);
  }

  return ok(articlesResponse.value);
}

export default cache(getArticlesApi);
