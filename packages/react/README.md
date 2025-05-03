# Shared ESLint config for react projects

[![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react)
[![Static Badge](https://img.shields.io/badge/%40zemd%2Feslint--config--flat-gray?style=social&logo=github&label=GitHub&labelColor=blue)](https://github.com/zemd/eslint-flat-config)

This package includes a set of ESLint configurations for React projects.

**The package includes**:

| Package                           | Description                                                            | Rules                                                                                                                              | License |
| --------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `eslint-plugin-react`             | React specific linting rules                                           | `recommended` and `jsx-runtime` rules. Additionally manually selected rules that were not included.                                | MIT     |
| `eslint-plugin-jsx-a11y`          | Accessibility rules for JSX                                            | `recommended` rules.                                                                                                               | MIT     |
| `eslint-plugin-react-hooks`       | Rules for React hooks                                                  | `recommended` rules.                                                                                                               | MIT     |
| `eslint-plugin-react-hooks-extra` | Additional rules for React hooks                                       | `recommended` rules.                                                                                                               | MIT     |
| `eslint-plugin-react-web-api`     | ESLint plugin for React to interact with Web APIs                      | `recommended` rules.                                                                                                               | MIT     |
| `eslint-plugin-react-compiler`    | React 19 specific rules.                                               | At the moment there is only one rule exists.                                                                                       | MIT     |
| `eslint-plugin-react-refresh`     | Validate that your components can safely be updated with Fast Refresh. | configurable option. By default, `recommended` rules and additionally configuration added for `vite`, `remix` and `react router 7` | MIT     |

Additionally, this package includes the [`@zemd/eslint-ts`](https://www.npmjs.com/package/@zemd/eslint-ts) and [`@zemd/eslint-js`](https://www.npmjs.com/package/@zemd/eslint-js) rules.

## Installation

```bash
npm install --save-dev @zemd/eslint-react
```

## Usage

### Basic Setup

```javascript
// eslint.config.js
import react from "@zemd/eslint-react"; // <- this will import all rules including the @zemd/eslint-ts rules

export default [...react()];
```

### More Advanced Setup

You can cherry-pick only what you need:

```javascript
// eslint.config.js
import { react, typescript, javascript, json } from "@zemd/eslint-ts"; // import only typescript config

export default [...react(), ...typescript(), ...javascript(), ...json()];
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

The `@zemd/eslint-react` is licensed under **Apache-2.0 license** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
