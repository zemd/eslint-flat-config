import type { Linter } from "eslint";
import eslint from "@eslint/js";
import type { Feature } from "@zemd/eslint-common";

export const rules: Linter.RulesRecord = {
  "no-promise-executor-return": [
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    "error",
  ],
  "no-unreachable-loop": [
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    "error",
  ],
  "no-caller": [
    // https://eslint.org/docs/latest/rules/no-caller
    "error",
  ],
  "no-extend-native": [
    // https://eslint.org/docs/latest/rules/no-extend-native
    "error",
  ],
  "no-extra-bind": [
    // https://eslint.org/docs/latest/rules/no-extra-bind
    "error",
  ],
  "no-extra-label": [
    // https://eslint.org/docs/latest/rules/no-extra-label
    "error",
  ],
  "no-multi-str": [
    // https://eslint.org/docs/latest/rules/no-multi-str
    "error",
  ],
  "no-new-wrappers": [
    // https://eslint.org/docs/latest/rules/no-new-wrappers
    "error",
  ],
  "no-object-constructor": [
    // https://eslint.org/docs/latest/rules/no-object-constructor
    "error",
  ],
  "no-restricted-properties": [
    // https://eslint.org/docs/latest/rules/no-restricted-properties
    "error",
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
  ],
  "no-octal-escape": [
    // https://eslint.org/docs/latest/rules/no-octal-escape
    "error",
  ],
  "no-proto": [
    // https://eslint.org/docs/latest/rules/no-proto
    "error",
  ],
  "no-sequences": [
    // https://eslint.org/docs/latest/rules/no-sequences
    "error",
    { allowInParentheses: true },
  ],
  "no-void": [
    // https://eslint.org/docs/latest/rules/no-void
    "error",
  ],
  "no-array-constructor": [
    // https://eslint.org/docs/latest/rules/no-array-constructor
    "error",
  ],
  "no-multi-assign": [
    // https://eslint.org/docs/latest/rules/no-multi-assign
    "error",
  ],
  "no-plusplus": [
    // https://eslint.org/docs/latest/rules/no-plusplus
    "error",
  ],
  "no-useless-call": [
    // https://eslint.org/docs/latest/rules/no-useless-call
    "error",
  ],
  "no-unassigned-vars": [
    // https://eslint.org/docs/latest/rules/no-unassigned-vars
    "error",
  ],
  "prefer-object-has-own": [
    // https://eslint.org/docs/latest/rules/prefer-object-has-own
    "error",
  ],
  "no-lone-blocks": [
    // https://eslint.org/docs/latest/rules/no-lone-blocks
    "error",
  ],
  "no-return-assign": [
    // https://eslint.org/docs/latest/rules/no-return-assign
    "error",
    "always",
  ],
  "no-else-return": [
    // https://eslint.org/docs/latest/rules/no-else-return
    "error",
  ],
  "prefer-template": [
    // https://eslint.org/docs/latest/rules/prefer-template
    "error",
  ],
  "no-param-reassign": [
    // https://eslint.org/docs/latest/rules/no-param-reassign
    "error",
  ],
  "array-callback-return": [
    // https://eslint.org/docs/latest/rules/array-callback-return
    "error",
    { allowImplicit: true, checkForEach: true },
  ],
  eqeqeq: [
    // https://eslint.org/docs/latest/rules/eqeqeq
    "error",
  ],
  "prefer-arrow-callback": [
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    "error",
  ],
  "arrow-body-style": [
    // https://eslint.org/docs/latest/rules/arrow-body-style
    "error",
    "always",
  ],
  "no-restricted-syntax": [
    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    "error",
    {
      selector: "TSEnumDeclaration",
      message: "Avoid enums. Use union types instead.",
    },
  ],
  // "no-use-before-define": 0, // we are using the @typescript/eslint version
  // "no-unused-expressions": 0, // we are using the @typescript/eslint version
  // "no-empty-function": 0, // we are using the @typescript/eslint version
  // "dot-notation": 0, // we are using the @typescript/eslint version
  // "no-shadow": 0, // we are using the @typescript/eslint version
  // "default-param-last": 0, // we are using the @typescript/eslint version
};

// see more: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
export default <Feature>{
  plugins: {
    eslint,
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...rules,
  },
};
