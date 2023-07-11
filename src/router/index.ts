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
      meta: {
        title: "首页",
      },
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
          meta: {
            title: "预约挂号",
          },
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          meta: {
            title: "医院详情",
          },
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          meta: {
            title: "预约通知",
          },
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          meta: {
            title: "停诊信息",
          },
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
          meta: {
            title: "查询/取消",
          },
        },
        {
          path: "register_step1",
          component: () =>
            import("@/pages/hospital/register/register_step1.vue"),
          meta: {
            title: "选择号源",
          },
        },
        {
          path: "register_step2",
          component: () =>
            import("@/pages/hospital/register/register_step2.vue"),
          meta: {
            title: "确认信息",
          },
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
          meta: {
            title: "实名认证",
          },
        },
        {
          path: "orders",
          component: () => import("@/pages/user/orders/index.vue"),
          meta: {
            title: "挂号订单",
          },
        },
        {
          path: "visitor_manage",
          component: () => import("@/pages/user/visitor_manage/index.vue"),
          meta: {
            title: "就诊人管理",
          },
        },
        {
          path: "account",
          component: () => import("@/pages/user/account/index.vue"),
          meta: {
            title: "账号信息",
          },
        },
        {
          path: "opinion",
          component: () => import("@/pages/user/opinion/index.vue"),
          meta: {
            title: "意见反馈",
          },
        },
      ],
    },
  ],
  //   滚动行为：控制滚动条的位置
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});
