import type { Linter } from "eslint";
import { GLOB_TEST } from "@zemd/eslint-common";
import plugin from "@vitest/eslint-plugin";

type VitestConfig = {
  files: string[];
  enableTypeChecking: boolean;
};

export default function vitest({
  files = [GLOB_TEST],
  enableTypeChecking = true,
}: Partial<VitestConfig> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/vitest/rules",
      files,
      plugins: {
        // @ts-ignore see https://github.com/vitest-dev/eslint-plugin-vitest/issues/737
        vitest: plugin,
      },
      rules: plugin.configs.recommended.rules,
    },
    ...(enableTypeChecking
      ? [
          {
            name: "zemd/vitest/setup",
            files,
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
