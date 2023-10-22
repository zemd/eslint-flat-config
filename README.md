# @zemd/eslint-flat-config

[![npm](https://img.shields.io/npm/v/@zemd/eslint-flat-config?color=000&label=)](https://npmjs.com/package/@zemd/eslint-flat-config)

- Easy,
- Helps to code and find bugs with only necessary rules, and less stress,
- Provides everything out of the box,
- **DOES NOT** sort imports,
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)

## Usage

```sh
npm install eslint @zemd/eslint-flat-config --save-dev
```

## Configuration

```typescript
// eslint.config.js
import { config } from "@zemd/eslint-flat-config";
export default [...config];
```

### Debug your rules

A fantastic tool called `eslint-flat-config-viewer` can show all your applied rules, display links to the documentation, and group rules by the provider. I recommend using it to dig deeper into your project's rules.

## Goal

The purpose of this package is to develop confidently without pressure from tools and too strict rules, but at the same time, try to make sure that tools help you not to shoot in your foot.

Some key points behind this package include:

- developer should not be blocked by the tool and should be able to use language features,
- no or minimum warnings, without compromises, just errors that don't mess up output,
- minimum formatting rules or none, this should be handled by formatter without blocking your flow,
- no configuration, plug the rules and start working; otherwise, override in your config,
- batteries included by default: typescript, prettier, react, nextjs, tailwind, vitest, playwright, storybook
- rules should not force you to use a specific programming style but help you catch bugs

## Rules

- Recommended rules from `@eslint/js`,
- **strict-type-checked** and **stylistic-type-checked** rules from `@typescript-eslint/eslint-plugin`
- Additional stylistic rules from `@typescript-eslint/eslint-plugin`
- Recommended rules from `eslint-plugin-sonarjs`
- Carefully hand-picked rules from `eslint-plugin-unicorn`
- Recommended rules from `eslint-plugin-jsx-a11y` and `eslint-plugin-react-hooks`
- Carefully hand-picked rules from `eslint-plugin-react`
- Single rule for **lodash** imports
- Recommended and **core-web-vitals** configs from `@next/eslint-plugin-next`
- Recommended rules from `eslint-plugin-playwright`
- Recommended rules from `eslint-plugin-vitest`
- Recommended rules from `eslint-config-prettier` that turn off rules which overlap with `@typescript-eslint` and prettier
- Recommended rules from `eslint-config-turbo`

## Inspirations and alternatives

 - [Sheriff](https://www.eslint-config-sheriff.dev/) -- Great set of rules, but with some style restrictions
 - [Antfu config](https://github.com/antfu/eslint-config) -- Another great set of rules
 - [XO](https://github.com/spence-s/flat-xo) -- Flat version of popular set `xo`, still in beta, includes some restrictive rules that I don't always agree with

 ## License

 The `@zemd/eslint-flat-config` is licensed under the LGPLv3 license.
