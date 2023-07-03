import { createRouter, createWebHistory } from "vue-router";
// 用于创建路由器实例，可以管理多个路由

export default createRouter({
  // 指定路由的模式，此处使用的是history模式
  history: createWebHistory(),
  // 管理路由
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
  ],
  //   滚动行为：控制滚动条的位置
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});
