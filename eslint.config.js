import { createConfig } from "./src/";

export default [
  ...createConfig({
    storybook: true,
    graphql: true,
    nextjs: true,
    playwright: true,
    tailwind: true,
    turbo: true,
    vitest: true,
  }),
];
