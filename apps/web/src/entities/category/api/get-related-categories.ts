import { ResultAsync, err, ok } from "neverthrow";
import {
  categorySchema,
  relatedCategoriesSchema,
} from "../model/category.model";
import { z } from "zod";
import intoError from "@/shared/api/into-error";
import { cache } from "react";
import { sanityClient } from "@/shared/sanity-client";

const query = `
*[_type == "category" && slug.current == $slug] {
    title,
    slug,
    _type,
    description,
    _id,
    "categoryList": *[_type == "categoryList" && references(^._id)] {
      mainCategory->{
        _type,
        _id,
        title,
        description,
        slug
      },
      categories[]->{
        _type,
        _id,
        title,
        description,
        slug
      }
    }
  }`;

type Props = {
  params: {
    slug: string;
  };
};

async function getRelatedCategoriesApi({ params }: Props) {
  const categoriesResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, params)
      .then((categoryList) => relatedCategoriesSchema.parse(categoryList[0])),
    (error) => intoError(error, "Something went wrong")
  );

  if (categoriesResponse.isErr()) {
    return err(categoriesResponse.error);
  }

  return ok(categoriesResponse.value);
}

export default cache(getRelatedCategoriesApi);
