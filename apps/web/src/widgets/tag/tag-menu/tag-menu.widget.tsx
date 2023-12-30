import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";

import getTagListsCacheApi from "@/entities/tag/api/get-tag-lists.cache.api";

import SingleTag from "./single-tag";

type Properties = {
  slug?: string;
};

export default async function TagMenuWidget({ slug }: Properties) {
  const tagListsResponse = await getTagListsCacheApi();

  if (tagListsResponse.isErr()) {
    return <p>Failed to get categories: {tagListsResponse.error.message}</p>;
  }

  return (
    <div className={vstack({ alignItems: "flex-start", lineHeight: "loose" })}>
      <ul>
        {tagListsResponse.value.map((tagList) => {
          return (
            <li key={tagList._id}>
              <SingleTag
                tag={tagList.mainTag}
                isActive={slug === tagList.mainTag.slug.current}
              />
              <ul className={css({ ml: "4" })}>
                {tagList.tags.map((tag) => {
                  return (
                    <li key={tag._id}>
                      <SingleTag
                        tag={tag}
                        isActive={slug === tag.slug.current}
                      />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
