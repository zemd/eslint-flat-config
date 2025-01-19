import type { Linter } from "eslint";
import * as plugin from "eslint-plugin-turbo";

export default function turbo(): Array<Linter.Config> {
  return [
    {
      name: "zemd/turbo/ignores",
      ignores: ["**/.turbo/**"],
    },
    {
      name: "zemd/turbo/rules",
      files: [`**/turbo.json`],
      plugins: { turbo: plugin },
      rules: plugin.configs["flat/recommended"].rules,
    },
  ];
}
