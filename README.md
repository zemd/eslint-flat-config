# @zemd/eslint-flat-config

[![npm](https://img.shields.io/npm/v/@zemd/eslint-flat-config?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-flat-config)

- As simple as flat config can be, without re-inventing the classic config,
- Helps to code with less stress,
- Helps to find bugs using only necessary rules,
- Adds minimum of what you need and allows to configure,
- Supports _Typescript_, _React.js_, _Playwright_, _Storybook_, _Vitest_ and others out-of-box,
- **DOES NOT** sort imports and **does not** include formatting/stylistic rules,
- Works with eslint v9+

## Vision

This package aims to help you develop confidently without pressure from tools and too strict rules. At the same time, it tries to ensure that tools help you avoid shooting yourself in the foot.

Some key points behind this package include:

- A developer should not be blocked by the tool and should be able to use language features,
- No or minimum _warnings_, just errors that don't mess up output
  - warnings can still exist since exported recommended configs from other packages can include them,
- No formatting rules, this should be handled by formatter without blocking your flow and fighting in semicolon wars,
- Simple configuration, use native js arrays for configuring without additional abstractions,
- Batteries included. Enable when needed: _typescript_, _react_, _nextjs_, _tailwind_, _vitest_, _playwright_, _storybook_ etc.
- Rules should not force you to use a specific programming style but help you catch bugs

## Usage

### Installation

```sh
npm install --save-dev eslint @zemd/eslint-flat-config
bun add --dev eslint @zemd/eslint-flat-config
```

### Configuration

```typescript
// eslint.config.js
import { createConfig } from "@zemd/eslint-flat-config";

//  If you prefer importing the factory method as default:
// import createConfig from "@zemd/eslint-flat-config";

// Or if you want to import only default configuration:
// import { config } from "@zemd/eslint-flat-config";
// export default config;

export default createConfig();
```

All optional features are **disabled** by default. You can enable features as you need them.

```typescript
// eslint.config.js
import { createConfig } from "@zemd/eslint-flat-config";

export default createConfig({
  storybook: true,
  nextjs: true,
  playwright: true,
  vitest: true,
  turbo: true,
  tailwind: true,
  graphql: true,
});
```

#### Advanced customization

Sometimes you might want to override some internal behavior of the rules provided by the package. It can be achieved by filtering out the array you get from `createConfig` factory method. Each feature rule set is named, so you can identify it easily:

```typescript
// eslint.config.js
import { createConfig } from "@zemd/eslint-flat-config";

const config = createConfig().filter((feature) => {
  return feature.name !== "zemd/react/rules";
});

export default [...config];
```

Or you can import exactly what you need from the package:

```typescript
// eslint.config.js
import { javascript, typescript, vitest } from "@zemd/eslint-flat-config";

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

## Rules

Since `eslint` is a tool for javascript project the core set of rules is `javascript`. I recommend to include at minimum `javascript` rules in your configuration.

### Enabled by default

These set of rules are enabled by default when you call `createConfig()` function without additional parameters. The rules are constructed by composing `javascript()`, `typescript()` and `react()` configs.

- `eslint-config-flat-gitignore` - ignores all files from your .gitignore file
- `@eslint/js` - recommended rules **plus** the ones that were not included
- `eslint-plugin-unicorn` - carefully hand-picked rules avoiding some style relating rules
- `eslint-plugin-sonarjs` - all recommended rules
- `@eslint-community/eslint-plugin-eslint-comments` - additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line)
- `@eslint/markdown` - helpful rules for linting code blocks in markdown files
- `@typescript-eslint/eslint-plugin` - carefully hand-picked rules in conjunction with `strict-type-checked` config.
- `eslint-plugin-react` - recommended rules and some additional rules
- `eslint-plugin-react-hooks` - recommended rules
- `eslint-plugin-jsx-a11y` - recommended rules
- `eslint-plugin-react-hooks-extra` - additional set of rules for react hooks.
  - I am considering also switching from `eslint-plugin-react` to `@eslint-react/eslint-plugin` in the future, but till then can use some of the rules from underlying package.
- `eslint-plugin-react-refresh`
- `eslint-plugin-react-compiler`

### Available as optional

Each feature can be used separately and available in the exports of the package.

- `graphql` - rules from `@graphql-eslint/eslint-plugin` for schema and operations
- `nextjs` - compoud rules from `recommended` and `core-web-vitals` configs from the `@next/eslint-plugin-next` package.
- `playwright` - recommended rules from `eslint-plugin-playwright`
- `storybook` - recommended and csf-strict rules from `eslint-plugin-storybook`
- `tailwind` - recommended rules from `eslint-plugin-tailwindcss` except `tailwindcss/classnames-order`, since the official prettier plugin sorts classes differently.
- `turbo` - recommended rules from `eslint-config-turbo`
- `vitest` - recommended rules from `@vitest/eslint-plugin`

## Inspirations and alternatives

- [Sheriff](https://www.eslint-config-sheriff.dev/) -- Great set of rules, but with some style restrictions
- [Antfu config](https://github.com/antfu/eslint-config) -- Another great set of rules
- [XO](https://github.com/spence-s/flat-xo) -- Flat version of popular set `xo`, still in beta, includes some restrictive rules that I don't always agree with

## License

The `@zemd/eslint-flat-config` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
