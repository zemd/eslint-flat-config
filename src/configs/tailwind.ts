import type { Linter } from "eslint";
import { GLOB_SRC_ALL } from "../globs.js";
import tailwindcss from "eslint-plugin-tailwindcss";

export default function tailwind(): Array<Linter.Config> {
  const [, recommended] = tailwindcss.configs["flat/recommended"];

  return [
    {
      name: "zemd/tailwindcss/files",
      languageOptions: {
        sourceType: "commonjs",
      },
      files: ["tailwind.config.js", "postcss.config.js"],
    },
    {
      name: "zemd/tailwindcss/rules",
      files: [GLOB_SRC_ALL],
      plugins: { tailwindcss },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...recommended.rules,
        "tailwindcss/classnames-order": "off", // use official prettier configuration instead
      },
    },
  ];
}
