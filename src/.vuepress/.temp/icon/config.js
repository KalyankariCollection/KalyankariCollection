import { hasGlobalComponent } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/kalyankari-collection/node_modules/.pnpm/@vueuse+core@14.1.0_vue@3.5.26/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_98ce0cef2df643409d80189f385bc590/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
