<template>
  <div class="search">
    <el-autocomplete
      clearable
      placeholder="搜索医院"
      class="form"
      v-model="hosname"
      :fetch-suggestions="fetchData"
      :trigger-on-focus="false"
      @select="goDetail"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
// 引入icon图标
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
// 引入请求方法
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo } from "@/api/home/type";
// 创建路由器对象
let $router = useRouter();
// 收集搜索的关键字（医院名字）
let hosname = ref<string>("");

// 搜索框的回调
const fetchData = async (keyword: string, cb: any) => {
  // console.log('fetchData触发了');
  // 当用户输入完关键字该函数会触发一次，我们可以在这里发送请求即可
  let result: HospitalInfo = await reqHospitalInfo(keyword);
  // console.log('这是搜索返回的数据',result.data);
  // 整理数据，将返回的数据整理成el-autocomplete组件需要的格式
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, //医院名字
      hoscode: item.hoscode, //医院编码
    };
  });

  // 将数据提供给回调函数（cb）以展示
  cb(showData);
};

// 点击建议项时的回调
const goDetail = (item: any) => {
  // console.log('goDetail触发了');
  // 点击建议项跳转到医院详情页，携带query参数，即医院编码 hoscode
  $router.push({
    path: "/hospital/register",
    query: {
      hoscode: item.hoscode,
    },
  });
};

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
