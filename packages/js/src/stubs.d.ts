declare module "@eslint-community/eslint-plugin-eslint-comments";

declare module "module" {
  export function createRequire(url: string | URL): (id: string) => any;
}

interface ImportMeta {
  url: string;
}
