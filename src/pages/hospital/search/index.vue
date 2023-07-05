<template>
  <div class="info">
    <h3>{{ hospitalStore.hospitalInfo.hospital?.hosname }}查询与取消信息</h3>
    <el-empty description="暂无数据噢" />
  </div>
</template>

<script setup lang="ts">
import useDetailStore from "@/store/modules/hospitalDetail.ts";
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.info {
  h3 {
    text-align: center;
    font-weight: bold;
  }
}
</style>
