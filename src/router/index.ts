import store from "storejs";
import { createRouter, createWebHistory } from "vue-router";
import constantRoutes from "@/router/constant.routes";
import buildDynamicRoutes from "./dynamic.routes";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

const CONSTANT_ROUTES_NUM = router.getRoutes().map((route) => route.path);
router.beforeEach((to, from, next) => {
  if (CONSTANT_ROUTES_NUM.includes(to.fullPath)) {
    next();
  } else if (router.getRoutes().length <= CONSTANT_ROUTES_NUM.length) {
    const menus: TLayout | undefined = store.get("menus");
    //添加动态路由后跳转
    if (Array.isArray(menus)) {
      buildDynamicRoutes(menus);
      next(to.fullPath);
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
