<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域（搜索框） -->
    <Search />
    <!-- 展示医院详细信息 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level />
        <!-- 地区子组件 -->
        <Region />
      </el-col>
      <el-col :span="4">
        <h1>医院详情</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from "./carousel/index.vue";
// 引入搜索框组件
import Search from "./search/index.vue";
// 引入医院等级组件
import Level from "./level/index.vue";
// 引入地区组件
import Region from "./region/index.vue";
</script>

<style scoped></style>
