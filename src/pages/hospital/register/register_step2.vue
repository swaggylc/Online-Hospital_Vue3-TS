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
        <visitor
          v-for="item in userArr"
          :key="item.id"
          class="item"
          :user="item"
        ></visitor>
      </div>
    </el-card>
    <!-- 挂号详细信息 -->
    <el-card class="box-card">
      <!-- 头部 -->
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
        </div>
      </template>
      <!-- 展示挂号信息 -->
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊日期：</div>
          </template>
          2023-01-01
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院：</div>
          </template>
          北京人民医院
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室</div>
          </template>
          多发性骨髓瘤科
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生姓名：</div>
          </template>
          邵红红
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称：</div>
          </template>
          副主任医师
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长：</div>
          </template>
          内分泌与代谢性疾病
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医事服务费：</div>
          </template>
          <span style="color: red">100</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 按钮 -->
    <div class="btn">
      <el-button type="primary" size="large" :icon="Pointer"
        >确认挂号</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pointer } from "@element-plus/icons-vue";
import visitor from "./visitor.vue";
// 引入获取就诊人信息的接口
import { getUser } from "@/api/hospital/index.ts";
import { onMounted, ref } from "vue";
import type { UserResponseData, UserArr } from "@/api/hospital/type.ts";

// 存储就诊人信息
let userArr = ref<UserArr>([]);

onMounted(() => {
  fetchUserData();
});
// 获取就诊人信息
const fetchUserData = async () => {
  let res: UserResponseData = await getUser();
  if (res.code === 200) {
    userArr.value = res.data;
  }
};
</script>

<style scoped lang="scss">
.container {
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin: 20px;
  }
  .box-card {
    margin-bottom: 25px;
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
  .btn {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
}
</style>
