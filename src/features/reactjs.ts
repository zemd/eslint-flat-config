import type { Linter } from "eslint";
import * as react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactAccessibility from "eslint-plugin-jsx-a11y";
import { supportedAllFileTypes, supportedReactFileTypes } from "../config.js";
import typescriptParser from "@typescript-eslint/parser";

const omitJsxA11yDeprecated = () => {
  const reactAccessibilityRulesWithoutDeprecated = structuredClone({
    ...reactAccessibility.configs.recommended.rules,
  });
  delete reactAccessibilityRulesWithoutDeprecated["jsx-a11y/label-has-for"];
  return Object.freeze(reactAccessibilityRulesWithoutDeprecated);
};

export const rules: Array<Linter.FlatConfig> = [
  {
    // enabling support for react
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: {
      react,
    },
    languageOptions: {
      globals: {
        React: "readonly",
        JSX: "readonly",
      },
      parser: typescriptParser as Linter.ParserModule,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        project: true,
        jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      },
    },
  },
  {
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: { react },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off",
      "react/no-unstable-nested-components": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-fragments": ["error", "syntax"],
      "react/hook-use-state": "error",
      "react/jsx-no-leaked-render": "error",
      "react/iframe-missing-sandbox": "error",
      "react/no-access-state-in-setstate": "error",
      "react/no-this-in-sfc": "error",
      "react/prefer-read-only-props": "error",
      "react/jsx-pascal-case": "error",
    },
  },
  {
    // enabling support for react accessibility rules
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: { "jsx-a11y": reactAccessibility },
    rules: omitJsxA11yDeprecated(),
  },
  {
    // enabling support for react hooks rules
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
];
