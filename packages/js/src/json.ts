import plugin, { type JSONLanguageOptions } from "@eslint/json";
import {
  GLOB_JSONC_VSCODE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_JSONC_TSCONFIG,
} from "@zemd/eslint-common";
import type { Linter } from "eslint";

type JSONOptions = {
  jsonFiles: string[];
  jsoncFiles: string[];
  jsoncLanguageOptions: JSONLanguageOptions;
  json5Files: string[];
};

export function json({
  jsonFiles = [GLOB_JSON],
  jsoncFiles = [GLOB_JSONC, GLOB_JSONC_TSCONFIG, GLOB_JSONC_VSCODE],
  json5Files = [GLOB_JSON5],
  jsoncLanguageOptions = {},
}: Partial<JSONOptions> = {}): Array<Linter.Config> {
  const rules: Array<Linter.Config> = [
    {
      name: "zemd/json/setup",
      plugins: {
        json: plugin,
      },
    },
    {
      name: "zemd/json/files",
      files: jsonFiles,
      language: "json/json",
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
    {
      name: "zemd/jsonc/files",
      files: jsoncFiles,
      language: "json/jsonc",
      languageOptions: jsoncLanguageOptions as Linter.LanguageOptions,
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
    {
      name: "zemd/json5/files",
      files: json5Files,
      language: "json/json5",
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
  ];

  return rules;
}

export default json;
