<template>
  <div class="login_container">
    <!-- v-model控制对话框的显示与隐藏 -->
    <el-dialog v-model="userStore.visible" title="用户登录">
      <!-- 对话框身体部分 -->
      <div class="content">
        <div class="left">
          <div class="login">
            <div v-show="show == 0">
              <el-form>
                <el-form-item>
                  <el-input
                    placeholder="请输入手机号"
                    :prefix-icon="User"
                    v-model="loginParam.phone"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    placeholder="请输入验证码"
                    :prefix-icon="Lock"
                    v-model="loginParam.code"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button :disabled="!isPhone" @click="getCode"
                    >获取验证码</el-button
                  >
                </el-form-item>
              </el-form>
              <el-button style="width: 100%" type="primary">登录</el-button>
              <div class="bottom" @click="changeShow">
                <p>使用扫一扫登陆</p>
                <svg
                  t="1688560350055"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2362"
                  width="32"
                  height="32"
                >
                  <path
                    d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z"
                    fill="#24DB5A"
                    p-id="2363"
                  ></path>
                  <path
                    d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z"
                    fill="#24DB5A"
                    p-id="2364"
                  ></path>
                </svg>
              </div>
            </div>
            <div v-show="show == 1">
              <p>我是扫一扫登陆</p>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="top">
            <div class="top_left">
              <img src="../../assets/images/code_login_wechat.png" alt="" />
              <svg
                t="1688561696933"
                class="icon"
                viewBox="0 0 1025 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5381"
                width="16"
                height="16"
              >
                <path
                  d="M498.816 345.056c26.336 0 43.936-17.632 43.936-43.904 0-26.56-17.568-43.744-43.936-43.744s-52.832 17.184-52.832 43.744C446.016 327.424 472.48 345.056 498.816 345.056zM253.088 257.408c-26.336 0-52.96 17.184-52.96 43.744 0 26.272 26.624 43.904 52.96 43.904 26.24 0 43.808-17.632 43.808-43.904C296.864 274.592 279.328 257.408 253.088 257.408zM1024 626.112c0-138.88-128.832-257.216-286.976-269.536 0.224-1.728 0.32-3.52-0.064-5.312-31.712-147.84-190.688-259.296-369.824-259.296C164.704 91.968 0 233.12 0 406.624c0 93.088 47.52 176.96 137.568 243.104l-31.392 94.368c-2.016 6.144-0.192 12.896 4.704 17.152 2.976 2.56 6.72 3.904 10.496 3.904 2.432 0 4.896-0.576 7.168-1.696L246.4 704.48l14.528 2.944c36.288 7.456 67.616 13.92 106.208 13.92 11.36 0 22.88-0.512 34.176-1.472 4.576-0.384 8.448-2.688 11.072-6.016 42.496 106.336 159.616 183.104 297.44 183.104 35.296 0 71.04-8.512 103.104-16.544l90.848 49.664c2.4 1.312 5.056 1.984 7.68 1.984 3.584 0 7.168-1.216 10.048-3.552 5.056-4.096 7.136-10.848 5.248-17.024l-23.2-77.152C981.344 772.864 1024 699.328 1024 626.112zM398.592 687.968c-10.4 0.896-20.96 1.344-31.424 1.344-35.328 0-65.216-6.112-99.776-13.248L247.296 672c-3.456-0.736-7.104-0.256-10.272 1.376l-88.288 44.192 22.944-68.928c2.24-6.752-0.224-14.112-6.016-18.176C76.96 568.64 32 493.312 32 406.624c0-155.84 150.336-282.656 335.136-282.656 163.36 0 308 99.392 337.856 231.584-171.296 2.24-309.888 122.656-309.888 270.56 0 21.504 3.264 42.336 8.768 62.432C402.208 688.128 400.448 687.808 398.592 687.968zM875.456 815.552c-5.344 4.032-7.616 10.976-5.696 17.376l15.136 50.336-62.112-33.984c-2.368-1.312-5.024-1.984-7.68-1.984-1.312 0-2.624 0.16-3.904 0.512-33.312 8.416-67.776 17.088-101.344 17.088-155.904 0-282.72-107.136-282.72-238.816 0-131.68 126.816-238.784 282.72-238.784 152.928 0 282.144 109.344 282.144 238.784C992 691.744 950.624 759.04 875.456 815.552zM612.992 511.968c-17.568 0-35.136 17.696-35.136 35.232 0 17.664 17.568 35.104 35.136 35.104 26.4 0 43.84-17.44 43.84-35.104C656.832 529.632 639.392 511.968 612.992 511.968zM806.016 511.968c-17.312 0-34.88 17.696-34.88 35.232 0 17.664 17.568 35.104 34.88 35.104 26.304 0 44.064-17.44 44.064-35.104C850.08 529.632 832.352 511.968 806.016 511.968z"
                  fill="#272636"
                  p-id="5382"
                ></path>
              </svg>
              <p>微信扫一扫关注</p>
              <p>"快速预约挂号"</p>
            </div>
            <div class="top_right">
              <img src="../../assets/images/code_app.png" alt="" />
              <svg
                t="1688561657319"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4223"
                width="16"
                height="16"
              >
                <path
                  d="M864 48l-697.6 0c-48 0-83.2 41.6-83.2 89.6l0 208c0 12.8 9.6 25.6 22.4 25.6s22.4-9.6 22.4-25.6l0-208c0-22.4 16-41.6 38.4-41.6l697.6 0c22.4 0 38.4 19.2 38.4 41.6l0 208c0 12.8 9.6 25.6 22.4 25.6s22.4-9.6 22.4-25.6l0-208C947.2 89.6 908.8 48 864 48z"
                  p-id="4224"
                ></path>
                <path
                  d="M924.8 681.6c-12.8 0-22.4 9.6-22.4 25.6l0 179.2c0 22.4-16 41.6-38.4 41.6l-697.6 0c-22.4 0-38.4-19.2-38.4-41.6L128 704c0-12.8-9.6-25.6-22.4-25.6s-22.4 9.6-22.4 25.6l0 179.2c0 51.2 38.4 89.6 83.2 89.6l697.6 0c48 0 83.2-41.6 83.2-89.6L947.2 704C947.2 691.2 937.6 681.6 924.8 681.6z"
                  p-id="4225"
                ></path>
                <path
                  d="M921.6 544c12.8 0 22.4-9.6 22.4-22.4 0-12.8-9.6-22.4-22.4-22.4l-819.2 0c-12.8 0-22.4 9.6-22.4 22.4 0 12.8 9.6 22.4 22.4 22.4L921.6 544z"
                  p-id="4226"
                ></path>
              </svg>
              <p>扫一扫下载</p>
              <p>"预约挂号APP"</p>
            </div>
          </div>
          <div class="right_bottom">
            <h2>xxxx官方指定平台</h2>
            <h2>快速挂号 安全放心</h2>
            <p class="p1">咨询电话：400-119-7900</p>
            <p>工作时间：周一至周日 8:00-20:00</p>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog_bottom"></div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
// 获取user仓库的数据
// @ts-ignore
import useUserStore from "@/store/modules/user.ts";
let userStore = useUserStore();
let show = ref<number>(0); // 0:手机号登录 1:扫码登陆
const changeShow = () => {
  show.value = 1;
};

// 收集表单数据
let loginParam = reactive({
  phone: "", // 手机号
  code: "", // 验证码
});

// 计算当前的手机号是否是手机号码格式
let isPhone = computed(() => {
  // 手机号正则
  let reg = /^1[3-9]\d{9}$/;

  return reg.test(loginParam.phone);
});
// 获取验证码的回调
const getCode = async () => {
  // 通知user仓库发送验证码
  try {
    // 获取验证码成功
    await userStore.sendCode(loginParam.phone);
    loginParam.code = userStore.code;
  } catch (error) {
    // 获取验证码失败
    console.log(error);
  }
};
</script>

<style scoped lang="scss">
.login_container {
  ::v-deep(.el-dialog__body) {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      width: 48%;
      .login {
        padding: 20px;
        border: 1px solid #ccc;
        height: 80%;
        .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            margin-top: 30px;
            cursor: pointer;
          }
        }
      }
    }
    .right {
      width: 48%;
      .top {
        display: flex;
        justify-content: space-around;
        .top_left {
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
          }
        }
        .top_right {
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
          }
        }
      }
      .right_bottom {
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2 {
          margin: 10px 0;
        }
        p {
          line-height: 20px;
        }
        .p1 {
          margin-top: 30px;
        }
      }
    }
  }
  .dialog_bottom {
    height: 30px;
  }
}
</style>
