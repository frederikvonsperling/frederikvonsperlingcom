import { TagModel } from "@/entities/tag/model/tag.model";
import CategoryItem from "@/entities/tag/ui/tag-item";
import { css } from "@styled-system/css";
import Link from "next/link";

type Props = {
  tag: TagModel;
  isActive?: boolean;
};

export default function SingleTag({ tag, isActive }: Props) {
  return (
    <Link
      key={tag._id}
      className={css({ display: "block" })}
      href={`/articles/tag/${tag.slug.current}`}
    >
      <CategoryItem tag={tag} isActive={isActive} />
    </Link>
  );
}
