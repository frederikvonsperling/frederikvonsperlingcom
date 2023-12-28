import PostCard from "@/entities/post/ui/post-card/post-card";
import { getPosts } from "./get-posts";
import { Grid } from "@styled-system/jsx";
import Box from "@/shared/components/box";

type Props = {
  slug?: string;
};

/**
 * Showing all posts or posts by category
 */
export default async function PostGridWidget({ slug }: Props) {
  const postsResponse = await getPosts({ slug });

  if (postsResponse.isErr()) {
    return <p>Failed to get posts: {postsResponse.error.message}</p>;
  }

  if (postsResponse.value.length === 0) {
    return null;
  }

  return (
    <Box>
      <Grid columns={3} gap={"4"}>
        {postsResponse.value.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Grid>
    </Box>
  );
}
