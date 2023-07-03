<template>
  <div class="search">
    <el-autocomplete clearable placeholder="搜索医院" class="form" />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
// 引入icon图标
import { Search } from "@element-plus/icons-vue";
/**
    深度选择器：scoped样式中，如果要修改子组件的样式，需要使用深度选择器
    1. >>> 三个大于号
    2. /deep/ 关键字
    3. ::v-deep 关键字
  */
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
