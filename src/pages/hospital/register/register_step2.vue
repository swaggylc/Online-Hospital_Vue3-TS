<template>
  <div class="container">
    <h1>确认挂号信息</h1>
    <!-- 就诊人信息 -->
    <el-card class="box-card">
      <!-- 头部 -->
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button type="primary" size="default" :icon="Pointer"
            >添加就诊人</el-button
          >
        </div>
      </template>
      <!-- 展示就诊人信息 -->
      <div class="user">
        <visitor v-for="item in 4" :key="item" class="item"></visitor>
      </div>
    </el-card>
    <!-- 挂号详细信息 -->
  </div>
</template>

<script setup lang="ts">
import { Pointer } from "@element-plus/icons-vue";
import visitor from "./visitor.vue";
</script>

<style scoped lang="scss">
.container {
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin: 20px;
  }
  .box-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      line-height: 32px;
    }
    .user {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 31%;
        margin: 10px;
      }
    }
  }
}
</style>
