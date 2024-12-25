import type { Linter } from "eslint";
import { supportedJsFileTypes, supportedTsFileTypes } from "../config.js";
import playwright from "eslint-plugin-playwright";

export const rules: Array<Linter.Config> = [
  {
    // enabling support for playwright
    name: "playwright:rules",
    files: [`**/*.{${[supportedJsFileTypes, supportedTsFileTypes].join(",")}}`],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs["flat/recommended"].rules,
    },
  },
];
