// 定义用户相关的数据
import { defineStore } from "pinia";

const useUserStore = defineStore("User", {
  state: () => {
    return {
      visible: false, //登录弹窗是否显示
    };
  },
  actions: {},
  getters: {},
});

export default useUserStore;