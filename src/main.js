import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/common/init.less";
import api from "./http/api";
import echarts from "echarts";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(element);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
