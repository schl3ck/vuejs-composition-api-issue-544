import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

import App from "./App.vue";
import router from "./router";
import { load } from "@/utils/config";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

load(["config.json"]).then(() => {
  new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount("#app");
});
