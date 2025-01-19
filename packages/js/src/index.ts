import type { Linter } from "eslint";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "./rules/unicorn.js";
import eslint from "./rules/eslint.js";
import { GLOB_SRC } from "@zemd/eslint-common";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import gitignore from "eslint-config-flat-gitignore";
import globals from "globals";

export * from "@zemd/eslint-common";

/**
 * The ECMAScript version of the code being linted.
 */
type EcmaVersion =
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023
  | 2024
  | 2025
  | "latest";

/**
 * The type of JavaScript source code.
 */
type SourceType = "script" | "module" | "commonjs";

type JavascriptOptions = {
  globals: Record<string, "readonly" | "writable" | "off">;
  ecmaVersion: EcmaVersion;
  sourceType: SourceType;
  files: string[];
};

export function javascript({
  ecmaVersion = 2022,
  sourceType = "module",
  files = [GLOB_SRC],
  ...opts
}: Partial<JavascriptOptions> = {}): Array<Linter.Config> {
  const rules: Array<Linter.Config> = [
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
        ecmaVersion,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
          ...opts.globals,
        },
        sourceType,
      },
    },
    {
      name: "zemd/javascript/rules",
      files,
      plugins: {
        ...eslint.plugins,
        ...unicorn.plugins,
        sonarjs, // https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules
        "@eslint-community/eslint-comments": comments,
      },
      rules: {
        ...eslint.rules,
        ...unicorn.rules,
        ...sonarjs.configs.recommended.rules,
        "sonarjs/no-clear-text-protocols": ["off"],
        "sonarjs/no-useless-intersection": ["off"],
        ...comments.configs.recommended.rules,
      },
    },
  ];

  return rules;
}

export default javascript;
