import type { Linter } from "eslint";
import { supportedAllFileTypes } from "../config.js";
import lodash from "eslint-plugin-lodash-f";

export const rules: Array<Linter.FlatConfig> = [
  {
    // enabling support for correcting lodash imports
    files: [`**/*.{${supportedAllFileTypes}}`],
    plugins: {
      "lodash-f": lodash,
    },
    rules: {
      "lodash-f/import-scope": ["error", "member"],
    },
  }
];