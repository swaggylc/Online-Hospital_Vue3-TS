<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left" @click="goHome">
        <img src="../../assets/images/ecut.jpg" alt="" />
        <p>ECUT 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <!-- 没有用户信息则显示登陆或注册 -->
        <p class="login" @click="login" v-if="!userStore.userInfo.name">
          登陆/注册
        </p>
        <!-- 有用户信息则显示用户name -->
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ userStore.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goUser('/user/certified')"
                >实名认证</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/orders')"
                >挂号订单</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/visitor_manage')"
                >就诊人管理</el-dropdown-item
              >
              <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue";
// 引入清除本地存储的token的方法
import { REMOVE_TOKEN } from "@/utils/user.ts";
// 获取user仓库的数据
import useUserStore from "@/store/modules/user.ts";
let userStore = useUserStore();
import { useRouter } from "vue-router";
const $router = useRouter();

const goHome = () => {
  // console.log("点击了top");
  $router.push({
    path: "/home",
  });
};
// 点击登陆或注册的回调
const login = () => {
  userStore.visible = true;
};
// 点击退出登陆的回调
const logout = () => {
  // 清空用户信息
  userStore.userInfo = {
    name: "",
    token: "",
  };
  // 清空本地存储的用户信息
  REMOVE_TOKEN();
  // 跳转到首页
  $router.push({
    path: "/home",
  });
};

// 点击账号下拉菜单的回调
const goUser = (path: string) => {
  $router.push({
    path: path,
  });
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    display: flex;
    align-items: center;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 14px;
        color: #999;
      }
      .help {
        margin-right: 10px;
      }
      .login {
        cursor: pointer;
      }
    }
  }
}
</style>
