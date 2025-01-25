import type { Linter } from "eslint";
import react from "@zemd/eslint-react";
import graphql from "./graphql.js";
import playwright from "./playwright";
// import tailwind from "./tailwind";
import turbo from "./turbo";
import vitest from "./vitest";

export default function fullstack(): Array<Linter.Config> {
  return [
    // better diff comment
    ...react(),
    ...graphql(),
    ...playwright(),
    // ...tailwind(),
    ...turbo(),
    ...vitest(),
  ];
}

export * from "@zemd/eslint-react";
export { default as graphql } from "./graphql";
export { default as playwright } from "./playwright";
// export { default as tailwind } from "./tailwind";
export { default as turbo } from "./turbo";
export { default as vitest } from "./vitest";
export { default as storybook } from "./storybook";
