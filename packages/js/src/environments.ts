import globals from "globals";

/**
 * A single global variable access level accepted by ESLint.
 */
export type GlobalValue = "readonly" | "writable" | "off";

/**
 * A map of global variable names to their access level.
 */
export type GlobalsRecord = Record<string, GlobalValue>;

/**
 * A flat map of global variable names to their access level, matching the shape
 * accepted by ESLint's `languageOptions.globals`.
 *
 * Values may be booleans — as emitted by the `globals` package, where `false`
 * marks a read-only global — or the string access levels `"readonly"`,
 * `"writable"`, and `"off"`. This is a self-contained replacement for ESLint's
 * deprecated eslintrc `Linter.Globals` type.
 */
export type Globals = Record<string, GlobalValue | boolean>;

/**
 * Named runtime environment presets that resolve to a set of globals.
 *
 * - `"node"` — Node.js runtime globals (`process`, `Buffer`, `__dirname`, …).
 * - `"browser"` — browser runtime globals (`window`, `document`, `navigator`, …).
 * - `"all"` — both Node.js and browser globals, for isomorphic/universal code.
 * - `"none"` — no runtime globals, only the base language globals.
 *
 * The base language globals (see {@link LanguageGlobals}) are always included,
 * regardless of the selected environment.
 */
export type Environment = "node" | "browser" | "all" | "none";

/**
 * The ECMAScript syntax version being linted, mirroring ESLint's
 * `languageOptions.ecmaVersion`.
 */
export type EcmaVersion =
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023
  | 2024
  | 2025
  | "latest";

/**
 * Named ECMAScript language-global presets provided by the `globals` package.
 * These define built-ins such as `globalThis`, `Promise`, and `structuredClone`
 * and are always merged on top of the selected {@link Environment}.
 *
 * `"latest"` resolves to the newest preset available (currently `"es2027"`).
 */
export type LanguageGlobals =
  | "builtin"
  | "es3"
  | "es5"
  | "es2015"
  | "es2016"
  | "es2017"
  | "es2018"
  | "es2019"
  | "es2020"
  | "es2021"
  | "es2022"
  | "es2023"
  | "es2024"
  | "es2025"
  | "es2026"
  | "es2027"
  | "latest";

/**
 * Ordered list of ECMAScript year presets, newest last. Used to resolve
 * `"latest"` and to keep language globals in sync with `ecmaVersion`.
 */
const ES_YEAR_PRESETS = [
  "es2015",
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
  "es2022",
  "es2023",
  "es2024",
  "es2025",
  "es2026",
  "es2027",
] as const;

/**
 * The newest language-global preset available (currently `"es2027"`).
 */
const LATEST_LANGUAGE_GLOBALS: (typeof ES_YEAR_PRESETS)[number] =
  ES_YEAR_PRESETS[ES_YEAR_PRESETS.length - 1]!;

/**
 * Maps an ESLint {@link EcmaVersion} to the matching {@link LanguageGlobals}
 * preset so predefined globals stay in sync with the syntax level. Numeric
 * editions (`6`, `7`, …) and year forms (`2015`, `2016`, …) both resolve to the
 * same `es<year>` preset; `"latest"` resolves to the newest available preset.
 */
export function ecmaVersionToLanguageGlobals(ecmaVersion: EcmaVersion): LanguageGlobals {
  if (ecmaVersion === "latest") {
    return LATEST_LANGUAGE_GLOBALS;
  }
  if (ecmaVersion === 3) {
    return "es3";
  }
  if (ecmaVersion === 5) {
    return "es5";
  }

  // Numeric editions count from 6 (ES2015); year forms map to themselves.
  const year = ecmaVersion < 2015 ? ecmaVersion + 2009 : ecmaVersion;
  const preset = `es${year}` as (typeof ES_YEAR_PRESETS)[number];

  return ES_YEAR_PRESETS.includes(preset) ? preset : LATEST_LANGUAGE_GLOBALS;
}

/**
 * Resolves the base language globals — a named {@link LanguageGlobals} preset or
 * a raw globals record — into a flat globals map. Defaults to `"es2023"`;
 * `"latest"` resolves to the newest available preset.
 */
export function resolveLanguageGlobals(language: LanguageGlobals | Globals = "es2023"): Globals {
  if (typeof language === "string") {
    const preset = language === "latest" ? LATEST_LANGUAGE_GLOBALS : language;
    return { ...globals[preset] };
  }

  return { ...language };
}

const NODE_GLOBALS: Globals = {
  ...globals.node,
};

const BROWSER_GLOBALS: Globals = {
  ...globals.browser,
  document: "readonly",
  navigator: "readonly",
  window: "readonly",
};

/**
 * Resolves a named {@link Environment} — or a raw globals record — into a flat
 * globals map suitable for ESLint's `languageOptions.globals`.
 *
 * The base language globals default to `"es2023"` and can be overridden via the
 * `language` argument (a {@link LanguageGlobals} preset or a raw record).
 *
 * Passing a raw record as `env` merges it on top of the base language globals,
 * which is handy for custom runtimes (e.g. web workers, Deno, Bun):
 *
 * ```js
 * import globals from "globals";
 * resolveEnvironment({ ...globals.worker }, "es2024");
 * ```
 */
export function resolveEnvironment(
  env: Environment | Globals = "all",
  language: LanguageGlobals | Globals = "es2023",
): Globals {
  const base = resolveLanguageGlobals(language);

  if (typeof env !== "string") {
    return { ...base, ...env };
  }

  switch (env) {
    case "node": {
      return { ...base, ...NODE_GLOBALS };
    }
    case "browser": {
      return { ...base, ...BROWSER_GLOBALS };
    }
    case "none": {
      return { ...base };
    }
    case "all":
    default: {
      return { ...base, ...NODE_GLOBALS, ...BROWSER_GLOBALS };
    }
  }
}
