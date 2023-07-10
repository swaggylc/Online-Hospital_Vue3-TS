<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>就诊人管理</span>
        <el-button class="button" type="success" :icon="User">添加就诊人</el-button>
      </div>
    </template>
    <!-- 放置就诊人卡片 -->
    <div class="content">
      <Visitor class="item" v-for="(item, index) in patientList" :key="item.id" :user="item" :index="index"></Visitor>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { User } from '@element-plus/icons-vue'
// 引入方法
import { getPatientList } from '@/api/user/index.ts'
// 引入ts类型
import type { GetPatientListResponseData, PatientListData } from '@/api/user/type.ts'

let patientList = ref<PatientListData>([])


onMounted(() => {
  getPatientListData()

})

// 获取就诊人列表的方法
const getPatientListData = async () => {
  let res: GetPatientListResponseData = await getPatientList()
  // console.log("就诊人列表", res)
  if (res.code === 200) {
    patientList.value = res.data
  }
}














</script>

<style scoped lang="scss">
.box-card {
  .card-header {
    span {
      font-size: 17px;
      color: #999;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 31%;
      margin: 10px;
    }
  }
}
</style>
