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
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          />
        </div>
        <template v-else>
          <el-empty description="暂时没有数据哦" />
        </template>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper,->, sizes,total "
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
          style="margin-bottom: 10px"
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
const getHospitalInfo = async () => {
  // 获取医院的数据，默认第一页，每页显示10条
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  console.log("result", result);

  if (result.code === 200) {
    // 存储医院列表数据
    hasHospitalArr.value = result.data.content;
    // 存储总个数
    total.value = result.data.numberOfElements;
  }
};
// 监听分页器的变化
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
</style>
