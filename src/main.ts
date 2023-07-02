// Vue 3框架提供的CreateApp函数，用于创建Vue实例
import { createApp } from "vue";
// 引入根组件App
import App from "@/App.vue";
// 利用createApp方法创建Vue实例，并且将应用实例挂载到挂载点上
const app = createApp(App);
// 挂载到id为app的元素上
app.mount("#app");
