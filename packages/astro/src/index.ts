import { GLOB_ASTRO } from "@zemd/eslint-common";
import type { Linter } from "eslint";
import astroPlugin from "eslint-plugin-astro";
import react from "@zemd/eslint-react";

export * from "@zemd/eslint-react";

type AstroOptions = {
  files: string[];
};

export function astro({ files = [GLOB_ASTRO] }: Partial<AstroOptions> = {}): Array<Linter.Config> {
  return [
    ...react(),
    ...astroPlugin.configs["flat/recommended"].map((config) => {
      return {
        ...config,
        name: `zemd/${config.name}`,
        files: config.files ?? files,
      };
    }),
  ];
}

export default function all(...params: Parameters<typeof astro>): Array<Linter.Config> {
  return [...react(), ...astro(...params)];
}
