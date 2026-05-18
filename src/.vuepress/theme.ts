import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://kalyankari-collection.pages.dev",

  author: {
    name: "Kalyankari Collection",
    url: "https://github.com/KalyankariCollection/KalyankariCollection",
  },

  logo: "/logo.png",

  repo: "https://github.com/KalyankariCollection/KalyankariCollection",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "",

  displayFooter: true,

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  markdown: {
    align: true,
    attrs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    components: {
      components: ["Badge"],
    },

    icon: {
      assets: "iconify",
    },

    slimsearch: {
      indexContent: true,
    },
  },
});

