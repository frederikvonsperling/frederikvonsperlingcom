import { css } from "@styled-system/css";
import Badge from "@ui/components/badge";
import PortableText from "@/shared/components/portable-text";
import getPostApi from "@/entities/post/api/get-post-by-slug.cache.api";
import Box from "@/shared/components/box";
import { Grid } from "@styled-system/jsx";

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
    <Grid gap={"4"}>
      <Box>
        <header>
          <p className={css({ fontFamily: "code", mb: "4" })}>
            Last updated:{" "}
            {new Date(post._updatedAt).toLocaleDateString("en-US")}
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
      </Box>
      <main>
        <Box>
          <PortableText content={post.content} />
        </Box>
      </main>
      <footer>
        <div className={css({ mt: "8" })}>
          <div className={css({ display: "flex", gap: "2" })}>
            {post.tags?.map((category) => {
              return <Badge key={category._id}>{category.title}</Badge>;
            })}
          </div>
        </div>
      </footer>
    </Grid>
  );
}
