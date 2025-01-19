import type { Linter } from "eslint";
import plugin from "@graphql-eslint/eslint-plugin";
import { GLOB_GQL } from "@zemd/eslint-common";

type GraphQlOptions = {
  files: string[];
};

export default function graphql({
  files = [GLOB_GQL],
}: Partial<GraphQlOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/graphql/setup",
      files,
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
      files,
      rules: {
        ...plugin.configs["flat/schema-recommended"].rules,
      },
    },
    {
      name: "zemd/graphql/rules-operations",
      files,
      rules: {
        ...plugin.configs["flat/operations-recommended"].rules,
      },
    },
  ];
}
