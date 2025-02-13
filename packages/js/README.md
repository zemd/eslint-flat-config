# @zemd/eslint-js

[![npm](https://img.shields.io/npm/v/@zemd/eslint-js?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-js)

This package includes a set of ESLint configurations for JavaScript projects.

**The package includes**:

| Package                                           | Description                                                                        | Rules                                                                                      | License       |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------- |
| `eslint-config-flat-gitignore`                    | ignores all files from your `.gitignore` file                                      |                                                                                            | MIT           |
| `@eslint/js`                                      | standard ESLint rules                                                              | `recommended` plus hand-picked rules that were not included                                | MIT           |
| `eslint-plugin-unicorn`                           | modern set of rules                                                                | I think pretty opinionated, so I carefully hand-picked rules, avoiding style related rules | MIT           |
| `eslint-plugin-sonarjs`                           | ESLint plugin maintained by Sonar, designed to help developers write Clean Code    | all `recommended` rules minus some disabled for better DX                                  | LGPL-3.0-only |
| `@eslint-community/eslint-plugin-eslint-comments` | additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line) | `recommended` rules                                                                        | MIT           |
| `@eslint/json`                                    | plugin that allows you to natively lint JSON and JSONC                             | `recommended` rules minus the `sort-keys`                                                  | Apache-2.0    |

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

## License

The `@zemd/eslint-js` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
