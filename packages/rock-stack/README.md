# @zemd/eslint-rock-stack

[![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack)

This package includes a set of ESLint configurations for modern fullstack projects that rock.

**The package includes**:

| Package                         | Description                                                                                              | Rules                                                                            | License    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| `@zemd/eslint-js`               | A bundle that comprises rules for javascript                                                             |                                                                                  | Apache 2.0 |
| `@zemd/eslint-ts`               | A bundle that comprises rules for typescript                                                             |                                                                                  | Apache 2.0 |
| `@zemd/eslint-react`            | A bundle that comprises rules for react                                                                  |                                                                                  | Apache 2.0 |
| `@graphql-eslint/eslint-plugin` | GraphQL ESLint rules                                                                                     | `schema-recommended` and `operations-recommended`                                | MIT        |
| `eslint-plugin-tailwindcss`     | since v1.1.0 the config is **optional** due to Tailwind v4 release, which is not supported by the config | `recommended` excluding **classnames-order**                                     | MIT        |
| `eslint-plugin-turbo`           |                                                                                                          | `recommended`                                                                    | MIT        |
| `@vitest/eslint-plugin`         |                                                                                                          | `recommended`                                                                    | MIT        |
| `eslint-plugin-storybook`       |                                                                                                          | `recommended`, `csf-strict`. The rules are available but not included by default | MIT        |

## Installation

```bash
npm install --save-dev @zemd/eslint-rock-stack
```

## Usage

```javascript
// eslint.config.js

import rock, { storybook } from "@zemd/eslint-rock-stack";
// if you do not want to use default bundle, you can import each configuration separately
// import { react, graphql, playwright, tailwind, turbo, vitest } from "@zemd/eslint-rock-stack";

export default [...rock(), ...storybook()];
```

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

## License

The `@zemd/eslint-rock-stack` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
