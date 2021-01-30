import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../components/home";
import About from "../components/about";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
