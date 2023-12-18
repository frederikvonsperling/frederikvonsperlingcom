/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom", "next/core-web-vitals", "prettier"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "no-html-link-for-pages": "off",
  },
};
