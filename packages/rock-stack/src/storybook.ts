import { GLOB_MAIN, GLOB_STORIES } from "@zemd/eslint-common";
import type { ESLint, Linter } from "eslint";
import plugin from "eslint-plugin-storybook";

type StorybookOptions = {
  filesMain: string[];
  filesStories: string[];
};

export default function storybook({
  filesMain = [GLOB_MAIN],
  filesStories = [GLOB_STORIES],
}: Partial<StorybookOptions> = {}): Array<Linter.Config> {
  const [, recommendedStories, recommendedMain] = plugin.configs["flat/recommended"];
  const [, csf, csfMain, csfStrict] = plugin.configs["flat/csf-strict"]; // csf-strict includes csf rules
  return [
    {
      // enabling support for storybook main file
      ...recommendedMain,
      name: "zemd/storybook/rules-main",
      plugins: {
        storybook: plugin as unknown as ESLint.Plugin,
      },
      files: filesMain,
      rules: {
        ...recommendedMain?.rules,
        ...csfMain?.rules,
      },
    },
    {
      // enabling support for storybook stories
      ...recommendedStories,
      name: "zemd/storybook/rules-stories",
      plugins: {
        storybook: plugin as unknown as ESLint.Plugin,
      },
      files: filesStories,
      rules: {
        ...recommendedStories?.rules,
        ...csf?.rules,
        ...csfStrict?.rules,
        "storybook/csf-component": "error",
        "storybook/hierarchy-separator": "error",
        "storybook/no-redundant-story-name": "error",
        "storybook/prefer-pascal-case": "error",
      },
    },
  ];
}
