/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/base", "next"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "no-html-link-for-pages": "off",
  },
};
