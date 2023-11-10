import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    meta: { title: "Home" },
    component: BasicLayout,
    redirect: "/menu",
    children: [
      {
        path: "/menu",
        name: "menu",
        meta: { title: "菜单管理" },
        component: () => import("@/views/menu"),
      },
      {
        path: "/department",
        name: "department",
        meta: { title: "部门管理" },
        component: () => import("@/views/department"),
      },
      {
        path: "/role",
        name: "role",
        meta: { title: "角色管理" },
        component: () => import("@/views/role"),
      },
    ],
  },
];

export default routes;
