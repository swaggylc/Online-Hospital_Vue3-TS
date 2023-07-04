<template>
  <div class="level">
    <h4>医院</h4>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          :class="{ active: activeFlag == item.value }"
          v-for="item in levelArr"
          :key="item.value"
          @click="changeLevel(item.value)"
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

let levelArr = ref<HospitalLevelAndRegionArr>([]);
// 控制医院等级的响应式数据
let activeFlag = ref<string>("");

onMounted(() => {
  getHospitalLevel();
});

// 获取医院等级的数据
const getHospitalLevel = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("HosType");
  // console.log("医院等级", result);
  // 存储医院等级的数据
  if (result.code === 200) {
    levelArr.value = result.data;
  }
};

// 点击医院等级的回调
const changeLevel = (level: string) => {
  // 存储当前点击的医院等级
  activeFlag.value = level;
  // console.log("level", level);
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  h4 {
    font-weight: 900;
    margin: 10px 0;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
