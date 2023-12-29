import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { z } from "zod";
import intoError from "@/shared/api/into-error";
import { cache } from "react";
import { tagSchema } from "../model/tag.model";

const query = `
*[_type == "tag"] {
    _type,
    _id,
    slug,
    title,
    description
  }`;

/**
 * Get all tags
 */
async function getTagsApi() {
  const tagsResponse = await ResultAsync.fromPromise(
    sanityClient.fetch(query).then((tags) => z.array(tagSchema).parse(tags)),
    (error) => intoError(error, "Something went wrong")
  );

  if (tagsResponse.isErr()) {
    return err(tagsResponse.error);
  }

  return ok(tagsResponse.value);
}

export default cache(getTagsApi);
