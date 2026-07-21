import type { Linter } from "eslint";
import { createRequire } from "module";
import unicorn from "./rules/unicorn.js";
import eslint from "./rules/eslint.js";
import { GLOB_SRC } from "@zemd/eslint-common";
import { getWorkspacePackagePaths } from "@zemd/eslint-common";
// import comments from "@eslint-community/eslint-plugin-eslint-comments";
import gitignore from "eslint-config-flat-gitignore";
import json from "./json.js";
import * as pluginRegex from "eslint-plugin-regexp";
import { isPackageExists } from "local-pkg";
import { resolveEnvironment, ecmaVersionToLanguageGlobals } from "./environments.js";
import type {
  EcmaVersion,
  Environment,
  Globals,
  GlobalsRecord,
  LanguageGlobals,
} from "./environments.js";

export * from "@zemd/eslint-common";
export { json } from "./json.js";
export * from "./environments.js";

const require = createRequire(import.meta.url);

/**
 * The type of JavaScript source code.
 */
type SourceType = "script" | "module" | "commonjs";

/**
 * A per-path environment override. Designed for monorepos where different
 * packages target different runtimes (e.g. a Node.js API package and a
 * browser-only UI package). Each entry produces a scoped ESLint config whose
 * `files` narrow the environment to the matching packages.
 */
export type EnvironmentOverride = {
  /**
   * Glob patterns (relative to the ESLint root) this environment applies to,
   * e.g. `["packages/server/**"]`. Use a trailing `/**` to match a whole
   * package directory.
   */
  files: string[];
  /**
   * Named environment preset or a raw globals record.
   *
   * @default "all"
   */
  env?: Environment | Globals;
  /**
   * Additional globals merged on top of this override's environment.
   */
  globals?: GlobalsRecord;
};

type JavascriptOptions = {
  /**
   * The default runtime environment whose globals apply to every linted file
   * that is not captured by an {@link EnvironmentOverride}.
   *
   * @default "all"
   */
  env: Environment | Globals;
  /**
   * The base ECMAScript language globals (`globalThis`, `Promise`,
   * `structuredClone`, …) merged on top of every environment. Accepts a preset
   * name from the `globals` package (`"es2020"`, `"es2024"`, `"builtin"`,
   * `"latest"`, …) or a raw globals record.
   *
   * When omitted, it stays in sync with `ecmaVersion` (e.g. `ecmaVersion: 2024`
   * → `"es2024"`, `ecmaVersion: "latest"` → the newest preset).
   *
   * @default (derived from `ecmaVersion`)
   */
  languageGlobals: LanguageGlobals | Globals;
  /**
   * Additional globals merged on top of every environment (the default `env`
   * as well as each entry in `overrides`).
   */
  globals: GlobalsRecord;
  /**
   * Per-path environment overrides for monorepos. Anything not matched by an
   * override falls back to the default `env`, so each file resolves to exactly
   * one environment.
   *
   * @example
   * ```js
   * javascript({
   *   env: "all",
   *   overrides: [
   *     { files: ["packages/server/**"], env: "node" },
   *     { files: ["packages/web/**"], env: "browser" },
   *   ],
   * });
   * ```
   */
  overrides: EnvironmentOverride[];
  ecmaVersion: EcmaVersion;
  sourceType: SourceType;
  files: string[];
  configSourceType?: SourceType;
};

type BuildGlobalsConfigsOptions = {
  env: Environment | Globals;
  languageGlobals: LanguageGlobals | Globals;
  overrides: EnvironmentOverride[];
  ecmaVersion: EcmaVersion;
  sourceType: SourceType;
  globals?: GlobalsRecord | undefined;
};

/**
 * Builds the `languageOptions` (globals + parser settings) config blocks.
 *
 * The default `env` applies to every file, except paths captured by an entry in
 * `overrides`, which are excluded from the base block via `ignores` so each file
 * resolves to exactly one environment. This is what lets a node-only package
 * avoid inheriting browser globals (and vice versa) in a monorepo.
 */
function buildGlobalsConfigs({
  env,
  languageGlobals,
  overrides,
  ecmaVersion,
  sourceType,
  globals: customGlobals,
}: BuildGlobalsConfigsOptions): Array<Linter.Config> {
  const overrideFiles = overrides.flatMap((override) => {
    return override.files;
  });

  const base: Linter.Config = {
    name: "zemd/javascript/setup",
    languageOptions: {
      ecmaVersion,
      globals: {
        ...resolveEnvironment(env, languageGlobals),
        ...customGlobals,
      },
      sourceType,
    },
    // Carve out override paths so their files receive only the override's
    // environment instead of merging in the default environment's globals.
    ...(overrideFiles.length > 0 ? { ignores: overrideFiles } : {}),
  };

  const scoped: Array<Linter.Config> = overrides.map((override, index) => {
    const label = typeof override.env === "string" ? override.env : "custom";
    return {
      name: `zemd/javascript/setup/${label}#${index + 1}`,
      files: override.files,
      languageOptions: {
        ecmaVersion,
        globals: {
          ...resolveEnvironment(override.env ?? "all", languageGlobals),
          ...customGlobals,
          ...override.globals,
        },
        sourceType,
      },
    };
  });

  return [base, ...scoped];
}

export function javascript({
  ecmaVersion = 2022,
  sourceType = "module",
  files = [GLOB_SRC],
  configSourceType = "module",
  env = "all",
  languageGlobals,
  overrides = [],
  ...opts
}: Partial<JavascriptOptions> = {}): Array<Linter.Config> {
  const paths = getWorkspacePackagePaths();
  const enableSonar = isPackageExists("eslint-plugin-sonarjs", { paths });
  const sonarjs = enableSonar ? require("eslint-plugin-sonarjs") : undefined;

  // Keep the base language globals in sync with the syntax level unless the
  // caller pins them explicitly.
  const resolvedLanguageGlobals = languageGlobals ?? ecmaVersionToLanguageGlobals(ecmaVersion);

  const rules: Array<Linter.Config> = [
    gitignore({
      name: "zemd/gitignore/ignores",
    }),
    {
      name: "zemd/javascript/files",
      languageOptions: {
        sourceType: configSourceType,
      },
      files: ["eslint.config.js"],
    },
    ...buildGlobalsConfigs({
      env,
      languageGlobals: resolvedLanguageGlobals,
      overrides,
      ecmaVersion,
      sourceType,
      globals: opts.globals,
    }),
    {
      name: "zemd/javascript/rules",
      files,
      plugins: {
        ...eslint.plugins,
        ...unicorn.plugins,
        ...(sonarjs ? { sonarjs } : {}), // https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md#rules
        // "@eslint-community/eslint-comments": comments,
        regexp: pluginRegex.configs["flat/recommended"].plugins.regexp,
      },
      rules: {
        ...eslint.rules,
        ...unicorn.rules,
        ...(sonarjs ? sonarjs.configs.recommended.rules : {}),
        ...(sonarjs
          ? {
              "sonarjs/no-clear-text-protocols": ["off"],
              "sonarjs/no-useless-intersection": ["off"],
              "sonarjs/todo-tag": ["off"],
            }
          : {}),
        // ...comments.configs.recommended.rules,
        ...pluginRegex.configs["flat/recommended"].rules,
      },
    },
  ];

  return rules;
}

export default function (...params: Parameters<typeof javascript>): Array<Linter.Config> {
  return [...javascript(...params), ...json()];
}
