import eslintJsRecommended from "@eslint/js";
import { ESLint, type Linter } from "eslint";
import typescriptParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import unicorn from "eslint-plugin-unicorn";
import * as sonarjs from "eslint-plugin-sonarjs";
import * as storybook from "eslint-plugin-storybook";
import * as react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactAccessibility from "eslint-plugin-jsx-a11y";
import lodash from "eslint-plugin-lodash-f";
import nextjs from "@next/eslint-plugin-next";
import playwright from "eslint-plugin-playwright";
import vitest from "eslint-plugin-vitest";
import eslintPrettier from "eslint-config-prettier";
import * as turbo from "eslint-plugin-turbo";
import tailwindcss from "eslint-plugin-tailwindcss";

const supportedJsFileTypes = ["js", "mjs", "cjs"] as const;
const supportedTsFileTypes = ["ts", "mts", "cts"] as const;
const supportedJsxFileTypes = ["jsx", "mjsx"] as const;
const supportedTsxFileTypes = ["tsx", "mtsx"] as const;

const supportedAllFileTypes = [
  ...supportedJsFileTypes,
  ...supportedTsFileTypes,
  ...supportedJsxFileTypes,
  ...supportedTsxFileTypes,
] as const;

const supportedReactFileTypes = [
  ...supportedJsxFileTypes,
  ...supportedTsxFileTypes,
] as const;

const strictTypescriptRules = typescript.configs["strict-type-checked"]!
  .rules as Linter.RulesRecord;

const stylisticTypescriptRules = typescript.configs["stylistic-type-checked"]!
  .rules as Linter.RulesRecord;

const customTypescriptRules: Linter.RulesRecord = {
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
  "@typescript-eslint/explicit-function-return-type": [
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    "error",
    { allowIIFEs: true },
  ],
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
  ]
};

const customEslintRules: Linter.RulesRecord = {
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
  "prefer-object-has-own": [
    // https://eslint.org/docs/latest/rules/prefer-object-has-own
    "error",
  ],
  "no-constant-binary-expression": [
    // https://eslint.org/docs/latest/rules/no-constant-binary-expression
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

const unicornRules: Linter.RulesRecord = {
  "unicorn/error-message": "error",
  "unicorn/escape-case": "error",
  "unicorn/expiring-todo-comments": "error",
  "unicorn/explicit-length-check": "error",
  "unicorn/new-for-builtins": "error",
  "unicorn/no-abusive-eslint-disable": "error",
  "unicorn/no-array-callback-reference": "error",
  "unicorn/no-array-for-each": "error",
  "unicorn/no-array-method-this-argument": "error",
  "unicorn/no-await-expression-member": "error",
  "unicorn/no-empty-file": "warn",
  "unicorn/no-instanceof-array": "error",
  "unicorn/no-invalid-remove-event-listener": "error",
  "unicorn/no-new-buffer": "error",
  "unicorn/no-this-assignment": "error",
  "unicorn/no-unnecessary-await": "error",
  "unicorn/no-useless-fallback-in-spread": "error",
  "unicorn/no-useless-length-check": "error",
  "unicorn/no-useless-promise-resolve-reject": "error",
  "unicorn/no-useless-spread": "error",
  "unicorn/no-useless-switch-case": "error",
  "unicorn/no-zero-fractions": "error",
  "unicorn/number-literal-case": "error",
  "unicorn/numeric-separators-style": "error",
  "unicorn/prefer-add-event-listener": "error",
  "unicorn/prefer-array-find": "error",
  "unicorn/prefer-array-flat-map": "error",
  "unicorn/prefer-array-flat": "error",
  "unicorn/prefer-at": "error",
  "unicorn/prefer-blob-reading-methods": "error",
  "unicorn/prefer-code-point": "error",
  "unicorn/prefer-date-now": "error",
  "unicorn/prefer-dom-node-append": "error",
  "unicorn/prefer-dom-node-dataset": "error",
  "unicorn/prefer-dom-node-remove": "error",
  "unicorn/prefer-event-target": "error",
  "unicorn/prefer-export-from": "error",
  "unicorn/prefer-keyboard-event-key": "error",
  "unicorn/prefer-logical-operator-over-ternary": "error",
  "unicorn/prefer-modern-dom-apis": "error",
  "unicorn/prefer-modern-math-apis": "error",
  "unicorn/prefer-negative-index": "error",
  "unicorn/prefer-node-protocol": "error",
  "unicorn/prefer-number-properties": "error",
  "unicorn/prefer-optional-catch-binding": "error",
  "unicorn/prefer-prototype-methods": "error",
  "unicorn/prefer-query-selector": "error",
  "unicorn/prefer-reflect-apply": "error",
  "unicorn/prefer-regexp-test": "error",
  "unicorn/prefer-set-size": "error",
  "unicorn/prefer-string-replace-all": "error",
  "unicorn/prefer-string-slice": "error",
  "unicorn/prefer-string-starts-ends-with": "error",
  "unicorn/prefer-string-trim-start-end": "error",
  "unicorn/prefer-type-error": "error",
  "unicorn/relative-url-style": "error",
  "unicorn/require-array-join-separator": "error",
  "unicorn/require-number-to-fixed-digits-argument": "error",
  "unicorn/switch-case-braces": "error",
  "unicorn/text-encoding-identifier-case": "error",
  "unicorn/throw-new-error": "error",
};

const config: Array<Linter.FlatConfig> = [
  {
    // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    rules: eslintJsRecommended.configs.recommended.rules,
  },
  {
    // enabling parsing typescript files support
    files: [
      `**/*.{${[...supportedTsFileTypes, ...supportedTsxFileTypes].join(",")}}`,
    ],
    languageOptions: {
      parser: typescriptParser as Linter.ParserModule,
      parserOptions: {
        ecmaFeatures: { modules: true },
        project: true,
      },
    },
  },
  {
    // enabling typescript rules
    files: [
      `**/*.{${[...supportedTsFileTypes, ...supportedTsxFileTypes].join(",")}}`,
    ],
    plugins: {
      "@typescript-eslint": typescript as unknown as ESLint.Plugin,
    },
    // more about @typescript-eslint/eslint-plugin rules see:
    // - https://typescript-eslint.io/linting/configs#recommended-configurations
    // - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts
    rules: {
      // see possible 'configs' field values:
      // - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/index.ts
      ...stylisticTypescriptRules,
      ...strictTypescriptRules,
      // Custom rules
      ...customTypescriptRules,
    },
  },
  {
    // applying custom eslint rules that are not included into recommended config
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    rules: customEslintRules,
  },
  {
    // applying unicorn rules. recommended is not following idea of the package,
    // so I hand picked some rules that I think are useful
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: { unicorn },
    rules: unicornRules,
  },
  {
    // applying sonar rules. there are no many rules there, so recommended would be enough
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: { sonarjs },
    rules: {
      ...sonarjs?.configs.recommended.rules,
    },
  },
  {
    // enabling support for storybook stories and main config
    files: [
      `**/*.stories.{${supportedAllFileTypes.join(",")}}`,
      `**/*.story.{${supportedAllFileTypes.join(",")}}`,
    ],
    plugins: { storybook },
    rules: {
      ...storybook.configs.recommended.overrides[0].rules,
      ...storybook.configs.csf.overrides[0].rules,
      ...storybook.configs["csf-strict"].rules,
      "storybook/csf-component": "error",
      "storybook/hierarchy-separator": "error",
      "storybook/no-redundant-story-name": "error",
      "storybook/prefer-pascal-case": "error",
    },
  },
  {
    files: [
      `**/.storybook/main.{${[
        ...supportedJsFileTypes,
        ...supportedTsFileTypes,
      ].join(",")}}`,
    ],
    plugins: { storybook },
    rules: storybook.configs.recommended.overrides[1].rules,
  },
  {
    // enabling support for react
    files: [`**/*.{${supportedReactFileTypes.join(",")}}`],
    plugins: {
      react,
    },
    languageOptions: {
      parser: typescriptParser as Linter.ParserModule,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        project: true,
        jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      },
    },
  },
  {
    files: [`**/*.{${supportedReactFileTypes.join(",")}}`],
    plugins: { react },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/no-unstable-nested-components": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],
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
    files: [`**/*.{${supportedReactFileTypes.join(",")}}`],
    plugins: { "jsx-a11y": reactAccessibility },
    rules: reactAccessibility.configs.recommended.rules,
  },
  {
    // enabling support for react hooks rules
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    // enabling support for correcting lodash imports
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: {
      "lodash-f": lodash,
    },
    rules: {
      "lodash-f/import-scope": ["error", "member"],
    },
  },
  {
    // enabling support for nextjs
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: {
      "@next/next": nextjs,
    },
    rules: {
      ...nextjs.configs.recommended.rules,
      ...nextjs.configs["core-web-vitals"].rules,
    },
  },
  {
    // enabling support for playwright
    files: [
      `**/*.{${[...supportedJsFileTypes, ...supportedTsFileTypes].join(",")}}`,
    ],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs["flat/recommended"].rules,
    },
  },
  {
    // enabling support for vitest
    files: [
      `**/*.{test,spec}.{${supportedAllFileTypes.join(",")}}`,
      `**/tests/**/*.{${supportedAllFileTypes.join(",")}}`,
      `**/__tests__/**/*.{${supportedAllFileTypes.join(",")}}`,
    ],
    plugins: {
      vitest,
    },
    rules: vitest.configs.recommended.rules,
  },
  // disabling overlapping rules with prettier. NOTE: the config disables `@typescript-eslint/*` rules
  eslintPrettier,
  {
    // forcing curly braces for all blocks, even if prettier would remove them
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    rules: {
      curly: ["error", "all"],
    },
  },
  {
    // enabling support for turbo
    files: [`**/turbo.json`],
    plugin: {turbo},
    rules: {
      ...turbo.configs.recommended.rules,
    }
  },
  {
    // enabling support for tailwindcss
    files: [`**/*.{${supportedAllFileTypes.join(",")}}`],
    plugins: { tailwindcss },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": "off", // use official prettier configuration instead
    },
  }
];

export default config;
