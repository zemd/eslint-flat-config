export const JS_FILES = ["js", "mjs", "cjs"] as const;
export const TS_FILES = ["ts", "mts", "cts"] as const;
export const JSX_FILES = ["jsx", "mjsx", "cjsx"] as const;
export const TSX_FILES = ["tsx", "mtsx", "ctsx"] as const;
export const GQL_FILES = ["graphql", "gql"] as const;

export const REACT_FILES = [...JSX_FILES, ...TSX_FILES] as const;
export const SRC_FILES = [...JS_FILES, ...TS_FILES] as const;
export const SRC_ALL_FILES = [...REACT_FILES, ...SRC_FILES] as const;

export const GLOB_SRC = `**/*.{${SRC_FILES.join(",")}}`;
export const GLOB_SRC_ALL = `**/*.{${SRC_ALL_FILES.join(",")}}` as const;

export const GLOB_JS = `**/*.{${JS_FILES.join(",")}}` as const;
export const GLOB_JSX = `**/*.{${JSX_FILES.join(",")}}` as const;

export const GLOB_TS = `**/*.{${TS_FILES.join(",")}}` as const;
export const GLOB_TSX = `**/*.{${TSX_FILES.join(",")}}` as const;

export const GLOB_GQL = `**/*.{${GQL_FILES.join(",")}}` as const;

export const GLOB_REACT = `**/*.{${REACT_FILES.join(",")}}` as const;

export const GLOB_TEST =
  `**/*.{test,spec}.{${SRC_ALL_FILES.join(",")}}` as const;

// Storybook
export const GLOB_MAIN = `.storybook/main.{${SRC_FILES.join(",")}}` as const;
export const GLOB_STORIES =
  `**/*.{stories,story}.{${SRC_ALL_FILES.join(",")}}` as const;

// Node
export const GLOB_NODE_MODULES = "**/node_modules";
