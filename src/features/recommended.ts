import type { Linter } from "eslint";

import js from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import { unicornRules } from "../rules/unicorn.js";
import { customEslintRules } from "../rules/eslint.js";
import { supportedAllFileTypes } from "../config.js";

// rules that are applied to all files
export const rules: Array<Linter.Config> = [
  {
    // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    files: [`**/*.{${supportedAllFileTypes}}`],
    rules: js.configs.recommended.rules,
  },
  {
    // applying custom eslint rules that are not included into recommended config
    files: [`**/*.{${supportedAllFileTypes}}`],
    rules: customEslintRules,
  },
  {
    // applying unicorn rules. recommended is not following the idea of this package,
    // so I hand picked some rules that I think are useful
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: { unicorn },
    rules: unicornRules,
  },
  {
    // applying sonar rules. recommended should be enough, but for more see:
    // https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: { sonarjs },
    rules: sonarjs.configs.recommended.rules,
  },
];
