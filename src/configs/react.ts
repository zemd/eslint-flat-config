import { GLOB_REACT } from "../globs";
import type { Linter } from "eslint";
import jsx from "../rules/jsx";
import react19 from "eslint-plugin-react-compiler";
import reactRefresh from "eslint-plugin-react-refresh";
import { isPackageExists } from "local-pkg";

type ReactOptions = {
  enableRefresh: false | keyof typeof reactRefresh.configs;
  enableReact19: boolean;
};

export default function react({
  enableRefresh = "recommended",
  enableReact19 = true,
}: Partial<ReactOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/react/setup",
      files: [GLOB_REACT],
      languageOptions: {
        globals: {
          React: "readonly",
          JSX: "readonly",
        },
        parser: jsx.parser,
        parserOptions: {
          ecmaFeatures: { modules: true, jsx: true },
          project: true,
          jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
        },
      },
    },
    {
      name: "zemd/react/rules",
      files: [GLOB_REACT],
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
                      "@remix-run/node",
                      "@remix-run/react",
                      "@remix-run/serve",
                      "@remix-run/dev",
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
