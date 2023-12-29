import Badge from "@ui/components/badge/badge";
import { TagModel } from "../model/tag.model";

type Props = {
  tag: TagModel;
  isActive?: boolean;
};

export default function TagItem({ tag }: Props) {
  return <Badge data-category-id={tag._id}>{tag.title}</Badge>;
}
