import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["esm"],
  target: false,
});
