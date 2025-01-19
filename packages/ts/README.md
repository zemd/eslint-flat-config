# @zemd/eslint-ts

[![npm](https://img.shields.io/npm/v/@zemd/eslint-ts?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/eslint-ts)

> [!NOTE]  
> This package comprises `@zemd/eslint-js` and adds its rules by default. However, you can import each set of rules separately.

This package includes a set of ESLint configurations for Typescript projects.

**The package includes**:

| Package                            | Description                                                                    | Rules                                                                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@typescript-eslint/eslint-plugin` | At the moment the industry standard for enabling typescript support for ESLint | carefully hand-picked rules in conjunction with `strict-type-checked` config. Additionally, there are disabled rules for `@eslint/js` that overlap and can make issues. |

## Installation

```bash
npm install --save-dev @zemd/eslint-ts
```

## Usage

```javascript
// eslint.config.js

import typescript from "@zemd/eslint-ts";
export default [...typescript()];
// import { typescript } from "@zemd/eslint-ts"; // import only typescript config
// export default [...typescript()];
```

## License

The `@zemd/eslint-ts` is licensed under the Apache-2.0 license.

## Donate

[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
