import { css } from "@styled-system/css";
import Badge from "@ui/components/badge";
import PortableText from "@/shared/components/portable-text";
import getPostApi from "@/entities/post/api/get-post.api";

type Props = {
  slug: string;
};

export default async function SinglePostWidget({ slug }: Props) {
  const postResponse = await getPostApi({ params: { slug } });

  if (postResponse.isErr()) {
    return <p>Failed to get post: {postResponse.error.message}</p>;
  }

  const post = postResponse.value;

  return (
    <div className={css({ maxW: "3xl", mx: "auto", px: "4" })}>
      <header className={css({ mb: "8" })}>
        <p className={css({ fontFamily: "code", mb: "4" })}>
          Last updated: {new Date(post._updatedAt).toLocaleDateString("en-US")}
        </p>
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: "5xl",
            mb: "2",
            fontWeight: "extrabold",
            color: "white",
            lineHeight: "tight",
          })}
        >
          {post.title}
        </h1>
        <p
          className={css({
            fontFamily: "body",
            fontWeight: "normal",
            fontSize: "2xl",
          })}
        >
          {post.excerpt}
        </p>
      </header>
      <main>
        <PortableText content={post.content} />
      </main>
      <footer>
        <div className={css({ mt: "8" })}>
          <div className={css({ display: "flex", gap: "2" })}>
            {post.categories.map((category, index) => {
              return <Badge key={category._id}>{category.title}</Badge>;
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
