import { CodeTabs } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+plugin-markdown-t_2dcd5c192e212c0339ab872fadb1e694/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+plugin-markdown-t_2dcd5c192e212c0339ab872fadb1e694/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+plugin-markdown-t_2dcd5c192e212c0339ab872fadb1e694/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
