# Shared ESLint config for modern projects

[![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack)
[![Static Badge](https://img.shields.io/badge/%40zemd%2Feslint--config--flat-gray?style=social&logo=github&label=GitHub&labelColor=blue)](https://github.com/zemd/eslint-flat-config)

This package includes a set of ESLint configurations for modern fullstack projects that rock.

**The package includes**:

| Package                         | Description                                                                                                      | Rules                                                                            | License    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| `@zemd/eslint-js`               | Shared ESLint config for JavaScript projects                                                                     |                                                                                  | Apache 2.0 |
| `@zemd/eslint-ts`               | Shared ESLint config for TypeScript projects                                                                     |                                                                                  | Apache 2.0 |
| `@zemd/eslint-react`            | Shared ESLint config for React.js projects                                                                       |                                                                                  | Apache 2.0 |
| `@graphql-eslint/eslint-plugin` | GraphQL ESLint rules                                                                                             | `schema-recommended` and `operations-recommended`                                | MIT        |
| `eslint-plugin-tailwindcss`     | Starting from v1.1.0 the config is **optional** due to Tailwind v4 release, which is not supported by the config | `recommended` excluding **classnames-order**                                     | MIT        |
| `eslint-plugin-turbo`           |                                                                                                                  | `recommended`                                                                    | MIT        |
| `@vitest/eslint-plugin`         |                                                                                                                  | `recommended`                                                                    | MIT        |
| `eslint-plugin-storybook`       |                                                                                                                  | `recommended`, `csf-strict`. The rules are available but not included by default | MIT        |

## Installation

```bash
npm install --save-dev @zemd/eslint-rock-stack
```

## Usage

### Basic Setup

```javascript
// eslint.config.js
import rock, { storybook } from "@zemd/eslint-rock-stack";

export default [...rock(), ...storybook()];
```

### Tailwind v3 support

if you want to use Tailwind config for Tailwind v3, install optional dependency:

```bash
pnpm add -D eslint-plugin-tailwindcss
```

and import the config:

```javascript
import rock from "@zemd/eslint-rock-stack";
import tailwind from "@zemd/eslint-rock-stack/tailwind";

export default [...rock(), ...tailwind()];
```

### More Advanced Setup

```javascript
// eslint.config.js
import { react, graphql, playwright, turbo, vitest, typescript, javascript } from "@zemd/eslint-rock-stack";

export default [...typescript(), javascript(), ...react(), ...graphql(), ...playwright(), ...turbo(), ...vitest()];
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

The `@zemd/eslint-rock-stack` is licensed under **Apache-2.0 license** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
