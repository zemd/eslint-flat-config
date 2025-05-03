import next from "@zemd/eslint-next";
import { astro } from "@zemd/eslint-astro";

export default [...next({ enableRefresh: true }), ...astro()];
