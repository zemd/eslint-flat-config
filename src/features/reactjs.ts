import type { Linter } from "eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactCompiler from "eslint-plugin-react-compiler";
import reactAccessibility from "eslint-plugin-jsx-a11y";
import { supportedAllFileTypes, supportedReactFileTypes } from "../config.js";
import typescriptParser from "@typescript-eslint/parser";

export const rules: Array<Linter.Config> = [
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
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        project: true,
        jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      },
    },
  },
  {
    name: "react:rules",
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: { react },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.flat?.recommended?.rules,
      ...react.configs.flat?.["jsx-runtime"]?.rules,
      "react/prop-types": "off", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      "react/no-unstable-nested-components": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
      "react/jsx-no-useless-fragment": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
      "react/jsx-boolean-value": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-fragments": ["error", "syntax"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
      "react/hook-use-state": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
      "react/jsx-no-leaked-render": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
      "react/iframe-missing-sandbox": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
      "react/no-access-state-in-setstate": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
      "react/no-this-in-sfc": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
      "react/prefer-read-only-props": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
      "react/jsx-pascal-case": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    },
  },
  {
    // enabling support for react accessibility rules
    name: "jsx-a11y:rules",
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: { "jsx-a11y": reactAccessibility },
    rules: reactAccessibility.configs.recommended.rules,
  },
  {
    // enabling support for react hooks rules
    name: "react-hooks:rules",
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    name: "react-compiler:rules",
    files: [`**/*.{${supportedReactFileTypes}}`],
    plugins: {
      "react-compiler": {
        ...reactCompiler,
        meta: {
          name: "react-compiler",
        },
      },
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },
];
