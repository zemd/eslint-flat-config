import type { Feature } from "@zemd/eslint-common";
import type { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";

//recommended is not following the idea of this package,
// so I hand picked some rules that I think are useful
export const rules: Linter.RulesRecord = {
  "unicorn/error-message": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
  "unicorn/escape-case": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
  "unicorn/expiring-todo-comments": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
  "unicorn/explicit-length-check": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
  "unicorn/consistent-existence-index-check": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md
  "unicorn/new-for-builtins": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
  "unicorn/no-abusive-eslint-disable": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
  "unicorn/no-array-callback-reference": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
  "unicorn/no-array-for-each": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
  "unicorn/no-array-method-this-argument": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
  "unicorn/no-await-expression-member": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
  "unicorn/no-empty-file": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
  "unicorn/no-invalid-remove-event-listener": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
  "unicorn/no-new-buffer": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
  "unicorn/no-this-assignment": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
  "unicorn/no-unnecessary-await": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
  "unicorn/no-useless-fallback-in-spread": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
  "unicorn/no-useless-length-check": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
  "unicorn/no-useless-promise-resolve-reject": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
  "unicorn/no-useless-spread": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
  "unicorn/no-useless-switch-case": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
  "unicorn/no-zero-fractions": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
  "unicorn/no-single-promise-in-promise-methods": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md
  "unicorn/no-await-in-promise-methods": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md
  "unicorn/no-invalid-fetch-options": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md
  "unicorn/no-negation-in-equality-check": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md
  "unicorn/number-literal-case": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
  "unicorn/numeric-separators-style": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
  "unicorn/prefer-add-event-listener": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
  "unicorn/prefer-array-find": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
  "unicorn/prefer-array-flat-map": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
  "unicorn/prefer-array-flat": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
  "unicorn/prefer-at": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
  "unicorn/prefer-blob-reading-methods": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
  "unicorn/prefer-code-point": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
  "unicorn/prefer-date-now": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
  "unicorn/prefer-dom-node-append": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
  "unicorn/prefer-dom-node-dataset": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
  "unicorn/prefer-dom-node-remove": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
  "unicorn/prefer-event-target": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
  "unicorn/prefer-export-from": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
  "unicorn/prefer-keyboard-event-key": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
  "unicorn/prefer-logical-operator-over-ternary": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
  "unicorn/prefer-modern-dom-apis": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
  "unicorn/prefer-modern-math-apis": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
  "unicorn/prefer-negative-index": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
  "unicorn/prefer-node-protocol": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
  "unicorn/prefer-number-properties": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
  "unicorn/prefer-optional-catch-binding": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
  "unicorn/prefer-prototype-methods": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
  "unicorn/prefer-query-selector": "error", // (???) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
  "unicorn/prefer-reflect-apply": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
  "unicorn/prefer-regexp-test": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
  "unicorn/prefer-set-size": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
  "unicorn/prefer-string-replace-all": "error", // (???) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
  "unicorn/prefer-string-slice": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
  "unicorn/prefer-string-starts-ends-with": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
  "unicorn/prefer-string-trim-start-end": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
  "unicorn/prefer-type-error": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
  "unicorn/prefer-string-raw": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md
  "unicorn/prefer-structured-clone": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md
  "unicorn/prefer-math-min-max": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md
  "unicorn/prefer-global-this": "error", // (Dec 2024) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md
  "unicorn/relative-url-style": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
  "unicorn/require-array-join-separator": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
  "unicorn/require-number-to-fixed-digits-argument": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
  "unicorn/switch-case-braces": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
  "unicorn/text-encoding-identifier-case": "error", // (???) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
  "unicorn/throw-new-error": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
  "unicorn/consistent-date-clone": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md
  "unicorn/no-named-default": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-named-default.md
  // "unicorn/consistent-assert": "error", // this is more stylistic rule, which might annoy. Disabling for now. https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md
  "unicorn/no-instanceof-builtins": ["error", { strategy: "loose" }], // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md
  "unicorn/no-accessor-recursion": "error", // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md
};

export default <Feature>{
  plugins: {
    unicorn,
  },
  rules,
};
