import type { Linter } from "eslint";
import * as graphql from "@graphql-eslint/eslint-plugin";

const GQL_FILES = ["**/*.{graphql,gql}"];

export const rules: Array<Linter.FlatConfig> = [
  {
    files: GQL_FILES,
    plugins: {
      // @ts-ignore
      "@graphql-eslint": graphql,
    },
    languageOptions: {
      parser: graphql,
    },
  },
  // @ts-ignore
  {
    files: GQL_FILES,
    ...graphql.flatConfigs["schema-recommended"],
  },
  // @ts-ignore
  {
    files: GQL_FILES,
    ...graphql.flatConfigs["operations-recommended"],
  },
];
