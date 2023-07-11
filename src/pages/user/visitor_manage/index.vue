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
          <el-input placeholder="请输入用户姓名" v-model="addPatientInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型" v-model="addPatientInfo.certificatesType">
            <el-option :label="item.name" :value="item.value" v-for="item in certificateType" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input placeholder="请输入证件号码" v-model="addPatientInfo.certificatesNo"></el-input>
        </el-form-item>
        <el-form-item label="用户性别">
          <el-radio-group v-model="addPatientInfo.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" value-format="YYYY-MM-DD" placeholder="请选择你的出生日期" :disabled-date="disabledDate"
            :shortcuts="shortcuts" v-model="addPatientInfo.birthdate" />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input placeholder="请输入手机号码" v-model="addPatientInfo.phone"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">建档信息(完善后部分医院首次就诊不用排队建档)</el-divider>
      <el-form style="width: 70%; margin: 10px auto;">
        <el-form-item label="婚姻状况">
          <el-radio-group v-model="addPatientInfo.isMarry">
            <el-radio :label="0">未婚</el-radio>
            <el-radio :label="1">已婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自费/医保">
          <el-radio-group v-model="addPatientInfo.isInsure">
            <el-radio :label="0">自费</el-radio>
            <el-radio :label="1">医保</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前住址">
          <el-cascader placeholder="请选择住址" :props="props" v-model="addPatientInfo.addressSelected" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input placeholder="请输入详细地址" v-model="addPatientInfo.address"></el-input>
        </el-form-item>
      </el-form>
      <el-divider content-position="left">用户信息(选填)</el-divider>
      <el-form style="width: 70%; margin: 10px auto;" label-width="70px">
        <el-form-item label="用户姓名">
          <el-input placeholder="请输入联系人姓名" v-model="addPatientInfo.contactsName"></el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-select placeholder="请选择证件类型" v-model="addPatientInfo.contactsCertificatesType">
            <el-option :label="item.name" :value="item.value" v-for="item in certificateType" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码">
          <el-input placeholder="请输入证件号码" v-model="addPatientInfo.contactsCertificatesNo"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input placeholder="请输入手机号码" v-model="addPatientInfo.contactsPhone"></el-input>
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="clearForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>                                                                                                                                      
                                            
<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue';
import { User } from '@element-plus/icons-vue'
// 引入方法
import { getPatientList, getCertificateType, getCityList, saveOrUpdatePatient } from '@/api/user/index.ts'
// 引入ts类型
import type { GetPatientListResponseData, PatientListData, GetCertificateTypeResponseData, CertificateTypeData, PatientParams } from '@/api/user/type.ts'
import { ElMessage, type CascaderProps } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
let $route = useRoute()
let $router = useRouter()
let patientList = ref<PatientListData>([])  // 就诊人列表
// 决定是否显示添加/修改就诊人的结构
let isShow = ref<number>(0)
// 证件类型
let certificateType = ref<CertificateTypeData>([])
// 收集新增就诊人的信息
let addPatientInfo = reactive<PatientParams>({
  name: '',
  certificatesType: '',
  certificatesNo: '',
  sex: 0,
  birthdate: '',
  phone: '',
  isMarry: 0,
  isInsure: 0,
  addressSelected: [],
  address: '',
  contactsName: '',
  contactsCertificatesType: '',
  contactsCertificatesNo: '',
  contactsPhone: '',
})

onMounted(() => {
  // 获取就诊人列表
  getPatientListData()
  // 获取证件类型
  GetCertificateTypeData()
  // 判断是否从预约挂号就诊人列表跳转过来的
  isFromPatientList()
  // 判断是否是从预约挂号就诊人列表修改就诊人
  // isFromPatientListUpdate()
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
const changeScene = (user: PatientParams) => {
  // console.log(user);
  isShow.value = 1
  // 将用户信息赋值给addPatientInfo
  Object.assign(addPatientInfo, user)
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
// 获取用户证件类型的方法
const GetCertificateTypeData = async () => {
  let res: GetCertificateTypeResponseData = await getCertificateType('certificatesType')
  // console.log("证件类型", res)
  if (res.code === 200) {
    certificateType.value = res.data
  }
}
// 地址的级联选择器数据
const props: CascaderProps = {
  // 数据懒加载
  lazy: true,
  // 懒加载的方法
  async lazyLoad(node, resolve) {
    // console.log("node", node);

    let res: any = await getCityList(node.data?.value as string || '86')
    // console.log("城市列表", res)
    // 整理数据
    let showData = res.data.map((item: any) => {
      return {
        value: item.value,
        label: item.name,
        leaf: !item.hasChildren
      }
    })
    // console.log("整理后的数据",showData)
    // 将数据返回给级联选择器
    resolve(showData)
  }
}
// 点击提交按钮的回调
const submit = async () => {
  // console.log("提交的数据", addPatientInfo)
  try {
    await saveOrUpdatePatient(addPatientInfo)
    // console.log("提交的结果", res);
    ElMessage.success(addPatientInfo.id ? '修改成功' : '添加成功')
    if ($route.query.type) {
      // 跳转到预约挂号页面
      $router.back()
    } else {
      // 切换到就诊人列表
      isShow.value = 0
      // 重新获取就诊人列表
      getPatientListData()
      // 清空表单
      clearForm()
    }
  } catch (error) {
    ElMessage.error(addPatientInfo.id ? '修改失败' : '添加失败')
  }
}
// 清空表单的方法
const clearForm = () => {
  for (let key in addPatientInfo) {
    //@ts-ignore
    addPatientInfo[key] = ''
  }
  delete addPatientInfo.id
}
// 判断是否从预约挂号就诊人列表跳转过来的
const isFromPatientList = () => {
  // console.log($route.query);
  if ($route.query.type == 'add') {
    isShow.value = 1
  }
  if ($route.query.type == 'edit') {
    isShow.value = 1
  }
}
// 判断是否是从预约挂号就诊人列表修改就诊人
// const isFromPatientListUpdate = () => {
//   if ($route.query.type == 'edit') {

//     // 获取就诊人的id
//     let id = $route.query.id as string
//     // 根据id获取就诊人的信息
//     patientList.value.forEach((item) => {
//       if (item.id == id) {
//         Object.assign(addPatientInfo, item)
//       }
//     })
//     isShow.value = 1
//   }
// }
// 监听就诊人列表的变化
watch(patientList, (newVal) => {
  // console.log("监听就诊人列表", newVal)
  if ($route.query.type == 'edit') {

    // 获取就诊人的id
    let id = $route.query.id as string
    // 根据id获取就诊人的信息
    newVal.forEach((item) => {
      if (item.id == id) {
        Object.assign(addPatientInfo, item)
      }
    })
  }
})


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
