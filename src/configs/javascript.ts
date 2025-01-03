import type { Linter } from "eslint";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "../rules/unicorn.js";
import eslint from "../rules/eslint.js";
import { GLOB_SRC } from "../globs.js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import markdown from "@eslint/markdown";
import gitignore from "eslint-config-flat-gitignore";
import globals from "globals";

export default function javascript(): Array<Linter.Config> {
  return [
    gitignore({
      name: "zemd/gitignore/ignores",
    }),
    {
      name: "zemd/javascript/files",
      languageOptions: {
        sourceType: "commonjs",
      },
      files: ["eslint.config.js"],
    },
    {
      name: "zemd/javascript/setup",
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
        sourceType: "module",
      },
    },
    {
      name: "zemd/javascript/rules",
      files: [GLOB_SRC],
      plugins: {
        ...eslint.plugins,
        ...unicorn.plugins,
        sonarjs, // https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules
        "@eslint-community/eslint-comments": comments,
        "@eslint/markdown": markdown,
      },
      rules: {
        ...eslint.rules,
        ...unicorn.rules,
        ...sonarjs.configs.recommended.rules,
        ...comments.configs.recommended.rules,
      },
    },
    {
      // @ts-ignore
      ...markdown.configs?.recommended?.at(0),
      name: "zemd/javascript/rules-markdown",
    },
  ];
}
