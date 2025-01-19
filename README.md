# ESLint configs for modern JavaScript projects

- As simple as flat configs can be, without re-inventing the classic nested config,
- Helps to code with less stress,
- Helps to find bugs using only necessary rules,
- Adds minimum of what you need and allows to configure,
- Includes bundles with _Typescript_, _React.js_, _Playwright_, _Storybook_, _Vitest_,
- **DOES NOT** sort imports and **does not** include formatting/stylistic rules,
- Works with eslint v9+

## Vision

All packages within the monorepo aim to help you develop confidently without pressure from tools and too strict rules. At the same time, it tries to ensure that tools help you avoid shooting yourself in the foot.

Some key points behind these packages include:

- A developer should not be blocked by the tool and should be able to use language features,
- No or minimum _warnings_, just errors that don't mess up output
  - warnings can still exist since exported recommended configs from other packages can include them,
- No formatting rules, this should be handled by formatter without blocking your flow and fighting in semicolon wars,
- Simple configuration, use native js arrays for configuring without additional abstractions,
- Batteries included. Enable when needed: _typescript_, _react_, _nextjs_, _tailwind_, _vitest_, _playwright_, _storybook_ etc.
- Rules should not force you to use a specific programming style but help you catch bugs

## Usage

> [!NOTE]  
> After the version **3.2.0** the package was split onto several packages. Thus, please choose the package you need for your project.

The monorepo includes the following packages:

- [`@zemd/eslint-js`](./packages/js/README.md) [![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js) - The package with the javascript rules only
- [`@zemd/eslint-ts`](./packages/ts/README.md) [![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts) - The package with the typescript rules and javascript rules from the `@zemd/eslint-js`. If you need only typescript you can import just them separately. The package also re-exports the rules from the `@zemd/eslint-js`.
- [`@zemd/eslint-react`](./packages/react/README.md) [![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react) - The package with the react rules and typescript rules from the `@zemd/eslint-ts`. If you need only react you can import just them separately. Additionally, the package re-exports `@zemd/eslint-js` rules.
- [`@zemd/eslint-rock-stack`](./packages/rock-stack/README.md) [![npm](https://img.shields.io/npm/v/@zemd/eslint-rock-stack?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-rock-stack) - The package with the rules for react.js, graphql, playwright, tailwind, turbo, vitest. Additionally, there are rules for storybook, which are not included in the default configuration. Each configuration can be exported separately.
- [`@zemd/next`](./packages/next/README.md) [![npm](https://img.shields.io/npm/v/@zemd/eslint-next?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-next) - The package with the rules for next.js. It inherits everything from the `@zemd/eslint-rock-stack` package. However, you can import only the rules you need.

Each package allows you to configure the rules. Please refer to the typescript definitions for the configuration options.

### Installation

```sh
npm install --save-dev eslint @zemd/eslint-rock-stack
```

### Configuration

```typescript
// eslint.config.js
import { typescript, storybook } from "@zemd/eslint-rock-stack";

export default [...typescript(), ...storybook({ filesMain: ["./packages/storybook/.storybook/main.js"], filesStories: ["./packages/storybook/**/*.{stories,story}.{js,jsx,ts,tsx}"] })];
```

#### Advanced customization

Since each package exports an array of rules, you can easily filter out the rules you want to disable:

```typescript
// eslint.config.js
import rock from "@zemd/eslint-rock-stack";

export default rock().filter((feature) => !feature.name.startsWith("zemd/graphql"));
```

Or you can import exactly what you need from the package:

```typescript
// eslint.config.js
import { javascript, typescript, vitest } from "@zemd/eslint-rock-stack";

export default [...javascript(), ...typescript(), ...vitest()];
```

### Add script for package.json

```bash
npm pkg set scripts.lint="eslint ."
npm pkg set scripts.lint:fix="eslint . --fix"
```

or

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Debug your rules

Debug your rules locally using [`@eslint/config-inspector`](https://github.com/eslint/config-inspector) package.

```bash
npx @eslint/config-inspector@latest
# or bunx @eslint/config-inspector@latest
```

## Inspirations and alternatives

- [Sheriff](https://www.eslint-config-sheriff.dev/) -- Great set of rules, but with some style restrictions
- [Antfu config](https://github.com/antfu/eslint-config) -- Another great set of rules
- [XO](https://github.com/spence-s/flat-xo) -- Flat version of popular set `xo`, still in beta, includes some restrictive rules that I don't always agree with

## License

All the packages within the current monorepo are licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
