<!--
 * @Author: lucan lucanlc0417@gmail.com
 * @Date: 2023-07-03 08:58:00
 * @LastEditors: lucan lucanlc0417@gmail.com
 * @LastEditTime: 2023-10-12 18:29:48
 * @FilePath: \Online Hospital\src\pages\hospital\index.vue
 * @Description: 搜索组件
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="top">
        <el-icon><House /></el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          index="/hospital/register"
          @click="changeActive('/hospital/register')"
        >
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/detail"
          @click="changeActive('/hospital/detail')"
        >
          <el-icon><OfficeBuilding /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')"
        >
          <el-icon><Comment /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/close"
          @click="changeActive('/hospital/close')"
        >
          <el-icon><Document /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/search"
          @click="changeActive('/hospital/search')"
        >
          <el-icon><More /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容展示区：即路由组件的展示位置 -->
    <div class="content">
      <!-- 子组件展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
// 引入仓库
import useDetailStore from "@/store/modules/hospitalDetail.ts";
// 获取仓库对象
let detailStore = useDetailStore();
// 左侧菜单需要用到的图标
import {
  OfficeBuilding,
  Menu as IconMenu,
  Comment,
  Document,
  More,
  House,
} from "@element-plus/icons-vue";
// 引入路由
import { useRouter, useRoute } from "vue-router";
// 创建路由对象
const $router = useRouter();
// 获取当前路由信息
const $route = useRoute();

// 点击左侧菜单事件的回调
/**
 * @description: 点击左侧菜单事件的回调
 * @param {*} path
 * @return {*}
 */
const changeActive = (path: string) => {
  // console.log(path);
  $router.push({
    path,
    query: {
      hoscode: $route.query.hoscode,
    },
  });
};

// 组件挂载完毕：通知pinia仓库发请求，存数据
onMounted(() => {
  // console.log("组件挂载完毕");
  // 发请求
  // 获取医院详情的数据
  detailStore.getHospital($route.query.hoscode as string);
  // 获取医院科室的数据
  detailStore.getDepartment($route.query.hoscode as string);
});
</script>

<style scoped lang="scss">
.hospital {
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
