import type { ESLint, Linter } from "eslint";

export type Feature = {
  plugins: Record<string, ESLint.Plugin>;
  parser?: Linter.Parser;
  rules: Linter.RulesRecord;
};
