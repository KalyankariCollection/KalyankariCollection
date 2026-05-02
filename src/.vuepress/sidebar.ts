import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Wiki",
      icon: "mdi:bookshelf",
      prefix: "wiki/",
      link: "wiki/",
      children: "structure",
    },
  ],
});
