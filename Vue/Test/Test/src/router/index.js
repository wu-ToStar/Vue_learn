import VueRouter from "vue-router";
import Vue from "vue";

// import Home from "../components/home";
// import About from "../components/about";
// import User from "../components/user";

const Home = () => import("../components/home");
const HomeNews = () => import("../components/homeNews");
const About = () => import("../components/about");
const User = () => import("../components/user");
const Profile = () => import("../components/profile");

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:userId",
    component: User
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
