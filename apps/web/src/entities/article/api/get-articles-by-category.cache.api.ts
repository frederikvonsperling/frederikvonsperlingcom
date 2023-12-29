import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { z } from "zod";
import { articleSchema } from "../model/article.model";
import intoError from "@/shared/api/into-error";
import { cache } from "react";
import { ENTRY_STATUS } from "@/shared/lib/constants";

const query = `
*[_type == 'article' && count((tags[]->slug.current)[@ in $slugs]) > 0 && status == $status] {
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

type Params = {
  params: {
    slugs: Array<string>;
  };
};

async function getArticlesByCategoryApi({ params }: Params) {
  const articlesResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, { status: ENTRY_STATUS, ...params })
      .then((articles) => {
        return z.array(articleSchema).parse(articles);
      }),
    (error) => intoError(error, "Something went wrong")
  );

  if (articlesResponse.isErr()) {
    return err(articlesResponse.error);
  }

  return ok(articlesResponse.value);
}

export default cache(getArticlesByCategoryApi);
