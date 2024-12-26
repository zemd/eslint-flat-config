import type { Linter } from "eslint";
import ts from "../rules/typescript";
import { GLOB_TS, GLOB_TSX } from "../globs";

export default function typescript(): Array<Linter.Config> {
  return [
    {
      // enabling parsing typescript files support
      name: "zemd/typescript/setup",
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          ecmaFeatures: { modules: true },
          project: true,
        },
      },
    },
    {
      name: "zemd/typescript/rules",
      files: [GLOB_TS, GLOB_TSX],
      plugins: ts.plugins,
      rules: ts.rules,
    },
  ];
}
