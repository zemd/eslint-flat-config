import { GLOB_REACT, GLOB_TS } from "@zemd/eslint-common";
import type { Linter } from "eslint";
import jsx from "./rules/jsx";
import react19 from "eslint-plugin-react-compiler";
import reactRefresh from "eslint-plugin-react-refresh";
import { isPackageExists } from "local-pkg";
import type { ParserOptions } from "@typescript-eslint/parser";
import typescript from "@zemd/eslint-ts";

export * from "@zemd/eslint-ts";

type ReactOptions = {
  enableRefresh: false | keyof typeof reactRefresh.configs;
  enableReact19: boolean;
  files: string[];
  globals: Record<string, "readonly" | "writable" | "off">;
  parserOptions: ParserOptions;
};

export function react({
  enableRefresh = "recommended",
  enableReact19 = true,
  files = [GLOB_REACT, GLOB_TS],
  parserOptions,
  ...opts
}: Partial<ReactOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/react/setup",
      files,
      languageOptions: {
        globals: {
          React: "readonly",
          JSX: "readonly",
          ...opts.globals,
        },
        parser: jsx.parser,
        parserOptions: {
          ecmaFeatures: { modules: true, jsx: true },
          project: true,
          jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
          ...parserOptions,
        },
      },
    },
    {
      name: "zemd/react/rules",
      files,
      plugins: {
        ...jsx.plugins,
        "react-refresh": reactRefresh,
        "react-compiler": react19,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        ...jsx.rules,
        ...(enableRefresh ? reactRefresh.configs[enableRefresh].rules : {}),
        ...(enableRefresh
          ? {
              "react-refresh/only-export-components": [
                "warn",
                {
                  allowConstantExport: isPackageExists("vite"),
                  allowExportNames: [
                    ...([
                      // Remix
                      "@remix-run/node",
                      "@remix-run/react",
                      "@remix-run/serve",
                      "@remix-run/dev",
                      // React Router 7
                      "@react-router/node",
                      "@react-router/react",
                      "@react-router/serve",
                      "@react-router/dev",
                    ].some((pkg) => isPackageExists(pkg))
                      ? ["meta", "links", "headers", "loader", "action"]
                      : []),
                  ],
                },
              ],
            }
          : {}),
        ...(enableReact19
          ? {
              "react-compiler/react-compiler": "error", // from `eslint-plugin-react-compiler` package
            }
          : {}),
      },
    },
  ];
}

export default function all(...params: Parameters<typeof react>): Array<Linter.Config> {
  return [...typescript(), ...react(...params)];
}
