import { imageUrlBuilder } from "@/shared/sanity-client";
import { PortableTextTypeComponentProps } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityReference } from "@sanity/client";
import Image from "next/image";

export default function ImageType({
  value,
  isInline,
}: PortableTextTypeComponentProps<{
  asset: SanityReference;
  alt: string;
  isInline: boolean;
}>) {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      src={imageUrlBuilder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        width: "100%",
        aspectRatio: width / height,
      }}
    />
  );
}
