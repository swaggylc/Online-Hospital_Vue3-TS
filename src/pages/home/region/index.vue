<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: regionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          :class="{ active: regionFlag == item.value }"
          v-for="item in regionArr"
          :key="item.value"
          @click="changeRegion(item.value)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqHospitalLevelAndRegion } from "@/api/home";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";

// 存储地区数据的响应式数据
let regionArr = ref<HospitalLevelAndRegionArr>([]);
// 控制地区高亮的响应式数据
let regionFlag = ref<string>("");

// 地区组件挂载完毕获取地区数据
onMounted(() => {
  getRegion();
});

// 获取地区数据的方法
const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
  // console.log("地区", result);
  // 存储地区数据
  if (result.code === 200) {
    regionArr.value = result.data;
  }
};

// 点击地区的回调
const changeRegion = (region: string) => {
  // 存储当前点击的地区
  regionFlag.value = region;
  // console.log("region", region);
};
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 38px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 5px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        cursor: pointer;
        color: #55a6fe;
      }
    }
  }
}
</style>
