import type { Linter } from "eslint";
import { GLOB_TEST } from "../globs.js";
import plugin from "eslint-plugin-playwright";

type PlaywrightConfig = {
  files: string[];
};

export default function playwright({
  files = [],
}: Partial<PlaywrightConfig> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/playwright/rules",
      files: [GLOB_TEST, ...files],
      plugins: {
        playwright: plugin,
      },
      rules: {
        ...plugin.configs["flat/recommended"].rules,
      },
    },
  ];
}
