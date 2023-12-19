import { sanityClient } from "@/shared/sanity-client";
import { ResultAsync, err, ok } from "neverthrow";
import { categorySchema } from "../model/category.model";
import { z } from "zod";
import intoError from "@/shared/api/into-error";
import { cache } from "react";

const query = `
*[_type == "categoryList"] {
    _type,
    _id,
    mainCategory->{
        _type,
        _id,
        title,
        slug,
        description
    },
    categories[]->{
        _type,
        _id,
        slug,
        title,
        description
    }
  }`;

const categoryListSchema = z.object({
  _type: z.literal("categoryList"),
  _id: z.string(),
  mainCategory: categorySchema,
  categories: z.array(categorySchema),
});

/**
 * Get all categories
 */
async function getCategoryListApi() {
  const categoryListResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query)
      .then((categoryList) => z.array(categoryListSchema).parse(categoryList)),
    (error) => intoError(error, "Something went wrong")
  );

  if (categoryListResponse.isErr()) {
    return err(categoryListResponse.error);
  }

  return ok(categoryListResponse.value);
}

export default cache(getCategoryListApi);
