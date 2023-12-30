"use client";

import { css } from "@styled-system/css";

type Properties = {
  slug: string;
};

export default function CopyUrl({ slug }: Properties) {
  function copyUrl() {
    navigator.clipboard.writeText(window.location.href + "#" + slug);
  }

  return (
    <button
      onClick={copyUrl}
      className={css({ ml: "2", fontSize: "lg", cursor: "pointer" })}
    >
      #
    </button>
  );
}
