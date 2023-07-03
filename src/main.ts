// Vue 3框架提供的CreateApp函数，用于创建Vue实例
import { createApp } from "vue";
// 引入清除默认样式
import "@/style/reset.scss";
// 引入根组件App
import App from "@/App.vue";
// 引入全局组件--顶部、底部都是全局组件
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";
// 引入vue-router
import router from "@/router/index.ts";
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 利用createApp方法创建Vue实例，并且将应用实例挂载到挂载点上
const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
// 安装vue-router
app.use(router);
// 安装element-plus
app.use(ElementPlus)
// 挂载到id为app的元素上
app.mount("#app");
