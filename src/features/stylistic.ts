import type { Linter } from "eslint";
import StylisticPlugin from "@stylistic/eslint-plugin";
import { supportedAllFileTypes } from "../config.js";

export const rules: Array<Linter.FlatConfig> = [
  {
    //
    // ESLint deprecated of their formatting rules in v8.53.0 and recommended users to migrate to
    // ESLint Stylistic if developers do not want to use additional formatting tools like prettier.
    // read more here: https://eslint.org/blog/2023/10/deprecating-formatting-rules/
    //
    // Personally, I think using prettier is better idea, however it still might make sense to
    // someone in some cases to use ESLint Stylistic.
    //
    plugins: {
      // @ts-ignore
      "@stylistic": StylisticPlugin,
    },
    files: [`**/*.{${supportedAllFileTypes}}`],
    rules: {
      ...StylisticPlugin.configs["recommended-flat"].rules,
      "@stylistic/no-extra-semi": ["error"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/no-multiple-empty-lines": ["off"],
      "@stylistic/no-trailing-spaces": ["off"],
    },
  },
];
