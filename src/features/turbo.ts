import type { Linter } from "eslint";
import * as turbo from "eslint-plugin-turbo";

export const rules: Array<Linter.Config> = [
  {
    // enabling support for turbo
    files: [`**/turbo.json`],
    plugins: { turbo },
    rules: turbo.configs["flat/recommended"].rules,
  },
];
