import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

let _workspacePaths: string[] | undefined;

/**
 * Detects workspace package directories by reading pnpm-workspace.yaml or
 * package.json workspaces field. Returns an array of absolute paths including
 * process.cwd() and all discovered workspace package directories.
 *
 * This is useful for passing as `paths` to `isPackageExists` from `local-pkg`,
 * so that packages installed in workspace sub-packages can be detected when
 * ESLint is run from the monorepo root.
 */
export function getWorkspacePackagePaths(): string[] {
  if (_workspacePaths) return _workspacePaths;

  const cwd = process.cwd();
  const dirs: string[] = [cwd];
  const patterns: string[] = [];

  // Try pnpm-workspace.yaml
  try {
    const content = readFileSync(join(cwd, "pnpm-workspace.yaml"), "utf-8");
    for (const match of content.matchAll(/^\s*-\s*['"]?([^'"#\n]+?)['"]?\s*$/gm)) {
      if (match[1]) patterns.push(match[1].trim());
    }
  } catch {}

  // Try package.json workspaces
  if (patterns.length === 0) {
    try {
      const pkg = JSON.parse(readFileSync(join(cwd, "package.json"), "utf-8"));
      const ws = Array.isArray(pkg.workspaces) ? pkg.workspaces : pkg.workspaces?.packages;
      if (Array.isArray(ws)) patterns.push(...ws);
    } catch {}
  }

  // Expand simple globs (supports trailing /* or /**)
  for (const pattern of patterns) {
    const clean = pattern.replace(/\/?(\*\*|\*)$/, "");
    const base = resolve(cwd, clean);
    if (!existsSync(base)) continue;

    try {
      for (const entry of readdirSync(base, { withFileTypes: true })) {
        if (entry.isDirectory() && !entry.name.startsWith(".")) {
          dirs.push(join(base, entry.name));
        }
      }
    } catch {}
  }

  _workspacePaths = dirs;
  return dirs;
}
