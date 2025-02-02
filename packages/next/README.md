# @zemd/eslint-next

[![npm](https://img.shields.io/npm/v/@zemd/eslint-next?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-next)

This package includes a set of ESLint configurations for Next.js projects.

**The package includes**:

| Package                    | Description | Rules                                                                                    | License    |
| -------------------------- | ----------- | ---------------------------------------------------------------------------------------- | ---------- |
| `@zemd/eslint-rock`        |             |                                                                                          | Apache 2.0 |
| `@next/eslint-plugin-next` |             | `recommended`, `core-web-vitals` and additional fixes for the `react-refresh` if enabled | MIT        |

## Installation

```bash
npm install --save-dev @zemd/eslint-next
```

## Usage

```javascript
// eslint.config.js

import next from "@zemd/eslint-next";
export default [...next()];
```

## License

The `@zemd/eslint-next` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
