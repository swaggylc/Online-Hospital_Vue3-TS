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
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
        },
        {
          path: "register_step1",
          component: () =>
            import("@/pages/hospital/register/register_step1.vue"),
        },
        {
          path: "register_step2",
          component: () =>
            import("@/pages/hospital/register/register_step2.vue"),
        },
      ],
    },
    {
      path: "/user",
      component: () => import("@/pages/user/index.vue"),
      children: [
        {
          path: "certified",
          component: () => import("@/pages/user/certified/index.vue"),
        },
        {
          path: "orders",
          component: () => import("@/pages/user/orders/index.vue"),
        },
        {
          path: "visitor_manage",
          component: () => import("@/pages/user/visitor_manage/index.vue"),
        },
        {
          path: "account",
          component: () => import("@/pages/user/account/index.vue"),
        },
        {
          path: "opinion",
          component: () => import("@/pages/user/opinion/index.vue"),
        },
      ],
    },
  ],
  //   滚动行为：控制滚动条的位置
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});
