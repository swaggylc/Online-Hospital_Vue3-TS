<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>挂号订单</span>
            </div>
        </template>
        <!-- 提供用户选择的下拉菜单 -->
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="就诊人">
                <el-select placeholder="请选择就诊人" v-model="patientId" @change="changePatient">
                    <el-option label="全部" value=""></el-option>
                    <el-option :label="item.name" :value="item.id" v-for="item in patientList" :key="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择订单状态" v-model="orderStatus" @change="changeStatus">
                    <el-option label="全部" value=""></el-option>
                    <el-option :label="item.comment" :value="item.status" v-for="item in orderStatusList"
                        :key="item.status" />
                </el-select>
            </el-form-item>
        </el-form>
        <!-- 展示订单数据的表格 -->
        <el-table style="width: 100%;margin: 20px 0;" :border="true" :data="orderList" max-height="500">
            <el-table-column prop="reserveDate" label="就诊时间" />
            <el-table-column prop="hosname" label="医院" />
            <el-table-column prop="depname" label="科室" width="200" />
            <el-table-column prop="title" label="医生" />
            <el-table-column prop="amount" label="医事服务费" />
            <el-table-column prop="patientName" label="就诊人" />
            <el-table-column prop="param.orderStatusString" label="订单状态" />
            <el-table-column label="操作">
                <template #="{ row }">
                    <el-button type="text" @click="goDetail(row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout=" jumper, prev, pager, next,->,sizes,total" :total="total" :background="true"
            @current-change="changePage" @size-change="changeSize" />
    </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 引入获取订单的方法
import { getOrderList, getPatientList, getOrderStatus } from '@/api/user/index.ts'
// 引入订单列表返回的ts数据类型
import type { GetOrderStatusResponseData, GetOrderListResponseData, records, GetPatientListResponseData, PatientListData, OrderStatusData } from '@/api/user/type.ts'
import { useRouter } from 'vue-router';
let $router = useRouter()


let pageNo = ref<number>(1)     // 当前页码
let pageSize = ref<number>(10)  // 每页显示条数
let patientId = ref<string>('')  // 就诊人id
let orderStatus = ref<string>('') // 订单状态
let orderList = ref<records>([]) // 订单列表
let total = ref<number>(0) // 订单总数
let patientList = ref<PatientListData>([]) // 就诊人列表
let orderStatusList = ref<OrderStatusData>([]) // 订单状态列表


onMounted(() => {
    GetOrderList()
    GetPatientList()
    GetOrderStatus()
})

// 获取订单列表的方法
const GetOrderList = async () => {
    let res: GetOrderListResponseData = await getOrderList(pageNo.value, pageSize.value, patientId.value, orderStatus.value)
    // console.log(res);
    if (res.code === 200) {
        orderList.value = res.data.records
        total.value = res.data.total
    }
}

// 点击详情按钮的回调
const goDetail = (row: any) => {
    // console.log(row);
    $router.push({
        path: '/user/orders/detail',
        query: {
            orderId: row.id
        }
    })
}
// 页码改变的回调
const changePage = (val: number) => {
    pageNo.value = val
    GetOrderList()
}
// 每页显示条数改变的回调
const changeSize = (val: number) => {
    // console.log(val);
    pageSize.value = val
    GetOrderList()
}
// 获取所有就诊人的方法
const GetPatientList = async () => {
    let res: GetPatientListResponseData = await getPatientList()
    // console.log('所有就诊人信息',res);
    if (res.code === 200) {
        patientList.value = res.data
    }
}
// 获取订单状态的方法
const GetOrderStatus = async () => {
    let res: GetOrderStatusResponseData = await getOrderStatus()
    // console.log('订单状态', res);
    if (res.code === 200) {
        orderStatusList.value = res.data
    }
}
// 选择就诊人的回调
const changePatient = (val: string) => {
    // console.log(val);
    patientId.value = val
    GetOrderList()
}
// 选择订单状态的回调
const changeStatus = (val: string) => {
    // console.log(val);
    orderStatus.value = val
    GetOrderList()
}




</script>

<style scoped></style>