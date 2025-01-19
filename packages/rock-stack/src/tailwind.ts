import type { Linter } from "eslint";
import { GLOB_SRC_ALL } from "@zemd/eslint-common";
import tailwindcss from "eslint-plugin-tailwindcss";

type TailwindOptions = {
  files: string[];
};

export default function tailwind({
  files = [GLOB_SRC_ALL],
}: Partial<TailwindOptions> = {}): Array<Linter.Config> {
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
      files,
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
