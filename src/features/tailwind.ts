import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import tailwindcss from "eslint-plugin-tailwindcss";

const recommended = tailwindcss.configs["flat/recommended"]?.find(
  (c: any) => c.name === "tailwindcss:rules",
)?.rules;

export const rules: Array<Linter.Config> = [
  {
    // enabling support for tailwindcss
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: { tailwindcss },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...recommended,
      "tailwindcss/classnames-order": "off", // use official prettier configuration instead
    },
  },
];
