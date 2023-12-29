import { ResultAsync, err, ok } from "neverthrow";
import intoError from "@/shared/api/into-error";
import { cache } from "react";
import { sanityClient } from "@/shared/sanity-client";
import { relatedTagsSchema } from "../model/tag.model";

const query = `
*[_type == "tag" && slug.current == $slug] {
    title,
    slug,
    _type,
    description,
    _id,
    "tagList": *[_type == "tagList" && references(^._id)] {
      mainTag->{
        _type,
        _id,
        title,
        description,
        slug
      },
      tags[]->{
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

async function getRelatedTagsApi({ params }: Props) {
  const tagsResponse = await ResultAsync.fromPromise(
    sanityClient
      .fetch(query, params)
      .then((tagsList) => relatedTagsSchema.parse(tagsList[0])),
    (error) => intoError(error, "Something went wrong")
  );

  if (tagsResponse.isErr()) {
    return err(tagsResponse.error);
  }

  return ok(tagsResponse.value);
}

export default cache(getRelatedTagsApi);
