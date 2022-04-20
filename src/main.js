import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import "./plugins/base";
import VueYandexMetrika from "vue-yandex-metrika-ts";
import vuetify from "./plugins/vuetify";
Vue.use(router);
Vue.use(store);
Vue.config.productionTip = false;
Vue.prototype.$log = console.log.bind(console);

Vue.use(VueYandexMetrika, {
  id: 88442766,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
}).$mount("#app");
