<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />

    <!-- 展示路由组件的区域 -->
    <div class="content">
      <router-view />
    </div>

    <!-- 底部组件 -->
    <HospitalBottom />
    <!-- 登陆组件 -->
    <Login />
  </div>
</template>

<script setup lang="ts">
// import request from "@/utils/request";
// import { onMounted } from "vue";

// onMounted(() => {
//   request.get("/hosp/hospital/1/10").then((res) => {
//     console.log('res',res);
//   });
// });
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 80px;
    width: 1200px;
    min-height: 920px;
  }
}
</style>
