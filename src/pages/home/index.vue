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
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper,->, sizes,total "
          :total="13"
          style="margin-bottom: 10px;"
        />
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
// 引入医院列表组件
import Card from "./card/index.vue";

// 分页器的数据
import { ref } from "vue";

let pageNo = ref<number>(1); // 当前页
let pageSize = ref<number>(10); // 每页显示条数
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
