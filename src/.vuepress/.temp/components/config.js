import { hasGlobalComponent } from "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/kalyankari-collection/node_modules/.pnpm/vuepress-plugin-components@_2699ec08792b53093534a5a4578a23d3/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/kalyankari-collection/node_modules/.pnpm/vuepress-plugin-components@_2699ec08792b53093534a5a4578a23d3/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/kalyankari-collection/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_d7205386f5634b4ba2f8ca6c3b45cb34/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
