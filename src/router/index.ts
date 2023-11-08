import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    meta: { title: "Home" },
    component: BasicLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "欢迎" },
        component: () => import("@/views/index.vue"),
      },
      {
        path: "/menu",
        name: "menu",
        meta: { title: "菜单管理" },
        component: () => import("@/views/menu"),
      },
    ],
  },
];

export default routes;
