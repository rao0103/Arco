import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "storejs";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login/LoginView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/", // 重定向到首页或其他页面
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loggedIn = store.has("arco_auth");
  if (requiresAuth && !loggedIn) {
    // 需要登录权限且未登录时，重定向到登录页面
    next({ name: "Login" });
  } else if (!requiresAuth && loggedIn) {
    // 不需要登录权限且已登录时，重定向到首页或其他页面
    next();
  } else {
    // 其他情况，正常跳转
    next();
  }
});

export default router;
