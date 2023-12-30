import { cache } from "react";
import { err, ok, ResultAsync } from "neverthrow";
import { z } from "zod";

import intoError from "@/shared/api/into-error";
import { sanityClient } from "@/shared/sanity-client";

import { tagSchema } from "../model/tag.model";

const query = `
*[_type == "tagList"] {
    _type,
    _id,
    mainTag->{
        _type,
        _id,
        title,
        slug,
        description
    },
    tags[]->{
        _type,
        _id,
        slug,
        title,
        description
    }
  }`;

const categoryListSchema = z.object({
  _type: z.literal("tagList"),
  _id: z.string(),
  mainTag: tagSchema,
  tags: z.array(tagSchema),
});

/**
 * Get all categories
 */
async function getTagListsApi() {
  const tagListsResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query)
      .then((tagLists) => z.array(categoryListSchema).parse(tagLists)),
    (error) => intoError(error, "Something went wrong")
  );

  if (tagListsResponse.isErr()) {
    return err(tagListsResponse.error);
  }

  return ok(tagListsResponse.value);
}

export default cache(getTagListsApi);
