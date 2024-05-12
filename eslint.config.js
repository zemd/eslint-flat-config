import { createEslintConfig } from "./src/";

export default [
  ...createEslintConfig({
    useStorybook: true,
    useGraphQL: true,
    useLodash: true,
    useNextjs: true,
    usePlaywright: true,
    useTailwind: true,
    useTurbo: true,
    useVitest: true,
  }),
];
