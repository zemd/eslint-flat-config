import type { ESLint, Linter } from "eslint";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import type { Feature } from "@zemd/eslint-common";

export const rules: Linter.RulesRecord = {
  "@typescript-eslint/consistent-type-exports": [
    // https://typescript-eslint.io/rules/consistent-type-exports/
    "error",
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  "@typescript-eslint/consistent-type-imports": [
    // https://typescript-eslint.io/rules/consistent-type-imports/
    // requires 'emitDecoratorMetadata' in tsconfig to be **true**
    "error",
    { fixStyle: "inline-type-imports" },
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  // "@typescript-eslint/explicit-function-return-type": [
  //   // https://typescript-eslint.io/rules/explicit-function-return-type/
  //   "error",
  //   { allowIIFEs: true },
  // ],
  "@typescript-eslint/explicit-module-boundary-types": [
    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    "error",
  ],
  "@typescript-eslint/method-signature-style": [
    // https://typescript-eslint.io/rules/method-signature-style/
    "error",
  ],
  "@typescript-eslint/no-import-type-side-effects": [
    // https://typescript-eslint.io/rules/no-import-type-side-effects/
    "error",
  ],
  "@typescript-eslint/no-useless-empty-export": [
    // https://typescript-eslint.io/rules/no-useless-empty-export/
    "error",
  ],
  "@typescript-eslint/promise-function-async": [
    // https://typescript-eslint.io/rules/promise-function-async/
    "error",
  ],
  "@typescript-eslint/require-array-sort-compare": [
    // https://typescript-eslint.io/rules/require-array-sort-compare/
    "error",
  ],
  "@typescript-eslint/no-unsafe-call": [
    // https://typescript-eslint.io/rules/no-unsafe-call/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-explicit-any": [
    // https://typescript-eslint.io/rules/no-explicit-any/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-unsafe-return": [
    // https://typescript-eslint.io/rules/no-unsafe-return/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-unsafe-assignment": [
    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-unsafe-member-access": [
    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-unsafe-argument": [
    // https://typescript-eslint.io/rules/no-unsafe-argument/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-empty-object-type": [
    // https://typescript-eslint.io/rules/no-empty-object-type/
    // should not be forced by default, turn on when you really need it
    "off",
  ],
  "@typescript-eslint/no-unnecessary-type-parameters": [
    // should not be forced by default, turn on when you really need it
    "off",
  ],
};

export default <Feature>{
  plugins: {
    "@typescript-eslint": plugin as unknown as ESLint.Plugin,
  },
  parser,
  // more about @typescript-eslint/eslint-plugin rules see:
  // - https://typescript-eslint.io/linting/configs#recommended-configurations
  // - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts
  rules: {
    ...(plugin.configs["strict-type-checked"]!.rules as Linter.RulesRecord),
    ...rules,
    // disabling default eslint rule and using @typescript-eslint/no-unused-vars instead
    // to avoid unnecessary errors for type definitions
    "no-unused-vars": ["off"],
    "no-dupe-class-members": ["off"],
  },
};
