// 定义用户相关的数据
import { defineStore } from "pinia";
// 引入获取验证码的方法
import { getUserCode, userLogin } from "@/api/hospital/index.ts";
// 引入本地存储的方法
import { SET_TOKEN, GET_TOKEN } from "@/utils/user.ts";
// 引入ts类型
import type { LoginData, UserLoginResponseData } from "@/api/hospital/type.ts";
import type { UserState } from "@/store/modules/interface/index.ts";
const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      visible: false, //登录弹窗是否显示
      code: "", //验证码
      userInfo: JSON.parse((GET_TOKEN() as string) || "{}"), //用户信息
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
    // 用户手机号登陆的方法
    async userLogin(loginForm: LoginData) {
      // console.log(loginForm);
      let result: UserLoginResponseData = await userLogin(loginForm);
      // console.log(result);
      if (result.code === 200) {
        this.userInfo = result.data;
        // 存储到本地，localStorage
        SET_TOKEN(JSON.stringify(result.data));
        return "ok";
      } else {
        return Promise.reject(result.message);
      }
    },
  },
  getters: {},
});

export default useUserStore;
