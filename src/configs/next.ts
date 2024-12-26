import { GLOB_SRC_ALL } from "../globs";
import type { Linter } from "eslint";
import nextjs from "@next/eslint-plugin-next";

type NextOptions = {
  enableRefresh: boolean;
};

export default function next({
  enableRefresh = true,
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
      files: [GLOB_SRC_ALL],
      plugins: {
        "@next/next": nextjs,
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
