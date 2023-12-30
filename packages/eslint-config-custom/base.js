/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort"],
  ignorePatterns: ["**/*.js", "**/*.cjs", "**/dist"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "import/newline-after-import": "error",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [`^(${require("node:module").builtinModules.join("|")})(/|$)`],
              ["^react", "^@?\\w"], // `React` related packages come first.
              ["^@(styled-system)/(.*)$"],
              ["^@(ui)(.*|$)"], // Internal packages.
              ["^@(/shared)/(.*)$"],
              ["^@(/entities)/(.*)$"],
              ["^@(/features)/(.*)$"],
              ["^@(/widgets)/(.*)$"],
              ["^@(/page_views)/(.*)$"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ],
          },
        ],
      },
    },
  ],
};
