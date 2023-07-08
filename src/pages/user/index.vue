<template>
  <div class="user">
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon><House /></el-icon>
        <span> / 会员中心</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          index="/user/certified"
          @click="changeMenu('/user/certified')"
        >
          <el-icon><Postcard /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/orders" @click="changeMenu('/user/orders')">
          <el-icon><Memo /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item
          index="/user/visitor_manage"
          @click="changeMenu('/user/visitor_manage')"
        >
          <el-icon><User /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item
          index="/user/account"
          @click="changeMenu('/user/account')"
        >
          <el-icon><ChatLineSquare /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item
          index="/user/opinion"
          @click="changeMenu('/user/opinion')"
        >
          <el-icon><PhoneFilled /></el-icon>
          <span>意见反馈</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧二级路由显示区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  User,
  Postcard,
  Memo,
  ChatLineSquare,
  PhoneFilled,
  House,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

let $route = useRoute();
let $router = useRouter();

// 点击左侧导航栏的回调
const changeMenu = (path: string) => {
  // 路由跳转
  $router.push({ path: path });
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      color: #999;
      span {
        text-align: center;
        height: 20px;
      }
    }
  }
  .content {
    flex: 8;
  }
}
</style>
