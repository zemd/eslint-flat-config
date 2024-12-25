import { ESLint, type Linter } from "eslint";
import typescriptParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import { supportedTsFileTypes, supportedTsxFileTypes } from "../config.js";
import { customTypescriptRules, strictTypescriptRules } from "../rules/typescript.js";

// the rules that match specifically to typescript
export const rules: Array<Linter.Config> = [
  {
    // enabling parsing typescript files support
    files: [`**/*.{${[supportedTsFileTypes, supportedTsxFileTypes]}}`],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        project: true,
      },
    },
  },
  {
    // enabling typescript rules
    files: [`**/*.{${[supportedTsFileTypes, supportedTsxFileTypes]}}`],
    plugins: {
      "@typescript-eslint": typescript as unknown as ESLint.Plugin,
    },
    // more about @typescript-eslint/eslint-plugin rules see:
    // - https://typescript-eslint.io/linting/configs#recommended-configurations
    // - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts
    rules: {
      // see possible 'configs' field values:
      // - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/index.ts
      // ...stylisticTypescriptRules,
      ...strictTypescriptRules,
      // Custom rules
      ...customTypescriptRules,
      // disabling default eslint rule and using @typescript-eslint/no-unused-vars instead
      // to avoid unnecessary errors for type definitions
      "no-unused-vars": ["off"],
    },
  },
];
