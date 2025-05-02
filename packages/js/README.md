# Shared ESLint config for javascript projects

[![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)
[![Static Badge](https://img.shields.io/badge/%40zemd%2Feslint--config--flat-gray?style=social&logo=github&label=GitHub&labelColor=blue)](https://github.com/zemd/eslint-flat-config)

This package includes a set of ESLint configurations for **JavaScript** projects.

**The package includes**:

| Package                                           | Description                                                                        | Rules                                                                                      | License       |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------- |
| `eslint-config-flat-gitignore`                    | ignores all files from your `.gitignore` file                                      |                                                                                            | MIT           |
| `@eslint/js`                                      | standard ESLint rules                                                              | `recommended` plus hand-picked rules that were not included                                | MIT           |
| `eslint-plugin-unicorn`                           | modern set of rules                                                                | I think pretty opinionated, so I carefully hand-picked rules, avoiding style related rules | MIT           |
| `eslint-plugin-sonarjs`                           | ESLint plugin maintained by Sonar, designed to help developers write Clean Code    | all `recommended` rules minus some disabled for better DX                                  | LGPL-3.0-only |
| `@eslint-community/eslint-plugin-eslint-comments` | additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line) | `recommended` rules                                                                        | MIT           |
| `@eslint/json`                                    | plugin that allows you to natively lint JSON and JSONC                             | `recommended` rules minus the `sort-keys`                                                  | Apache-2.0    |
| `eslint-plugin-regexp`                            | ESLint plugin for finding RegExp mistakes                                          | `recommended` rules                                                                        | MIT           |

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

## You might be also interested in

| Package                                              | Version                                                                                                                                                 | Description                                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`@zemd/eslint-js`](../js/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)                 | JavaScript-only rules.                                                                                                     |
| [`@zemd/eslint-ts`](../ts/README.md)                 | [![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts)                 | TypeScript rules (includes JS rules from @zemd/eslint-js).                                                                 |
| [`@zemd/eslint-react`](../react/README.md)           | [![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react)           | React rules (includes TS rules from `@zemd/eslint-ts` and JS rules from `@zemd/eslint-js`).                                |
| [`@zemd/eslint-rock-stack`](../rock-stack/README.md) | [![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack) | Rules for Fullstack projects that include React.js, GraphQL, Playwright, Tailwind(optional), Turbo, Vitest, and Storybook. |
| [`@zemd/eslint-next`](../next/README.md)             | [![npm](https://img.shields.io/npm/v/@zemd/eslint-next?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-next)             | Rules for Next.js projects (inherits from `@zemd/eslint-rock-stack`).                                                      |

## License

The `@zemd/eslint-js` is licensed under **Apache-2.0 license** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
