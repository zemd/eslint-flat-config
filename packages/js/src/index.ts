import type { Linter } from "eslint";
import { createRequire } from "module";
import unicorn from "./rules/unicorn.js";
import eslint from "./rules/eslint.js";
import { GLOB_SRC } from "@zemd/eslint-common";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import gitignore from "eslint-config-flat-gitignore";
import globals from "globals";
import json from "./json.js";
import * as pluginRegex from "eslint-plugin-regexp";
import { isPackageExists } from "local-pkg";

export * from "@zemd/eslint-common";
export { json } from "./json.js";

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

const require = createRequire(import.meta.url);

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
  const enableSonar = isPackageExists("eslint-plugin-sonarjs");
  const sonarjs = enableSonar
    ? (require("eslint-plugin-sonarjs") as typeof import("eslint-plugin-sonarjs"))
    : undefined;

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
          ...globals.es2023,
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
        ...(sonarjs ? { sonarjs } : {}), // https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules
        "@eslint-community/eslint-comments": comments,
        regexp: pluginRegex.configs["flat/recommended"].plugins.regexp,
      },
      rules: {
        ...eslint.rules,
        ...unicorn.rules,
        ...(sonarjs ? sonarjs.configs.recommended.rules : {}),
        ...(sonarjs
          ? {
              "sonarjs/no-clear-text-protocols": ["off"],
              "sonarjs/no-useless-intersection": ["off"],
              "sonarjs/todo-tag": ["off"],
            }
          : {}),
        ...comments.configs.recommended.rules,
        ...pluginRegex.configs["flat/recommended"].rules,
      },
    },
  ];

  return rules;
}

export default function (...params: Parameters<typeof javascript>): Array<Linter.Config> {
  return [...javascript(...params), ...json()];
}
