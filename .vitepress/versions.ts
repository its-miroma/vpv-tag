import { defineVersionsConfig } from "vitepress-versions";

export default defineVersionsConfig({
  mode: "tag",
  includeCheckoutAs: { base: "/" },
});
