import { RouteRecordRaw } from "vue-router";

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/LoginView.vue"),
  },
];
export default constantRoutes;
