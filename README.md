# ESLint Configs for Modern JavaScript Projects

Welcome to the ultimate ESLint setup — no fluff, just what you need to write clean, bug-free code. Say goodbye to unnecessary stress and hello to a smooth dev experience! 🎉

## Why This ESLint Config?

- As simple as flat configs can be — without re-inventing the classic nested config,
- Keeps your codebase clean while reducing friction 🧘,
- Focuses on catching bugs, not dictating your coding style 🐛,
- Minimal but configurable — use only what you need 🔧,
- Bundled support for _TypeScript_, _React.js_, _Playwright_, _Storybook_, _Vitest_, and more,
- **DOES NOT** enforce import sorting or stylistic formatting (that's a job for Prettier 😉),
- Works with eslint v9+

## Usage

> [!NOTE]
> Starting from `@zemd/eslint-flat-config`@v3.2.0, the package was split into multiple packages. Pick what suits your project best! 🛠️

### Available Packages

| Package                                                  | Version                                                                                                                                              | Description                                   | License            |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------ |
| [@zemd/eslint-common](packages/common/README.md)         | [![](https://img.shields.io/npm/v/@zemd/eslint-common?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-common)         | Common utilities for @zemd/eslint-\* packages | Apache License 2.0 |
| [@zemd/eslint-js](packages/js/README.md)                 | [![](https://img.shields.io/npm/v/@zemd/eslint-js?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-js)                 | Shared ESLint config for javascript projects  | Apache License 2.0 |
| [@zemd/eslint-next](packages/next/README.md)             | [![](https://img.shields.io/npm/v/@zemd/eslint-next?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-next)             | Shared ESLint config for next.js projects     | Apache License 2.0 |
| [@zemd/eslint-rock-stack](packages/rock-stack/README.md) | [![](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-rock-stack) | Shared ESLint config for modern projects      | Apache License 2.0 |
| [@zemd/eslint-react](packages/react/README.md)           | [![](https://img.shields.io/npm/v/@zemd/eslint-react?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-react)           | Shared ESLint config for react projects       | Apache License 2.0 |
| [@zemd/eslint-ts](packages/ts/README.md)                 | [![](https://img.shields.io/npm/v/@zemd/eslint-ts?color=%230000ff&labelColor=%23000)](https://www.npmjs.com/package/@zemd/eslint-ts)                 | Shared ESLint config for typescript projects  | Apache License 2.0 |

## Installation

```sh
npm install --save-dev eslint @zemd/eslint-rock-stack
```

## Configuration

### Basic Setup

```typescript
// eslint.config.js
import { typescript, storybook } from "@zemd/eslint-rock-stack";

export default [
  ...typescript(),
  ...storybook({
    filesMain: ["./packages/storybook/.storybook/main.js"],
    filesStories: ["./packages/storybook/**/*.{stories,story}.{js,jsx,ts,tsx}"],
  }),
];
```

### More Advanced Setup

Want to remove specific rules? Just filter them out! 🔥

```typescript
// eslint.config.js
import rock from "@zemd/eslint-rock-stack";

export default rock().filter((feature) => !feature.name.startsWith("zemd/graphql"));
```

Or cherry-pick only what you need:

```typescript
// eslint.config.js
import { javascript, typescript, vitest } from "@zemd/eslint-rock-stack";

export default [...javascript(), ...typescript(), ...vitest()];
```

## Add script for package.json

```bash
npm pkg set scripts.lint="eslint ."
npm pkg set scripts.lint:fix="eslint . --fix"
```

or manually:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Debug your rules

Use [`@eslint/config-inspector`](https://github.com/eslint/config-inspector) to debug your ESLint setup.

```bash
npx @eslint/config-inspector@latest
# or
bunx @eslint/config-inspector@latest
```

## Vision

This monorepo is all about making your life easier — less tool stress, more confidence. Here’s the philosophy behind it:

- 💠 No tool should block you from using language features,
- 💠 Minimal warnings, just meaningful errors that help (not annoy) you.
- 💠 No formatting rules — Prettier handles that so you don’t have to debate semicolons,
- 💠 Simple configuration — just native JS arrays, no unnecessary abstractions,
- 💠 Batteries included 🔋: Enable only what you need (TypeScript, React, Next.js, Tailwind, Vitest, Playwright, Storybook, etc.).
- 💠 Rules guide you to write better code, not force a rigid style.

## Inspirations and alternatives

- [Sheriff](https://www.eslint-config-sheriff.dev/) -- Great, but includes some stylistic restrictions,
- [Antfu config](https://github.com/antfu/eslint-config) -- Another solid choice,
- [XO](https://github.com/spence-s/flat-xo) -- Flat version of `xo`, but still in beta.

## License

The `@zemd/eslint-flat-config` is licensed under **[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)** 😇.

## 💙 💛 Donate

[![](https://img.shields.io/static/v1?color=blue&label=UNITED24&message=support+Ukraine)](https://u24.gov.ua/)
