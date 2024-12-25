import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import storybook from "eslint-plugin-storybook";

export const rules: Array<Linter.Config> = [
  ...storybook.configs["flat/recommended"],
  ...storybook.configs["flat/csf"],
  ...storybook.configs["flat/csf-strict"],
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
