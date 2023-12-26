import getPostApi from "@/entities/post/api/get-post-by-slug.cache.api";
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";
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

  const HeadingLink = ({
    children,
    value,
  }: PortableTextComponentProps<PortableTextBlock>) => {
    const slug = slugify(toPlainText(value), { lower: true });
    return <a href={`#${slug}`}>{children}</a>;
  };

  const components = {
    block: {
      normal: () => null,
      h2: HeadingLink,
      h3: HeadingLink,
    },
  } satisfies PortableTextComponents;

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
        Back to articles
      </Link>
      <div>
        <Heading element="h3" size="h3" className={css({ mb: "4" })}>
          Content
        </Heading>
        <div className={vstack({ alignItems: "flex-start", gap: "1" })}>
          <PortableText
            value={postResponse.value.content}
            components={components}
          />
        </div>
      </div>
    </div>
  );
}
