// 定义用户相关的数据
import { defineStore } from "pinia";
// 引入获取验证码的方法
import { getUserCode } from "@/api/hospital/index.ts";

const useUserStore = defineStore("User", {
  state: () => {
    return {
      visible: false, //登录弹窗是否显示
      code: "", //验证码
    };
  },
  actions: {
    // 获取验证码的方法
    async sendCode(phone: string) {
      let result: any = await getUserCode(phone);
      if (result.code === 200) {
        this.code = result.data;
        return "ok";
      } else {
        return Promise.reject(result.message);
      }
    },
  },
  getters: {},
});

export default useUserStore;
