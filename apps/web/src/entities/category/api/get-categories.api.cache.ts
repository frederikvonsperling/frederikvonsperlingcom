import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { categorySchema } from "../model/category.model";
import { z } from "zod";
import intoError from "@/shared/api/into-error";
import { cache } from "react";

const query = `
*[_type == "category"] {
    _type,
    _id,
    slug,
    title,
    description
  }`;

/**
 * Get all categories
 */
async function getCategoriesApi() {
  const categoriesResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query)
      .then((categories) => z.array(categorySchema).parse(categories)),
    (error) => intoError(error, "Something went wrong")
  );

  if (categoriesResponse.isErr()) {
    return err(categoriesResponse.error);
  }

  return ok(categoriesResponse.value);
}

export default cache(getCategoriesApi);
