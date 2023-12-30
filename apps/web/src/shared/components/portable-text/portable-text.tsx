import { PortableText as PortableTextComponent } from "@portabletext/react";

import components from "./components";

type Properties = {
  /**
   * TODO: Type the sanity content
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
};

export default function PortableText({ content }: Properties) {
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
