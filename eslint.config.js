import { createESLintConfig } from "./src/";

export default [
  ...createESLintConfig({
    useStorybook: true,
    useGraphQL: true,
    useNextjs: true,
    usePlaywright: true,
    useTailwind: true,
    useTurbo: true,
    useVitest: true,
  }),
];
