import { type Linter } from "eslint";

import { rules as storybookRules } from "./features/storybook.js";
import { rules as reactjsRules } from "./features/reactjs.js";
import { rules as lodashRules } from "./features/lodash.js";
import { rules as nextjsRules } from "./features/nextjs.js";
import { rules as playwrightRules } from "./features/playwright.js";
import { rules as vitestRules } from "./features/vitest.js";
import { rules as turboRules } from "./features/turbo.js";
import { rules as tailwindRules } from "./features/tailwind.js";
import { rules as typescriptRules } from "./features/typescript.js";
import { rules as recommendedRules } from "./features/recommended.js";
import { rules as stylisticRules } from "./features/stylistic.js";
import { rules as graphqlRules } from "./features/graphql.js";

type CreateEslintConfigOptions = {
  useStorybook: boolean;
  useLodash: boolean;
  useNextjs: boolean;
  usePlaywright: boolean;
  useVitest: boolean;
  useTurbo: boolean;
  useTailwind: boolean;
  useAsFormatter: boolean;
  useGraphQL: boolean;
};

export const createEslintConfig = (
  opts: Partial<CreateEslintConfigOptions>
): Array<Linter.FlatConfig> => {
  const options: CreateEslintConfigOptions = {
    useStorybook: false,
    useLodash: true,
    useNextjs: false,
    usePlaywright: false,
    useVitest: true,
    useTurbo: true,
    useTailwind: false,
    useAsFormatter: false,
    useGraphQL: false,
    ...opts,
  };
  return [
    {
      ignores: [".next/**", ".turbo/**", "node_modules/**"],
    },
    ...recommendedRules,
    ...typescriptRules,
    ...reactjsRules,
    ...(options.useAsFormatter ? stylisticRules : []),
    ...(options.useStorybook ? storybookRules : []),
    ...(options.useLodash ? lodashRules : []),
    ...(options.useNextjs ? nextjsRules : []),
    ...(options.usePlaywright ? playwrightRules : []),
    ...(options.useVitest ? vitestRules : []),
    ...(options.useTurbo ? turboRules : []),
    ...(options.useTailwind ? tailwindRules : []),
    ...(options.useGraphQL ? graphqlRules : []),
  ];
};
