import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

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

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "iconify",
    },


  },
});
