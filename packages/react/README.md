# @zemd/eslint-react

[![npm](https://img.shields.io/npm/v/@zemd/eslint-react?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-react)

> [!NOTE]
> This package comprises [`@zemd/eslint-ts`](https://npmjs.com/package/@zemd/eslint-ts) and adds its rules by default. However, you can import each set of rules separately.

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

## Installation

```bash
npm install --save-dev @zemd/eslint-react
```

## Usage

```javascript
// eslint.config.js

import react from "@zemd/eslint-react"; // <- this will import all rules including the @zemd/eslint-ts rules
// you can import the react rules separately
// import { react, typescript, javascript } from "@zemd/eslint-react";

export default [...react()];
// export default [...react()];
```

## License

The `@zemd/eslint-react` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
