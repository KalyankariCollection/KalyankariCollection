import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kalyankari Collection",
  description: "A curated wiki of useful links and resources.",

  theme,

});
