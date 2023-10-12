<!--
 * @Author: lucan lucanlc0417@gmail.com
 * @Date: 2023-07-03 08:57:24
 * @LastEditors: lucan lucanlc0417@gmail.com
 * @LastEditTime: 2023-10-12 20:35:09
 * @FilePath: \Online Hospital\src\pages\home\index.vue
 * @Description: 
 * Copyright (c) 2023 by lucan - Tanikawa, All Rights Reserved. 
-->
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
        <Level @getLevel="getLevel" />
        <!-- 地区子组件 -->
        <Region @getRegion="getRegion" />
        <!-- 展示医院的结构 -->
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
        </div>
        <template v-else>
          <el-empty description="暂时没有数据哦" />
        </template>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
          :background="true" layout="prev, pager, next, jumper,->, sizes,total " :total="total"
          @current-change="currentChange" @size-change="sizeChange" style="margin-bottom: 10px" />
      </el-col>
      <el-col :span="4">
        <Tip></Tip>
        <!-- 平台公告-->
        <div class="notice">
          <div class="header">
            <div class="left">
              <svg t="1688463144598" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5613" width="16" height="16">
                <path
                  d="M441.77831 9.472a37.632 37.632 0 0 1 41.216-4.779 40.448 40.448 0 0 1 21.93 36.438v925.696a40.619 40.619 0 0 1-22.954 36.949 37.205 37.205 0 0 1-41.643-6.656c-0.512-0.512-51.2-47.36-107.69-95.232-97.024-82.347-127.062-96.853-133.376-99.243H31.92131a32.597 32.597 0 0 1-31.914-33.28V238.677c0-18.346 14.336-33.28 31.915-33.28h141.824c6.485-2.304 38.4-16.298 147.712-100.181a4605.099 4605.099 0 0 0 120.32-95.744zM85.34131 290.731v426.666h129.365l14.592 5.462c28.245 10.666 75.35 43.434 158.464 114.005 10.581 8.875 21.333 18.09 31.744 27.307V136.96c-15.616 12.288-31.573 24.747-46.08 35.925-92.672 70.998-143.36 103.254-171.861 113.067l-13.483 4.608H85.34131z m736.768 212.992a294.4 294.4 0 0 1-144.811 255.573 59.819 59.819 0 0 1-17.493 5.632c-2.304 0.256-2.304 0.256-4.78 0.256a45.568 45.568 0 0 1-44.884-46.165c0-16.214 8.106-31.062 21.845-39.766a200.875 200.875 0 0 0 100.096-175.445c0-72.704-37.547-138.41-97.11-173.653a46.677 46.677 0 0 1-22.186-40.107c0-25.515 19.968-46.336 44.885-46.336 7.68 0 17.067 3.413 24.747 7.68 85.845 52.053 139.69 147.37 139.69 252.33zM753.15931 72.96c9.216 0 16.64 2.901 25.77 8.619 143.105 87.381 232.79 246.698 232.79 422.314 0 175.787-90.112 335.446-233.642 422.742a45.91 45.91 0 0 1-25.6 8.448 45.397 45.397 0 0 1-44.715-46.08c0-17.494 10.496-32.939 25.259-41.387 116.565-70.827 189.696-200.619 189.696-343.723 0-143.36-73.302-273.066-189.611-343.808a46.933 46.933 0 0 1-24.661-40.96c0-25.429 19.882-46.08 44.714-46.08z"
                  p-id="5614" fill="#55a6fe"></path>
              </svg>
              <span>平台公告</span>
            </div>
            <div class="right">
              <span>全部</span>
              <svg t="1688462019552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4398" width="16" height="16">
                <path
                  d="M279.063 1019.387c-13.838 0-23.063-4.612-32.288-13.837-18.45-18.45-18.45-46.127 0-64.577L675.748 512 246.775 87.64c-18.45-18.45-18.45-46.126 0-64.577s46.126-18.45 64.576 0l461.262 461.261c18.45 18.45 18.45 46.126 0 64.577L311.35 1010.162c-4.612 4.613-18.45 9.225-32.288 9.225z"
                  p-id="4399" fill="#2c2c2c"></path>
              </svg>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>关于延长北京大学国际医院放价的通知</li>
              <li>北京大学人民医院举行2023年医院发展年中工作研讨会</li>
              <li>学习贯彻习近平新时代中国特色社会主义思想主题教育</li>
            </ul>
          </div>
        </div>
        <!-- 停诊信息 -->
        <div class="notice">
          <div class="header">
            <div class="left">
              <svg t="1688464060889" class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="10903" width="24" height="24">
                <path
                  d="M0 512C0 229.236364 229.236364 0 512 0h1024c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512H512C229.236364 1024 0 794.763636 0 512z"
                  fill="#FCEDED" p-id="10904"></path>
                <path
                  d="M1536 46.545455c257.070545 0 465.454545 208.384 465.454545 465.454545s-208.384 465.454545-465.454545 465.454545H512C254.929455 977.454545 46.545455 769.070545 46.545455 512S254.929455 46.545455 512 46.545455h1024zM512 0C229.236364 0 0 229.236364 0 512s229.236364 512 512 512h1024c282.763636 0 512-229.236364 512-512S1818.763636 0 1536 0H512z"
                  fill="#DE3E34" p-id="10905"></path>
                <path
                  d="M529.408 209.082182C501.387636 309.434182 456.424727 399.36 395.170909 477.556364l15.639273 49.524363c21.504-24.762182 41.704727-51.479273 59.950545-78.848v361.658182h47.569455V366.778182c21.504-43.008 39.749818-89.274182 54.737454-137.495273l-43.659636-20.200727z m242.408727 0l-47.569454 7.819636c7.168 14.987636 13.684364 31.278545 19.549091 48.221091h-170.728728v41.704727h403.362909v-41.704727h-185.716363c-6.516364-20.852364-12.381091-39.749818-18.897455-56.040727z m-155.741091 135.540363v123.159273H926.254545V344.622545h-310.178909zM880.64 431.941818h-218.949818V380.462545h218.949818V431.941818z m97.093818 73.634909h-410.530909v111.429818h43.659636v29.323637h142.708364v93.835636c0 14.336-8.471273 22.155636-25.413818 22.155637-21.504 0-43.659636-1.303273-67.118546-2.606546l9.774546 45.614546h73.634909c37.794909 0 57.344-18.245818 57.344-53.434182v-105.565091h140.753455v-29.323637h35.188363v-111.429818z m-364.916363 100.352v-59.298909h319.953454v59.298909h-319.953454zM1474.280727 371.991273c-44.311273 57.344-109.474909 98.397091-196.794182 123.810909l18.245819 40.401454c93.835636-28.020364 164.864-74.286545 213.085091-138.146909l-34.536728-26.065454z m70.376728 86.667636c-54.737455 70.376727-136.192 121.856-244.363637 153.134546l18.897455 41.704727c114.688-33.885091 201.355636-89.925818 260.002909-168.122182l-34.536727-26.717091z m68.421818 81.454546c-76.893091 105.565091-191.581091 181.154909-344.715637 227.42109l20.200728 44.96291c159.650909-49.524364 280.203636-130.978909 361.658181-244.363637l-37.143272-28.020363zM1130.868364 220.16l-32.581819 31.930182c46.917818 35.188364 83.409455 68.421818 110.778182 99.700363l31.930182-32.581818c-29.975273-33.233455-67.118545-66.466909-110.126545-99.048727z m-79.499637 191.581091v44.962909h95.790546v257.396364c0 11.077818-5.213091 20.852364-14.336 29.975272l18.245818 42.356364a889.669818 889.669818 0 0 0 121.204364-101.003636l-13.032728-49.524364c-24.110545 24.110545-46.266182 45.614545-67.118545 63.860364V411.741091h-140.753455z m379.252364-200.052364a722.013091 722.013091 0 0 1-196.794182 203.310546l22.807273 40.401454c78.848-54.737455 142.708364-120.552727 190.929454-196.142545 52.130909 78.848 114.688 142.708364 187.671273 192.232727l22.807273-40.401454c-72.983273-48.221091-137.495273-114.688-193.536-199.400728h-33.885091z"
                  fill="#DE3E34" p-id="10906"></path>
              </svg>
              <span>停诊信息</span>
            </div>
            <div class="right">
              <span>全部</span>
              <svg t="1688462019552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4398" width="16" height="16">
                <path
                  d="M279.063 1019.387c-13.838 0-23.063-4.612-32.288-13.837-18.45-18.45-18.45-46.127 0-64.577L675.748 512 246.775 87.64c-18.45-18.45-18.45-46.126 0-64.577s46.126-18.45 64.576 0l461.262 461.261c18.45 18.45 18.45 46.126 0 64.577L311.35 1010.162c-4.612 4.613-18.45 9.225-32.288 9.225z"
                  p-id="4399" fill="#2c2c2c"></path>
              </svg>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>北京地坛医院本部停诊通知</li>
              <li>北京地坛医院顺义院区门、急诊停诊通知</li>
              <li>北京市大兴区人民医院停诊通知</li>
              <li>首都医科大学附属北京康复医院停诊通知</li>
            </ul>
          </div>
        </div>
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
// 引入右侧的组件
import Tip from "./tip/index.vue";

// 分页器的数据
import { ref, onMounted } from "vue";
// 引入获取数据的函数
import { reqHospital } from "@/api/home";
import type { Content, HospitalResponseData } from "@/api/home/type";

let pageNo = ref<number>(1); // 当前页
let pageSize = ref<number>(10); // 每页显示条数
let hasHospitalArr = ref<Content>([]); //医院列表数据
let total = ref<number>(0); // 总个数
let hostype = ref<string>(""); //医院等级
let districtCode = ref<string>(""); //医院地区

// 组件挂载完毕后发送一次请求
onMounted(() => {
  getHospitalInfo();
});

// 获取医院的数据
/**
 * @description: 获取医院的数据
 * @return {*}
 */
const getHospitalInfo = async () => {
  // 获取医院的数据，默认第一页，每页显示10条
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  // console.log("result", result);

  if (result.code === 200) {
    // 存储医院列表数据
    hasHospitalArr.value = result.data.content;
    // 存储总个数
    total.value = result.data.numberOfElements;
  }
};
// 监听分页器的变化
/**
 * @description: 监听分页器的变化
 * @param {*} val 当前页 
 * @return {*}  void
 */
const currentChange = (val: number) => {
  // console.log("val", val);
  pageNo.value = val;
  getHospitalInfo();
};
// 监听每页显示条数的变化
const sizeChange = (val: number) => {
  // console.log("val", val);
  pageSize.value = val;
  getHospitalInfo();
};

// 获取子组件传递过来的医院等级数据
const getLevel = (level: string) => {
  // console.log("子组件传递给父组件的level是:",level);
  // 收集参数
  hostype.value = level;
  // 发送请求
  getHospitalInfo();
};

// 获取子组件传递过来的地区数据
/**
 * @description: 获取子组件传递过来的地区数据
 * @param {*} region
 * @return {*}
 */
const getRegion = (region: string) => {
  // console.log("子组件传递给父组件的region是:",region);
  // 收集参数
  districtCode.value = region;
  // 发送请求
  getHospitalInfo();
};
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

.notice {
  color: #999;
  margin-top: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .left {
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-right: 5px;
      }
    }
  }

  .content {
    font-size: 15px;

    ul {
      li {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
