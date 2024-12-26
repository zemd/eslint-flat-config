import { type Linter } from "eslint";

import javascript from "./configs/javascript.js";
import typescript from "./configs/typescript.js";
import react from "./configs/react.js";
import storybook from "./configs/storybook.js";
import next from "./configs/next.js";
import playwright from "./configs/playwright.js";
import vitest from "./configs/vitest.js";
import tailwind from "./configs/tailwind.js";
import turbo from "./configs/turbo.js";
import graphql from "./configs/graphql.js";

type CreateConfigOptions = {
  storybook: boolean;
  nextjs: boolean;
  playwright: boolean;
  vitest: boolean;
  turbo: boolean;
  tailwind: boolean;
  graphql: boolean;
  // astro: boolean;
  // svelte: boolean;
  // vue: boolean;
};

export const createConfig = (opts: Partial<CreateConfigOptions> = {}): Array<Linter.Config> => {
  const options: CreateConfigOptions = {
    storybook: false,
    nextjs: false,
    playwright: false,
    vitest: false,
    turbo: false,
    tailwind: false,
    graphql: false,
    // astro: false,
    // svelte: false,
    // vue: false,
    ...opts,
  };
  return [
    ...javascript(),
    ...typescript(),
    ...react(),
    ...(options.storybook ? storybook() : []),
    ...(options.nextjs ? next() : []),
    ...(options.playwright ? playwright() : []),
    ...(options.vitest ? vitest() : []),
    ...(options.turbo ? turbo() : []),
    ...(options.tailwind ? tailwind() : []),
    ...(options.graphql ? graphql() : []),
  ];
};
