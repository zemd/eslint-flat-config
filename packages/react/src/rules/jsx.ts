import type { Feature } from "@zemd/eslint-common";
import react from "eslint-plugin-react";
import parserTs from "@typescript-eslint/parser";
import a11y from "eslint-plugin-jsx-a11y";
import hooks from "eslint-plugin-react-hooks";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import type { ESLint } from "eslint";
import reactWebApi from "eslint-plugin-react-web-api";

// Possible alternatives to `eslint-plugin-react` plugin:
// - https://github.com/jsx-eslint/eslint-plugin-react
// - https://github.com/rel1cx/eslint-react

export default <Feature>{
  plugins: {
    react,
    "jsx-a11y": a11y,
    "react-hooks": hooks,
    "react-hooks-extra": reactHooksExtra as unknown as ESLint.Plugin,
    "react-web-api": reactWebApi as unknown as ESLint.Plugin,
  },
  parser: parserTs,
  rules: {
    ...react.configs.flat?.recommended?.rules,
    ...react.configs.flat?.["jsx-runtime"]?.rules,
    "react/prop-types": "off", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/no-unstable-nested-components": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    "react/jsx-no-useless-fragment": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    "react/jsx-boolean-value": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-fragments": ["error", "syntax"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    "react/hook-use-state": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    "react/jsx-no-leaked-render": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    "react/iframe-missing-sandbox": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    "react/no-access-state-in-setstate": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    "react/no-this-in-sfc": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    "react/prefer-read-only-props": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    "react/jsx-pascal-case": "error", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    ...a11y.configs.recommended.rules,
    ...hooks.configs.recommended.rules,
    "react-hooks-extra/no-direct-set-state-in-use-effect": "error",
    "react-hooks-extra/no-direct-set-state-in-use-layout-effect": "error",
    "react-hooks-extra/no-unnecessary-use-callback": "error",
    "react-hooks-extra/no-unnecessary-use-memo": "error",
    "react-hooks-extra/no-useless-custom-hooks": "error",
    "react-hooks-extra/prefer-use-state-lazy-initialization": "error",
    // react-web-api recommended rules
    "react-web-api/no-leaked-timeout": "error",
    "react-web-api/no-leaked-interval": "error",
    "react-web-api/no-leaked-event-listener": "error",
    "react-web-api/no-leaked-resize-observer": "error",
  },
};
