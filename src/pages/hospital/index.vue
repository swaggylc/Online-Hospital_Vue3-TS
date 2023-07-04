<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="top">
        <el-icon><House /></el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
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
import { useRouter,useRoute } from "vue-router";
// 创建路由对象
const $router = useRouter();
// 获取当前路由信息
const $route = useRoute();

// 点击左侧菜单事件的回调
const changeActive = (path: string) => {
  // console.log(path);
  $router.push({
    path,
  });
};
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
    }
  }
  .content {
    flex: 8;
  }
}
</style>
