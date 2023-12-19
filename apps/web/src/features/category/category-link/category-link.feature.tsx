import Link from "next/link";

type Props = {
  slug: string;
  children: React.ReactNode;
};

export default function CategoryLinkFeature({ slug, children }: Props) {
  return <Link href={`/articles/category/${slug}`}>{children}</Link>;
}
