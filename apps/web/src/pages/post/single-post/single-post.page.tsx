import SinglePostWidget from "@/widgets/post/single-post/single-post.widget";

type Props = {
  slug: string;
};

export default async function SinglePostPage({ slug }: Props) {
  return <SinglePostWidget slug={slug} />;
}
