import type { Linter } from "eslint";
import { GLOB_TEST } from "../globs.js";
import plugin from "eslint-plugin-vitest";

type VitestConfig = {
  files: string[];
};

export default function vitest({
  files = [],
}: Partial<VitestConfig> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/vitest/rules",
      files: [GLOB_TEST, ...files],
      plugins: {
        vitest: plugin,
      },
      rules: plugin.configs.recommended.rules,
    },
  ];
}
