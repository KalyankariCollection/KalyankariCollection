import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/kalyankari-collection/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_cab3bbe8b4a406017e393433c338c5cc/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+plugin-catalog@2._d2e3cef6b55417580fcc915be17bf7e5/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/kalyankari-collection/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_cab3bbe8b4a406017e393433c338c5cc/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
