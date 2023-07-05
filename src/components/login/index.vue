<template>
  <div class="login_container">
    <!-- v-model控制对话框的显示与隐藏 -->
    <el-dialog v-model="userStore.visible" title="用户登录"> </el-dialog>
  </div>
</template>

<script setup lang="ts">
// 获取user仓库的数据
// @ts-ignore
import useUserStore from "@/store/modules/user.ts";
let userStore = useUserStore();
</script>

<style scoped lang="scss"></style>
