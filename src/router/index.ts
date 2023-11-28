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
        meta: { title: "部门角色管理" },
        component: () => import("@/views/role"),
      },
      {
        path: "/adminRole",
        name: "adminRole",
        meta: { title: "角色管理" },
        component: () => import("@/views/admin-role"),
      },
      {
        path: "/user",
        name: "user",
        meta: { title: "用户管理" },
        component: () => import("@/views/user"),
      },
      {
        path: "/sysConfig",
        name: "sysConfig",
        meta: { title: "系统配置" },
        component: () => import("@/views/sysConfig"),
      },
      {
        path: "/dict",
        name: "dict",
        meta: { title: "字典管理" },
        component: () => import("@/views/dict"),
      },
      // {
      //   path: "/editor",
      //   name: "editor",
      //   meta: { title: "editor" },
      //   component: () => import("@/views/editor"),
      // },
    ],
  },
];

export default routes;
