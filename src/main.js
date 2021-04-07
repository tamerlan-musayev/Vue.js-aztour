import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import "./plugins/base";
import vuetify from "./plugins/vuetify";
Vue.use(router);
Vue.use(store);
Vue.config.productionTip = false;
Vue.prototype.$log = console.log.bind(console);
new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
}).$mount("#app");
