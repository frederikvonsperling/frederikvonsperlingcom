import getPostApi from "@/entities/post/api/get-post.api";
import { PortableText, toPlainText } from "@portabletext/react";
import slugify from "slugify";

type Props = {
  slug: string;
};

export default async function PostNavWidget({ slug }: Props) {
  const postResponse = await getPostApi({ params: { slug } });

  if (postResponse.isErr()) {
    return <p>Failed to get post: {postResponse.error.message}</p>;
  }

  return (
    <PortableText
      value={postResponse.value.content}
      components={{
        block: {
          normal: () => null,
          h2: ({ children, value }) => {
            const slug = slugify(toPlainText(value), { lower: true });
            return <a href={`#${slug}`}>{children}</a>;
          },
        },
      }}
    />
  );
}
