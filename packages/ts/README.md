# Shared ESLint config for typescript projects

[![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts)
[![Static Badge](https://img.shields.io/badge/%40zemd%2Feslint--config--flat-gray?style=social&logo=github&label=GitHub&labelColor=blue)](https://github.com/zemd/eslint-flat-config)

This package includes a set of ESLint configurations for Typescript projects.

**The package includes**:

| Package                            | Description                                                      | Rules                                                                                                                                                                   | License |
| ---------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `@typescript-eslint/eslint-plugin` | The industry standard for enabling typescript support for ESLint | Carefully hand-picked rules in conjunction with `strict-type-checked` config. Additionally, there are disabled rules for `@eslint/js` that overlap and can make issues. | MIT     |

## Installation

```bash
npm install --save-dev @zemd/eslint-ts
```

## Usage

### Basic Setup

```javascript
// eslint.config.js

import typescript from "@zemd/eslint-ts";
export default [...typescript()];
```

### More Advanced Setup

You can cherry-pick only what you need:

```javascript
// eslint.config.js

import { typescript, javascript, json } from "@zemd/eslint-ts"; // import only typescript config
export default [...typescript(), ...javascript(), ...json()];
```

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

The `@zemd/eslint-ts` is licensed under **Apache-2.0 license** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
