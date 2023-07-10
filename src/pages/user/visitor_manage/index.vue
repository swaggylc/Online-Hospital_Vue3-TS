<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>就诊人管理</span>
        <el-button class="button" type="success" :icon="User" @click="changeContent">添加就诊人</el-button>
      </div>
    </template>
    <!-- 放置就诊人卡片 -->
    <div class="content" v-if="isShow == 0">
      <Visitor @change="changeScene" class="item" v-for="(item, index) in patientList" :key="item.id" :user="item"
        :index="index"></Visitor>
    </div>
    <!-- 添加/修改就诊人的结构 -->
    <div class="addPatient" v-if="isShow == 1">
      <el-divider content-position="left">就诊人信息</el-divider>
      <el-form style="width: 70%; margin: 10px auto;">
        <el-form-item label="用户姓名">
          <el-input placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型">
            <el-option label="身份证" value="1"></el-option>
            <el-option label="户口本" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input placeholder="请输入证件号码"></el-input>
        </el-form-item>
        <el-form-item label="用户性别">
          <el-radio-group>
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="请选择你的出生日期" :disabled-date="disabledDate" :shortcuts="shortcuts" />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input placeholder="请输入手机号码"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">建档信息(完善后部分医院首次就诊不用排队建档)</el-divider>
      <el-form style="width: 70%; margin: 10px auto;">
        <el-form-item label="婚姻状况">
          <el-radio-group>
            <el-radio :label="1">未婚</el-radio>
            <el-radio :label="2">已婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自费/医保">
          <el-radio-group>
            <el-radio :label="1">自费</el-radio>
            <el-radio :label="2">医保</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前住址">
          <el-cascader v-model="value" :options="options" @change="handleChange" placeholder="请选择住址" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input placeholder="请输入详细地址"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">用户信息(选填)</el-divider>
      <el-form style="width: 70%; margin: 10px auto;" label-width="70px">
        <el-form-item label="用户姓名">
          <el-input placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型">
            <el-option label="身份证" value="1"></el-option>
            <el-option label="户口本" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input placeholder="请输入证件号码"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button type="primary">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
// 决定是否显示添加/修改就诊人的结构
let isShow = ref<number>(0)

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
// 添加就诊人的回调
const changeContent = () => {
  isShow.value = 1
}
// 自定义事件
const changeScene = () => {
  isShow.value = 1
}
// 禁用日期
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
// 日期的快捷选项
const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]










</script>

<style scoped lang="scss">
.box-card {
  margin: 30px 0;

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
