import getTagsApiCache from "@/entities/tag/api/get-tags.api.cache";
import CategoryItem from "@/entities/tag/ui/tag-item";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";
import Link from "next/link";

export default async function TagsListWidget() {
  const tagsResponse = await getTagsApiCache();

  if (tagsResponse.isErr()) {
    return <p>Failed to get categories: {tagsResponse.error.message}</p>;
  }

  return (
    <div
      className={hstack({
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "2",
      })}
    >
      {tagsResponse.value.map((tag) => {
        return (
          <Link
            key={tag._id}
            className={css({ display: "block" })}
            href={`/articles/tag/${tag.slug.current}`}
          >
            <CategoryItem tag={tag} />
          </Link>
        );
      })}
    </div>
  );
}
