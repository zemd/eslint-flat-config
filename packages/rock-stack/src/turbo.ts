import type { Linter } from "eslint";
import * as plugin from "eslint-plugin-turbo";

type TurboOptions = {
  allowList: string[];
};

export default function turbo({
  allowList = ["^ENV_[A-Z]+$"],
}: Partial<TurboOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/turbo/ignores",
      ignores: ["**/.turbo/**"],
    },
    {
      name: "zemd/turbo/rules",
      files: [`**/turbo.json`],
      plugins: { turbo: plugin },
      rules: {
        ...plugin.configs["flat/recommended"].rules,
        "turbo/no-undeclared-env-vars": [
          "error",
          {
            allowList,
          },
        ],
      },
    },
  ];
}
