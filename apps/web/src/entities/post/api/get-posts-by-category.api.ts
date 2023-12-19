import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { z } from "zod";
import { postSchema } from "../model/post.model";
import intoError from "@/shared/api/into-error";
import { cache } from "react";

const query = `
*[_type == 'post' && count((categories[]->slug.current)[@ in $slugs]) > 0] {
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
  }
`;

type Params = {
  params: {
    slugs: Array<string>;
  };
};

async function getPostsByCategoryApi({ params }: Params) {
  const postsResponse = await ResultAsync.fromPromise(
    sanityClient.fetch(query, params).then((posts) => {
      return z.array(postSchema).parse(posts);
    }),
    (error) => intoError(error, "Something went wrong")
  );

  if (postsResponse.isErr()) {
    return err(postsResponse.error);
  }

  return ok(postsResponse.value);
}

export default cache(getPostsByCategoryApi);
