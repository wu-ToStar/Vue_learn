import VueRouter from "vue-router";
import Vue from "vue";

// import Home from "../components/home";
// import About from "../components/about";
// import User from "../components/user";

const Home = () => import("../components/home");
const HomeNews = () => import("../components/homeNews");
const HomeMessage = () => import("../components/homeMessage");
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
    meta: {
      title: "首页"
    },
    children: [
      // {
      //   path: "/",
      //   redirect: "news"
      // },
      {
        path: "news",
        component: HomeNews,
        meta: {
          title: "新闻"
        }
      },
      {
        path: "message",
        component: HomeMessage,
        meta: {
          title: "信息"
        }
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
