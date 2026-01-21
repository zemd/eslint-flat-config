import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/tailwind.ts"],
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  target: false,
});
