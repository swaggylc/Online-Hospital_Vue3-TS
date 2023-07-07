<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <div class="dot">·</div>
      <div class="hosdepartment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h4>{{ workData.baseMap?.workDateString }}</h4>
      <div class="container">
        <div
          class="item"
          v-for="item in workData.bookingScheduleList"
          :key="item"
          :class="{ active: item.status == -1 || item.availableNumber == -1 }"
        >
          <div class="item_top">{{ item.workDate }} {{ item.dayOfWeek }}</div>
          <div class="item_bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{
                item.availableNumber == -1
                  ? "预约已满"
                  : `余${item.availableNumber}号`
              }}
            </div>
            <div v-if="item.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination
        v-model:current-page="pageNo"
        layout="prev, pager, next"
        :total="workData.total"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HospitalWorkData } from "@/api/hospital/type.ts";
import { onMounted, ref } from "vue";
import { getHospitalWork } from "@/api/hospital/index";
import { useRoute } from "vue-router";
let $route = useRoute();

let pageNo = ref<number>(1); // 当前页
let limit = ref<number>(6); // 每页显示的条数
let workData = ref<any>({});

onMounted(() => {
  fetchWorkData();
});

// 获取挂号的数据
const fetchWorkData = async () => {
  // console.log($route.query);
  const res: HospitalWorkData = await getHospitalWork(
    pageNo.value,
    limit.value,
    $route.query.hoscode as string,
    $route.query.depcpde as string
  );
  // console.log("预约挂号数据", res);
  if (res.code === 200) {
    workData.value = res.data;
  }
};
// 点击分页的回调
const pageChange = (val: number) => {
  pageNo.value = val;
  fetchWorkData();
};
</script>

<style scoped lang="scss">
.wrap {
  .top {
    display: flex;
    color: #999;

    .line {
      width: 2px;
      height: 16px;
      background-color: #999;
      margin: 0 10px;
    }
    .dot {
      margin: 0 10px;
      line-height: 16px;
    }
  }
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h4 {
      font-weight: bold;
      color: #999;
    }
    .container {
      display: flex;
      margin-top: 50px;
      width: 100%;
      margin-bottom: 30px;
      .item {
        flex: 1;
        border: 1px solid skyblue;
        margin: 0 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &.active {
          border: 1px solid #ccc;
          color: #ccc;
          .item_top {
            background-color: #ccc;
          }
        }
        .item_top {
          height: 30px;
          background-color: #e8f2ff;
          text-align: center;
          line-height: 30px;
          color: #81878e;
        }
        .item_bottom {
          height: 60px;
          text-align: center;
          line-height: 60px;
          color: #c6c6c6;
        }
      }
    }
  }
}
</style>
