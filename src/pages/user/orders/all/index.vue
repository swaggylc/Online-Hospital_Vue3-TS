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
                <el-select placeholder="请选择就诊人">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择订单状态">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <!-- 展示订单数据的表格 -->
        <el-table height="250" style="width: 100%;margin: 20px 0;" :border="true">
            <el-table-column prop="date" label="就诊时间" />
            <el-table-column prop="name" label="医院" />
            <el-table-column prop="address" label="科室" width="200" />
            <el-table-column prop="address" label="医生" />
            <el-table-column prop="address" label="医事服务费" />
            <el-table-column prop="address" label="就诊人" />
            <el-table-column prop="address" label="订单状态" />
            <el-table-column prop="address" label="操作" />
        </el-table>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout=" jumper, prev, pager, next,->,sizes,total" :total="400" :background="true" />
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let pageNo = ref<number>(1)
let pageSize = ref<number>(10)

</script>

<style scoped></style>