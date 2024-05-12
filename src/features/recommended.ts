import type { Linter } from "eslint";

import eslintJsRecommended from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import { unicornRules } from "../rules/unicorn.js";
import { customEslintRules } from "../rules/eslint.js";
import { supportedAllFileTypes } from "../config.js";

const omitDeprecated = () => {
  const recommendedRulesWithoutDeprecated = structuredClone({
    ...eslintJsRecommended.configs.recommended.rules,
  });
  delete recommendedRulesWithoutDeprecated["no-extra-semi"];
  delete recommendedRulesWithoutDeprecated["no-mixed-spaces-and-tabs"];
  return Object.freeze(recommendedRulesWithoutDeprecated);
};

// rules that are applied to all files
export const rules: Array<Linter.FlatConfig> = [
  {
    // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    files: [`**/*.{${supportedAllFileTypes}}`],
    rules: omitDeprecated(),
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
    // applying sonar rules. there are no many rules there, so recommended would be enough
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: { sonarjs },
    // @ts-ignore
    rules: sonarjs.configs.recommended,
  },
];
