# Shared ESLint config for javascript projects

[![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)
[![Static Badge](https://img.shields.io/badge/%40zemd%2Feslint--config--flat-gray?style=social&logo=github&label=GitHub&labelColor=blue)](https://github.com/zemd/eslint-flat-config)

This package includes a set of ESLint configurations for **JavaScript** projects.

**The package includes**:

| Package                                           | Description                                                                                | Rules                                                                                      | License       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------- |
| `eslint-config-flat-gitignore`                    | ignores all files from your `.gitignore` file                                              |                                                                                            | MIT           |
| `@eslint/js`                                      | standard ESLint rules                                                                      | `recommended` plus hand-picked rules that were not included                                | MIT           |
| `eslint-plugin-unicorn`                           | modern set of rules                                                                        | I think pretty opinionated, so I carefully hand-picked rules, avoiding style related rules | MIT           |
| `eslint-plugin-sonarjs`                           | (Optional) ESLint plugin maintained by Sonar, designed to help developers write Clean Code | all `recommended` rules minus some disabled for better DX (auto-enabled when installed)    | LGPL-3.0-only |
| `@eslint-community/eslint-plugin-eslint-comments` | additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line)         | `recommended` rules                                                                        | MIT           |
| `@eslint/json`                                    | plugin that allows you to natively lint JSON and JSONC                                     | `recommended` rules minus the `sort-keys`                                                  | Apache-2.0    |
| `eslint-plugin-regexp`                            | ESLint plugin for finding RegExp mistakes                                                  | `recommended` rules                                                                        | MIT           |

## Installation

```bash
npm install --save-dev @zemd/eslint-js
```

## Usage

```javascript
// eslint.config.js

import javascript from "@zemd/eslint-js";
export default [...javascript()];
```

## Configuring environments (globals)

By default every file is linted with the `"all"` environment, meaning both
Node.js and browser globals are available (great for isomorphic code). You can
change the default environment with the `env` option:

```javascript
import javascript from "@zemd/eslint-js";

// A browser-only app
export default [...javascript({ env: "browser" })];
```

Available presets:

| `env`       | Globals                                                     |
| ----------- | ----------------------------------------------------------- |
| `"all"`     | Node.js **and** browser globals (default)                   |
| `"node"`    | Node.js globals only (`process`, `Buffer`, `__dirname`, …)  |
| `"browser"` | browser globals only (`window`, `document`, `navigator`, …) |
| `"none"`    | no runtime globals (only the base language globals)         |

The base language globals are always included regardless of the selected
environment, and by default they stay **in sync with `ecmaVersion`** — so
`ecmaVersion: 2024` uses the `es2024` globals, and `ecmaVersion: "latest"` uses
the newest available preset. Override them explicitly with `languageGlobals`
(any preset from the [`globals`](https://npmjs.com/package/globals) package, e.g.
`"es2020"`, `"es2024"`, `"builtin"`, or `"latest"`):

```javascript
import javascript from "@zemd/eslint-js";

// Parse 2024 syntax; globals default to es2024 automatically.
export default [...javascript({ ecmaVersion: 2024 })];

// …or pin the globals independently of the syntax level.
export default [...javascript({ ecmaVersion: 2024, languageGlobals: "latest" })];
```

You can also pass a raw globals record for custom runtimes (e.g. web workers,
Deno, Bun):

```javascript
import globals from "globals";
import javascript from "@zemd/eslint-js";

export default [...javascript({ env: { ...globals.worker } })];
```

### Monorepos: different environments per package

When `@zemd/eslint-js` is used from the **root** of a monorepo, individual
packages often target different runtimes — some are Node.js-only, some are
browser-only, and some are mixed. Use `overrides` to map paths to environments.
Anything not matched by an override falls back to the default `env`, and each
file resolves to **exactly one** environment (a `node` package will not leak
browser globals, and vice versa):

```javascript
import javascript from "@zemd/eslint-js";

export default [
  ...javascript({
    // Fallback for everything not matched below (e.g. shared/isomorphic code).
    env: "all",
    overrides: [
      { files: ["packages/server/**", "apps/api/**"], env: "node" },
      { files: ["packages/ui/**", "apps/web/**"], env: "browser" },
      // Extend a preset with extra globals for a specific package:
      { files: ["packages/worker/**"], env: "node", globals: { EdgeRuntime: "readonly" } },
    ],
  }),
];
```

> Use a trailing `/**` (e.g. `packages/server/**`) so the pattern matches every
> file inside the package directory.

Custom globals passed via the top-level `globals` option are merged into **every**
environment (the default `env` and each override):

```javascript
import javascript from "@zemd/eslint-js";

export default [
  ...javascript({
    globals: { myGlobal: "readonly" },
  }),
];
```

## SonarJS rules (optional)

To stay compliant with enterprise policies that forbid LGPL software, SonarJS rules are **optional**. If you want to use them, install `eslint-plugin-sonarjs` and the rules will be detected and enabled automatically.

## You might be also interested in

| Package                                              | Version                                                                                                                                                 | Description                                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`@zemd/eslint-js`](../js/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)                 | JavaScript-only rules.                                                                                                     |
| [`@zemd/eslint-ts`](../ts/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts)                 | TypeScript rules (includes JS rules from @zemd/eslint-js).                                                                 |
| [`@zemd/eslint-react`](../react/README.md)           | [![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react)           | React rules (includes TS rules from `@zemd/eslint-ts` and JS rules from `@zemd/eslint-js`).                                |
| [`@zemd/eslint-rock-stack`](../rock-stack/README.md) | [![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack) | Rules for Fullstack projects that include React.js, GraphQL, Playwright, Tailwind(optional), Turbo, Vitest, and Storybook. |
| [`@zemd/eslint-next`](../next/README.md)             | [![npm](https://img.shields.io/npm/v/@zemd/eslint-next?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-next)             | Rules for Next.js projects (inherits from `@zemd/eslint-rock-stack`).                                                      |
| [`@zemd/eslint-astro`](../astro/README.md)           | [![npm](https://img.shields.io/npm/v/@zemd/eslint-astro?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-astro)           | Rules for Astro based projects (includes rules `@zemd/eslint-react` by default).                                           |

## License

The `@zemd/eslint-js` is licensed under **Apache-2.0 license** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
