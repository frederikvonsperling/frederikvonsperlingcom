import {
  PortableText,
  PortableTextComponentProps,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import slugify from "slugify";

import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";

import Heading from "@ui/components/heading";

import getArticleBySlugCacheApi from "@/entities/article/api/get-article-by-slug.cache.api";

type Properties = {
  slug: string;
};

export default async function ArticleNavWidget({ slug }: Properties) {
  const articleResponse = await getArticleBySlugCacheApi({ params: { slug } });

  if (articleResponse.isErr()) {
    return <p>Failed to get article: {articleResponse.error.message}</p>;
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
      normal: () => <></>,
      h2: HeadingLink,
      h3: HeadingLink,
    },
  } satisfies PortableTextComponents;

  return (
    <div>
      <Heading element="h3" size="h3" className={css({ mb: "4" })}>
        Content
      </Heading>
      <div className={vstack({ alignItems: "flex-start", gap: "1" })}>
        <PortableText
          value={articleResponse.value.content}
          components={components}
        />
      </div>
    </div>
  );
}
