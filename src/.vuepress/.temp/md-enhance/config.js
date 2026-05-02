import CodeDemo from "D:/kalyankari-collection/node_modules/.pnpm/vuepress-plugin-md-enhance@_2e1b78f7d63c807f1e32a16f24a8e857/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/kalyankari-collection/node_modules/.pnpm/vuepress-plugin-md-enhance@_2e1b78f7d63c807f1e32a16f24a8e857/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
