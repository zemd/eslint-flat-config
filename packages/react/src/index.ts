import { GLOB_REACT, GLOB_TS, getWorkspacePackagePaths } from "@zemd/eslint-common";
import type { Linter } from "eslint";
import jsx from "./rules/jsx";
import react19 from "eslint-plugin-react-compiler";
import reactRefresh from "eslint-plugin-react-refresh";
import { isPackageExists } from "local-pkg";
import type { ParserOptions } from "@typescript-eslint/parser";
import typescript from "@zemd/eslint-ts";
import { relative } from "node:path";

export * from "@zemd/eslint-ts";

const REMIX_PACKAGES = [
  "@remix-run/node",
  "@remix-run/react",
  "@remix-run/serve",
  "@remix-run/dev",
  "@react-router/node",
  "@react-router/react",
  "@react-router/serve",
  "@react-router/dev",
];

const REMIX_EXPORT_NAMES = [
  "meta",
  "links",
  "headers",
  "loader",
  "action",
  "clientLoader",
  "clientAction",
  "handle",
  "shouldRevalidate",
];

function detectRefreshRules(
  pkgPath: string,
): { label: string; rules: Linter.RulesRecord } | undefined {
  const paths = [pkgPath];
  const check = (pkg: string) => isPackageExists(pkg, { paths });

  if (check("next")) {
    return { label: "next", rules: reactRefresh.configs.next.rules };
  }

  if (check("vite")) {
    return { label: "vite", rules: reactRefresh.configs.vite.rules };
  }

  if (REMIX_PACKAGES.some(check)) {
    return {
      label: "remix",
      rules: {
        "react-refresh/only-export-components": ["warn", { allowExportNames: REMIX_EXPORT_NAMES }],
      },
    };
  }

  return undefined;
}

function buildAutoRefreshConfigs(workspacePaths: string[], files: string[]): Array<Linter.Config> {
  const cwd = process.cwd();
  const configs: Array<Linter.Config> = [];

  // Base: recommended for all files
  configs.push({
    name: "zemd/react/refresh",
    files,
    rules: reactRefresh.configs.recommended.rules,
  });

  // Per-package overrides for specific frameworks
  for (const pkgPath of workspacePaths) {
    const detected = detectRefreshRules(pkgPath);
    if (!detected) continue;

    const relDir = relative(cwd, pkgPath);
    const scopedFiles = relDir ? files.map((f) => `${relDir}/${f}`) : files;

    configs.push({
      name: `zemd/react/refresh/${detected.label}${relDir ? `/${relDir}` : ""}`,
      files: scopedFiles,
      rules: detected.rules,
    });
  }

  return configs;
}

type ReactOptions = {
  enableRefresh: false | "auto" | keyof typeof reactRefresh.configs;
  enableReact19: boolean;
  files: string[];
  globals: Record<string, "readonly" | "writable" | "off">;
  parserOptions: ParserOptions;
};

export function react({
  enableRefresh = "auto",
  enableReact19 = true,
  files = [GLOB_REACT, GLOB_TS],
  parserOptions,
  ...opts
}: Partial<ReactOptions> = {}): Array<Linter.Config> {
  const paths = getWorkspacePackagePaths();

  const refreshConfigs: Array<Linter.Config> = enableRefresh
    ? enableRefresh === "auto"
      ? buildAutoRefreshConfigs(paths, files)
      : [{ name: "zemd/react/refresh", files, rules: reactRefresh.configs[enableRefresh].rules }]
    : [];

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
        "react-x": {
          version: "detect",
          importSource: "react",
        },
      },
      rules: {
        ...jsx.rules,
        ...(enableReact19
          ? {
              "react-compiler/react-compiler": "error", // from `eslint-plugin-react-compiler` package
            }
          : {}),
      },
    },
    ...refreshConfigs,
  ];
}

export default function all(...params: Parameters<typeof react>): Array<Linter.Config> {
  return [...typescript(), ...react(...params)];
}
