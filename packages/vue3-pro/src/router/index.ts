import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

export const constRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
      },
      {
        path: "input",
        component: () => import("@/views/Input"),
      },
    ],
  },
];

export const asyncRoutes: RouteRecordRaw[] = [];

/**
 * 路由缓存 vue-router@4.x
 * <keep-alive include={includes} />
 * 页面组件 name 属性值
 */
export const includes: string[] = ["Input"];

let router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
