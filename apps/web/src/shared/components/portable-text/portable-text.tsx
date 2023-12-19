import { PortableText as PortableTextComponent } from "@portabletext/react";
import components from "./components";

type Props = {
  /**
   * TODO: Type the sanity content
   */
  content: any;
};

export default function PortableText({ content }: Props) {
  return (
    <PortableTextComponent
      value={content}
      onMissingComponent={(message, options) => {
        console.warn(message, options);
      }}
      components={components}
    />
  );
}
