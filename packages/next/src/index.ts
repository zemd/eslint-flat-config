import { GLOB_SRC_ALL } from "@zemd/eslint-common";
import type { Linter } from "eslint";
import nextjs from "@next/eslint-plugin-next";
import rock from "@zemd/eslint-rock-stack";
import reactRefresh from "eslint-plugin-react-refresh";

export * from "@zemd/eslint-rock-stack";

type NextSettings = {
  rootDir?: string[];
  [key: string]: unknown;
};

type NextOptions = {
  enableRefresh: boolean;
  files: string[];
  nextSettings: NextSettings;
};

export function next({
  enableRefresh = true,
  files = [GLOB_SRC_ALL],
  nextSettings = {},
}: Partial<NextOptions> = {}): Array<Linter.Config> {
  return [
    {
      name: "zemd/next/ignores",
      ignores: ["**/.next/**"],
    },
    {
      name: "zemd/next/files",
      languageOptions: {
        sourceType: "commonjs",
      },
      files: ["next.config.js"],
    },
    {
      name: "zemd/next/rules",
      files,
      plugins: {
        "@next/next": nextjs,
        "react-refresh": reactRefresh,
      },
      settings: {
        next: {
          ...nextSettings,
        },
      },
      rules: {
        ...nextjs.configs.recommended.rules,
        ...nextjs.configs["core-web-vitals"].rules,
        ...(enableRefresh
          ? {
              "react-refresh/only-export-components": [
                "warn",
                {
                  allowExportNames: [
                    "dynamic",
                    "dynamicParams",
                    "revalidate",
                    "fetchCache",
                    "runtime",
                    "preferredRegion",
                    "maxDuration",
                    "config",
                    "generateStaticParams",
                    "metadata",
                    "generateMetadata",
                    "viewport",
                    "generateViewport",
                  ],
                },
              ],
            }
          : {}),
      },
    },
  ];
}

export default function all(...params: Parameters<typeof next>): Array<Linter.Config> {
  return [...rock(), ...next(...params)];
}
