import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import nextjs from "@next/eslint-plugin-next";

export const rules: Array<Linter.FlatConfig> = [
  {
    // enabling support for nextjs
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: {
      "@next/next": nextjs,
    },
    rules: {
      ...nextjs.configs.recommended.rules,
      ...nextjs.configs["core-web-vitals"].rules,
    },
  },
];
