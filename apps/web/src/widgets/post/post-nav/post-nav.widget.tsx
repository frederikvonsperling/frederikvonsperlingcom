import getPostApi from "@/entities/post/api/get-post.api";
import { PortableText, toPlainText } from "@portabletext/react";
import { css } from "@styled-system/css";
import Heading from "@ui/components/heading";
import Link from "next/link";
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
    <div>
      <Link
        className={css({
          fontFamily: "body",
          color: "white",
          mb: "8",
          display: "block",
        })}
        href="/articles"
      >
        Back to Posts
      </Link>
      <div>
        <Heading element="h3" size="h3" className={css({ mb: "2" })}>
          Content
        </Heading>
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
      </div>
    </div>
  );
}
