// 路由鉴权:路由能不能被访问的权限设置-->全局路由守卫
// 引入路由器

import router from "@/router";
// 引入进度条
//@ts-ignore
import NProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 设置进度条的配置项
NProgress.configure({ showSpinner: false }); // 不显示右侧的旋转进度条
// 引入仓库
import pinia from "@/store";
import useUserStore from "./store/modules/user";
let userStore = useUserStore(pinia);
// 白名单
let whiteList = [
  "/home",
  "/hospital/register",
  "/hospital/detail",
  "/hospital/notice",
  "/hospital/close",
  "/hospital/search",
];

// 添加全局守卫
// 前置守卫
/**
 * @param to: Route: 即将要进入的目标 路由对象
 * @param from: Route: 当前导航正要离开的路由
 * @param next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 * @returns next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
 * @returns next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
 */
router.beforeEach((to, from, next) => {
  // 访问路由组件之前，开启进度条
  NProgress.start();
  // 动态设置页面标题
  document.title = `ECUT在线挂号-${to.meta.title}`;
  // 判断用户是否登录
  let token = userStore.userInfo.token;
  if (token) {
    next();
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      //   跳转到首页
      //   console.log(to.fullPath);
      next({
        path: "/home",
        query: {
          redirect: to.fullPath,
        },
      });
      //   显示登陆组件
      userStore.visible = true;
    }
  }
});

// 后置守卫
router.afterEach((to, from) => {
  // 访问路由组件之后，关闭进度条
  NProgress.done();
});
