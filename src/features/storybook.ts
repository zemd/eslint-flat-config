import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import storybook from "eslint-plugin-storybook";

export const rules: Array<Linter.Config> = [
  //@ts-ignore
  ...storybook.configs["flat/recommended"],
  //@ts-ignore
  ...storybook.configs["flat/csf"],
  //@ts-ignore
  ...storybook.configs["flat/csf-strict"],
  //@ts-ignore
  {
    // enabling support for storybook stories and main config
    name: "storybook-custom:rules",
    files: [`**/*.stories.{${supportedAllFileTypes}}`, `**/*.story.{${supportedAllFileTypes}}`],
    rules: {
      "storybook/csf-component": "error",
      "storybook/hierarchy-separator": "error",
      "storybook/no-redundant-story-name": "error",
      "storybook/prefer-pascal-case": "error",
    },
  },
];
