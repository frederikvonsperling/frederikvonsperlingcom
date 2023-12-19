import PostNavWidget from "@/widgets/post/post-nav/post-nav.widget";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";
import Heading from "@ui/components/heading";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function Layout({ children, params }: Props) {
  return (
    <div className={css({ maxW: "5xl", mx: "auto", p: "4" })}>
      <div className={hstack({ alignItems: "stretch", gap: "8" })}>
        <div
          className={css({
            borderRight: "1px solid white",
            flexBasis: "56",
            flexShrink: 0,
          })}
        >
          <div>
            <Heading element="h3" size="h3" className={css({ mb: "2" })}>
              Content
            </Heading>
            <PostNavWidget slug={params.slug} />
          </div>
        </div>
        <article>{children}</article>
      </div>
    </div>
  );
}
