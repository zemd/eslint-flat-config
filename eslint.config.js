import { createESlintConfig } from "./src/";

export default [
  ...createESlintConfig({
    useStorybook: true,
    useGraphQL: true,
    useNextjs: true,
    usePlaywright: true,
    useTailwind: true,
    useTurbo: true,
    useVitest: true,
  }),
];
