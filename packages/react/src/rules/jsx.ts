import type { Feature } from "@zemd/eslint-common";
import react from "@eslint-react/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
// import a11y from "eslint-plugin-jsx-a11y";
import hooks from "eslint-plugin-react-hooks";

const feature: Feature = {
  plugins: {
    ...react.configs["recommended-typescript"].plugins,
    // "jsx-a11y": a11y,
    "react-hooks": hooks,
  },
  parser: parserTs,
  rules: {
    ...react.configs["recommended-typescript"].rules,
    // disable @eslint-react rules that conflict with eslint-plugin-react-hooks
    ...react.configs["disable-conflict-eslint-plugin-react-hooks"].rules,
    // ...a11y.configs.recommended.rules,
    ...hooks.configs.recommended.rules,
  },
};

export default feature;
