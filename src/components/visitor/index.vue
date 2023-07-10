<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <div class="type">{{ props.user.isInsure == 1 ? "医保" : "自费" }}</div>
                <div class="name">{{ props.user.name }}</div>
            </div>
            <div class="right">
                <el-button type="primary" :icon="Edit" circle />
                <el-button type="danger" :icon="Delete" circle v-if="$route.path=='/user/visitor_manage'" />
            </div>
        </div>
        <div class="content">
            <div class="c_left">
                <span>证件类型：</span>
                <span>证件号码：</span>
                <span>用户性别：</span>
                <span>出生日期：</span>
                <span>手机号码：</span>
                <span>婚姻状况：</span>
                <span>当前住址：</span>
                <span>详细住址：</span>
            </div>
            <div class="c_right">
                <span>{{ props.user.param.certificatesTypeString }}</span>
                <span>{{ props.user.contactsCertificatesNo }}</span>
                <span>{{ props.user.sex == 1 ? "男" : "女" }}</span>
                <span>{{ props.user.birthdate }}</span>
                <span>{{ props.user.phone }}</span>
                <span>{{ props.user.isMarry == 1 ? "已婚" : "未婚" }}</span>
                <span>{{ props.user.param.provinceString }}-{{
                    props.user.param.districtString
                }}</span>
                <span>{{ props.user.address }}</span>
            </div>
            <!-- 红色已选择的盒子 -->
            <transition name="sure">
                <div class="sure" v-if="props.index == props.userIndex">已选择</div>
            </transition>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Edit,Delete } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
let props = defineProps(["user", "index", "userIndex"]);

let $route = useRoute();

// 根据路由判断是否显示删除按钮
// console.log('$route.path',$route.path);


</script>
  
<style scoped lang="scss">
.container {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    height: 420px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);

    .top {
        height: 15%;
        display: flex;
        justify-content: space-between;
        background-color: #e8e8e8;
        padding: 10px;

        .left {
            display: flex;
            align-items: center;

            .type {
                margin-right: 5px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                background-color: #fff;
                margin-left: 10px;
                border-radius: 5px;
                padding: 0 5px;
            }

            .name {
                color: #a4a4a4;
            }
        }

        .right {
            display: flex;
            align-items: center;
        }
    }

    .content {
        position: relative;
        padding: 15px;
        display: flex;

        .c_left {
            display: flex;
            flex-direction: column;

            span {
                line-height: 25px;
                margin-top: 10px;
                margin-left: 5px;
                width: 80px;
            }
        }

        .c_right {
            display: flex;
            flex-direction: column;

            span {
                line-height: 25px;
                margin-top: 10px;
                font-size: 15px;
                color: #7f7f7f;
            }
        }

        .sure {
            position: absolute;
            width: 200px;
            height: 200px;
            color: red;
            border-radius: 50%;
            border: 1px dashed red;
            text-align: center;
            line-height: 200px;
            font-size: 24px;
            transform: rotate(45deg);
            top: 50%;
            left: 50%;
            margin-left: -100px;
            margin-top: -100px;
            opacity: 0.6;
        }

        .sure-enter-from {
            transform: scale(1);
        }

        .sure-enter-active {
            transition: all 0.5s;
        }

        .sure-enter-to {
            transform: scale(1.2);
        }
    }
}</style>
  