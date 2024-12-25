import type { Linter } from "eslint";
import * as graphql from "@graphql-eslint/eslint-plugin";

const GQL_FILES = ["**/*.{graphql,gql}"];

export const rules: Array<Linter.Config> = [
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
    ...graphql.configs["flat/schema-recommended"],
  },
  // @ts-ignore
  {
    files: GQL_FILES,
    ...graphql.configs["flat/operations-recommended"],
  },
];
