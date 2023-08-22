import Post from "./post";
import { css } from "styled-system/css";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div
      className={css({
        maxW: "2xl",
        marginLeft: "auto",
        marginRight: "auto",
        p: 4,
      })}
    >
      <Post slug={params.slug} />
    </div>
  );
}
