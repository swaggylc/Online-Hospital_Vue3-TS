<template>
  <div class="container">
    <h1>确认挂号信息</h1>
    <!-- 就诊人信息 -->
    <el-card class="box-card">
      <!-- 头部 -->
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button type="primary" size="default" :icon="Pointer" @click="goVisitor">添加就诊人</el-button>
        </div>
      </template>
      <!-- 展示就诊人信息 -->
      <div class="user">
        <visitor v-for="(item, index) in userArr" :key="item.id" class="item" :user="item" @click="getUserIndex(index)"
          :index="index" :userIndex="userIndex"></visitor>
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
          {{ doctorInfo.workDate }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院：</div>
          </template>
          {{ doctorInfo.param?.hosname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室</div>
          </template>
          {{ doctorInfo.param?.depname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生姓名：</div>
          </template>
          {{ doctorInfo.docname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称：</div>
          </template>
          {{ doctorInfo.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长：</div>
          </template>
          {{ doctorInfo.skill }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医事服务费：</div>
          </template>
          <span style="color: red">{{ doctorInfo.amount }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 按钮 -->
    <div class="btn">
      <el-button type="primary" size="large" :icon="Pointer" :disabled="userIndex == -1"
        @click="confirmRegister()">确认挂号</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pointer } from "@element-plus/icons-vue";
// 引入获取就诊人信息的接口
import { getUser, getDoctor } from "@/api/hospital/index.ts";
// 引入创建订单的接口
import { createOrder } from "@/api/user/index.ts";
import { onMounted, ref } from "vue";
import type {
  UserResponseData,
  UserArr,
  DoctorInfoData,
} from "@/api/hospital/type.ts";
import type { CreateOrderResponseData } from "@/api/user/type.ts";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const $route = useRoute();
const $router = useRouter();
// 存储就诊人信息
let userArr = ref<UserArr>([]);
// 存储医生信息
let doctorInfo = ref<any>({});
// 存储确定就诊人的索引值
let userIndex = ref<number>(-1);

onMounted(() => {
  // console.log($route.query);

  // 获取就诊人信息
  fetchUserData();
  // 获取医生信息
  fetchDoctorData();
});
// 获取就诊人信息
const fetchUserData = async () => {
  let res: UserResponseData = await getUser();
  if (res.code === 200) {
    userArr.value = res.data;
  }
};
// 获取医生信息
const fetchDoctorData = async () => {
  let res: DoctorInfoData = await getDoctor($route.query.docId as string);
  if (res.code === 200) {
    doctorInfo.value = res.data;
  }
};
// 选择就诊人的回调
const getUserIndex = (index: number) => {
  // console.log(index);
  userIndex.value = index;
};

// 点击确认挂号的回调
const confirmRegister = async () => {
  // console.log("确认挂号");
  let hoscode: string = doctorInfo.value.hoscode;
  let scheduleId: string = doctorInfo.value.id;
  let patientId = userArr.value[userIndex.value].id;
  // console.log(hoscode, scheduleId, patientId);
  // 创建订单

  let res: CreateOrderResponseData = await createOrder(
    hoscode,
    scheduleId,
    //@ts-ignore
    patientId as number
  );
  // console.log("订单编号：", res);
  if (res.code === 200) {
    // 跳转到挂号详情页面
    $router.push({
      path: "/user/orders",
      query: {
        orderNo: res.data,
      },
    });
  } else {
    // 提示错误信息
    ElMessage.error(res.message);
  }
};
// 添加就诊人的回调
const goVisitor=()=>{
  $router.push({
    path:"/user/visitor_manage",
    query:{
      type:"add"
    }
  })
}













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
