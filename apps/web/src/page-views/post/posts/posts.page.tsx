import PostGridWidget from "@/widgets/post/posts-grid/posts-grid.widget";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";
import { Suspense } from "react";

type Props = {
  slug?: string;
};

export default async function PostsPage({ slug }: Props) {
  return (
    <div className={css({ maxW: "5xl", mx: "auto" })}>
      <div className={hstack({ alignItems: "stretch", gap: "8" })}>
        <Suspense fallback={<p>Getting posts</p>}>
          <PostGridWidget slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
