import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/panelExample"),
  },
  {
    path: "/example/panel",
    component: () => import("../views/panelExample.vue"),
  },
  {
    path: "/echarts/demo",
    component: () => import("../views/echartsDemo"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
