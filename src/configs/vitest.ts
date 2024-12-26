import type { Linter } from "eslint";
import { GLOB_TEST } from "../globs.js";
import plugin from "@vitest/eslint-plugin";

type VitestConfig = {
  files: string[];
  enableTypeChecking: boolean;
};

export default function vitest({
  files = [],
  enableTypeChecking = false,
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
    ...(enableTypeChecking
      ? [
          {
            name: "zemd/vitest/setup",
            files: [GLOB_TEST, ...files],
            settings: {
              vitest: {
                typecheck: true,
              },
            },
            languageOptions: {
              globals: {
                ...plugin.environments.env.globals,
              },
            },
          },
        ]
      : []),
  ];
}
