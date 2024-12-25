# @zemd/eslint-flat-config

[![npm](https://img.shields.io/npm/v/@zemd/eslint-flat-config?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-flat-config)

- Simple,
- Helps to code with less stress,
- Helps find bugs using only necessary rules,
- If needed includes additional configs for 3d party libraries out of the box,
- Configurable,
- **DOES NOT** sort imports,
- Works with eslint v9+

## Usage

```sh
npm install --save-dev eslint @zemd/eslint-flat-config
bun add --dev eslint @zemd/eslint-flat-config
# see more https://eslint.org/docs/latest/use/getting-started#manual-set-up
```

## Configuration

```typescript
// eslint.config.js
const { createESlintConfig } = require("@zemd/eslint-flat-config");
export default [
  {
    ignores: [".next/**", ".turbo/**", "node_modules/**"],
  },
  ...createESlintConfig({
    useNextjs: true,
    useTailwind: true,
    useTurbo: true,
  }),
];
```

<!-- prettier-ignore -->
> [!NOTE]
> All groups of rules are named, so you can filter out by name if you want to disable some of the rules.

<!-- prettier-ignore -->
> [!NOTE]
> All optional rules are disabled by default. If you need you should explicitly enable it within `createESlintConfig({ ... })` options.

### Debug your rules

Debug your rules locally using [`@eslint/config-inspector`](https://github.com/eslint/config-inspector) package.

```bash
npx @eslint/config-inspector@latest
# or bunx @eslint/config-inspector@latest
```

## Goal

The purpose of this package is to develop confidently without pressure from tools and too strict rules, but at the same time, try to make sure that tools help you not to shoot in your foot.

Some key points behind this package include:

- developer should not be blocked by the tool and should be able to use language features,
- no or minimum warnings, without compromises, just errors that don't mess up output (still can be exist since recommended configs can include warnings),
- minimum formatting rules or none, this should be handled by formatter without blocking your flow,
- simple configuration, plug the rules and start working; otherwise, override in your config,
- batteries included by default: typescript, react, nextjs, tailwind, vitest, playwright, storybook etc.
- rules should not force you to use a specific programming style but help you catch bugs

## Rules

### Enabled as recommended by default

- **Recommended** rules from `@eslint/js` (~61 rules),
- Carefully hand-picked additional rules from `@eslint/js` that were not included in the recommended set (~29 rules),
- Carefully hand-picked rules from `eslint-plugin-unicorn` avoiding some style relating rules (~70 rules)
- **Recommended** rules from `eslint-plugin-sonarjs` (~204 rules)
- Typescript support is covered by `typescript-eslint` importing **strict-type-checked** configs and configuring some rules (~73 rules)
- JSX and react.js is supported out of the box by leveraging `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-compiler` and `eslint-plugin-jsx-a11y` (~69 rules)

### Available as optional

- Storybook rules included using `eslint-plugin-storybook` package and `flat/recommended`, `flat/csf` and `flat/csf-strict` (~13 rules)
- **Recommended** and **core-web-vitals** configs from `@next/eslint-plugin-next` (~21 rules)
- **Recommended** rules from `eslint-plugin-playwright` (~24 rules)
- **Recommended** rules from `eslint-plugin-vitest` (~8 rules)
- **Recommended** rules from `eslint-config-turbo` (~1 rule)
- Tailwind **recommended** rules from unofficial `eslint-plugin-tailwindcss` except `tailwindcss/classnames-order`, since the official prettier plugin sorts classes differently. (~8 rules)
- GraphQL `schema-recommended` and `operations-recommended` rules from the `@graphql-eslint/eslint-plugin` (~46 rules)

## Inspirations and alternatives

- [Sheriff](https://www.eslint-config-sheriff.dev/) -- Great set of rules, but with some style restrictions
- [Antfu config](https://github.com/antfu/eslint-config) -- Another great set of rules
- [XO](https://github.com/spence-s/flat-xo) -- Flat version of popular set `xo`, still in beta, includes some restrictive rules that I don't always agree with

## License

The `@zemd/eslint-flat-config` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
