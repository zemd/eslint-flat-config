import type { Linter } from "eslint";
import { supportedAllFileTypes, supportedJsFileTypes, supportedTsFileTypes } from "../config.js";
import * as storybook from "eslint-plugin-storybook";

export const rules: Array<Linter.FlatConfig> = [
  {
    // enabling support for storybook stories and main config
    files: [
      `**/*.stories.{${supportedAllFileTypes}}`,
      `**/*.story.{${supportedAllFileTypes}}`,
    ],
    plugins: { storybook },
    rules: {
      ...storybook.configs.recommended.overrides[0].rules,
      ...storybook.configs.csf.overrides[0].rules,
      ...storybook.configs["csf-strict"].rules,
      "storybook/csf-component": "error",
      "storybook/hierarchy-separator": "error",
      "storybook/no-redundant-story-name": "error",
      "storybook/prefer-pascal-case": "error",
    },
  },
  {
    files: [
      `**/.storybook/main.{${[...supportedJsFileTypes, ...supportedTsFileTypes].join(",")}}`,
    ],
    plugins: { storybook },
    rules: storybook.configs.recommended.overrides[1].rules,
  }
];