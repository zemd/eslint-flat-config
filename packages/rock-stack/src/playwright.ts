import type { Linter } from "eslint";
import { GLOB_TEST } from "@zemd/eslint-common";
import plugin from "eslint-plugin-playwright";

type PlaywrightConfig = {
  files: string[];
};

export default function playwright({
  files = [GLOB_TEST],
}: Partial<PlaywrightConfig> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/playwright/rules",
      files,
      plugins: {
        playwright: plugin,
      },
      rules: {
        ...plugin.configs["flat/recommended"].rules,
      },
    },
  ];
}
