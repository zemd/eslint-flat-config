import { type Linter } from "eslint";

import { rules as storybookRules } from "./features/storybook.js";
import { rules as reactjsRules } from "./features/reactjs.js";
import { rules as nextjsRules } from "./features/nextjs.js";
import { rules as playwrightRules } from "./features/playwright.js";
import { rules as vitestRules } from "./features/vitest.js";
import { rules as turboRules } from "./features/turbo.js";
import { rules as tailwindRules } from "./features/tailwind.js";
import { rules as typescriptRules } from "./features/typescript.js";
import { rules as recommendedRules } from "./features/recommended.js";
import { rules as graphqlRules } from "./features/graphql.js";

type CreateESlintConfigOptions = {
  useStorybook: boolean;
  useNextjs: boolean;
  usePlaywright: boolean;
  useVitest: boolean;
  useTurbo: boolean;
  useTailwind: boolean;
  useGraphQL: boolean;
};

export const createESlintConfig = (
  opts: Partial<CreateESlintConfigOptions>,
): Array<Linter.Config> => {
  const options: CreateESlintConfigOptions = {
    useStorybook: false,
    useNextjs: false,
    usePlaywright: false,
    useVitest: false,
    useTurbo: false,
    useTailwind: false,
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
    ...(options.useStorybook ? storybookRules : []),
    ...(options.useNextjs ? nextjsRules : []),
    ...(options.usePlaywright ? playwrightRules : []),
    ...(options.useVitest ? vitestRules : []),
    ...(options.useTurbo ? turboRules : []),
    ...(options.useTailwind ? tailwindRules : []),
    ...(options.useGraphQL ? graphqlRules : []),
  ];
};
