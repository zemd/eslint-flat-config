import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import vitest from "eslint-plugin-vitest";

export const rules: Array<Linter.Config> = [
  {
    // enabling support for vitest
    files: [
      `**/*.{test,spec}.{${supportedAllFileTypes}}`,
      `**/tests/**/*.{${supportedAllFileTypes}}`,
      `**/__tests__/**/*.{${supportedAllFileTypes}}`,
    ],
    plugins: {
      vitest,
    },
    rules: vitest.configs.recommended.rules,
  },
];
