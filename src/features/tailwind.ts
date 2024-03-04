import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import tailwindcss from "eslint-plugin-tailwindcss";

export const rules: Array<Linter.FlatConfig> = [
  {
    // enabling support for tailwindcss
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: { tailwindcss },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": "off", // use official prettier configuration instead
    },
  }
];