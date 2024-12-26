import type { Linter } from "eslint";
import plugin from "@graphql-eslint/eslint-plugin";
import { GLOB_GQL } from "../globs";

export default function graphql(): Array<Linter.Config> {
  return [
    {
      name: "zemd/graphql/setup",
      files: [GLOB_GQL],
      plugins: {
        // @ts-ignore
        "@graphql-eslint": plugin,
      },
      languageOptions: {
        parser: plugin.parser,
      },
    },
    {
      name: "zemd/graphql/rules-schema",
      files: [GLOB_GQL],
      ...plugin.configs["flat/schema-recommended"],
    },
    {
      name: "zemd/graphql/rules-operations",
      files: [GLOB_GQL],
      ...plugin.configs["flat/operations-recommended"],
    },
  ];
}
