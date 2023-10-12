<!--
 * @Author: lucan lucanlc0417@gmail.com
 * @Date: 2023-07-04 20:35:15
 * @LastEditors: lucan lucanlc0417@gmail.com
 * @LastEditTime: 2023-10-12 20:21:43
 * @FilePath: \Online Hospital\src\pages\hospital\register\index.vue
 * @Description: 预约挂号组件
 * 
 * Copyright (c) 2023 by lucan, All Rights Reserved. 
-->
<template>
  <div class="register">
    <div class="top">
      <div class="title">
        {{ hospitalStore.hospitalInfo.hospital?.hosname }}
      </div>
      <div class="level">
        <svg
          t="1688519868578"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3193"
          width="16"
          height="16"
        >
          <path
            d="M739.7 899.7H435.1c-7.6 0-13.8-6.2-13.8-13.8s6.2-13.8 13.8-13.8h304.6c10.1 0 19-6.8 21.5-16.6l88.4-341.6c2.1-8.2 0.4-16.6-4.7-23.2-5.1-6.6-12.8-10.4-21.1-10.4h-225c-17.7 0-33.7-9-42.7-24.2-9.1-15.3-9.5-33.9-1-49.6 11.8-21.9 19.1-43.4 21.8-63.8 5.5-43.1 6.5-121.3-6.2-155.9-5.7-16.1-11.3-31.6-38-33.3-29.7 2.3-34.1 20.1-37 31.9-2 8.2-4.1 17.6-6.3 27.9-9 41.2-21.4 97.5-44.6 138.1-44.5 77.6-143.1 124.9-146.2 126.9-6.4 4-15 2.2-19.1-4.2-4.1-6.5-2.2-15 4.2-19.1 0.7-0.5 96.1-45.7 137.1-117.3 21.2-36.9 33-90.9 41.6-130.3 2.3-10.5 4.4-20.2 6.5-28.5 3.3-13.4 12-49 63.7-52.9 46.7 2.9 57.9 34.2 63.3 49.3 17.2 47 13 135.3 8.4 171-3 23.8-11.4 48.5-24.9 73.4-3.8 7.1-3.7 15.5 0.4 22.3 4.1 6.8 11 10.7 19 10.7h225.1c16.9 0 32.6 7.7 43 21.1 10.4 13.4 13.8 30.5 9.6 46.9L788 862.2c-5.7 22.2-25.6 37.5-48.3 37.5z"
            fill="#3259CE"
            p-id="3194"
          ></path>
          <path
            d="M281.3 900.2h-92.1c-22.9 0-41.5-18.6-41.5-41.5V494.4c0-22.9 18.6-41.5 41.5-41.5h92.1c22.9 0 41.5 18.6 41.5 41.5v364.3c0 22.9-18.6 41.5-41.5 41.5z m-92.1-419.6c-7.6 0-13.8 6.2-13.8 13.8v364.3c0 7.6 6.2 13.8 13.8 13.8h92.1c7.6 0 13.8-6.2 13.8-13.8V494.4c0-7.6-6.2-13.8-13.8-13.8h-92.1z"
            fill="#3259CE"
            p-id="3195"
          ></path>
        </svg>
        <span>{{
          hospitalStore.hospitalInfo.hospital?.param.hostypeString
        }}</span>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="left">
        <img
          :src="
            `data:image/jpeg;base64,` +
            hospitalStore.hospitalInfo.hospital?.logoData
          "
          alt=""
        />
      </div>
      <div class="right">
        <div>挂号规则</div>
        <div class="time">
          <span
            >预约周期:{{
              hospitalStore.hospitalInfo.bookingRule?.cycle
            }}天</span
          >
          <span
            >放号时间:{{
              hospitalStore.hospitalInfo.bookingRule?.releaseTime
            }}</span
          >
          <span
            >停挂时间:{{
              hospitalStore.hospitalInfo.bookingRule?.stopTime
            }}</span
          >
        </div>
        <div class="address">
          <span
            >具体地址:{{
              hospitalStore.hospitalInfo.hospital?.param.fullAddress
            }}</span
          >
        </div>
        <div class="route">
          <span>规划路线:{{ hospitalStore.hospitalInfo.hospital?.route }}</span>
        </div>
        <div class="quitTime">
          <span
            >退号时间:就诊前一工作日{{
              hospitalStore.hospitalInfo.bookingRule?.quitTime
            }}前可取消</span
          >
        </div>
        <div class="rule">
          <p>医院预约规则：</p>
          <span
            v-for="(item, index) in hospitalStore.hospitalInfo.bookingRule
              ?.rule"
            :key="item"
            >{{ index + 1 }}：{{ item }}<br
          /></span>
        </div>
      </div>
    </div>
    <!-- 展示医院详细科室 -->
    <div class="department">
      <div class="leftNav">
        <ul>
          <li
            v-for="(item, index) in hospitalStore.departmentArr"
            :key="item.depcode"
            :class="{ active: index == currentIndex }"
            @click="changeIndex(index)"
          >
            {{ item.depname }}
          </li>
        </ul>
      </div>
      <div class="rightContent">
        <!-- 右侧 -->
        <div
          class="showDepartment"
          v-for="item in hospitalStore.departmentArr"
          :key="item.depcode"
        >
          <h4 class="current">{{ item.depname }}</h4>
          <!-- 展示小科室 -->
          <ul>
            <li
              v-for="department in item.children"
              :key="department.depcode"
              @click="showLogin(department)"
            >
              {{ department.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 引入医院详情的仓库信息
// 引入路由
import { useRouter, useRoute } from "vue-router";
// 创建路由对象
const $router = useRouter();
const $route = useRoute();
import useDetailStore from "@/store/modules/hospitalDetail.ts";
// 获取user仓库的数据
// import useUserStore from "@/store/modules/user.ts";
// let userStore = useUserStore();
let hospitalStore = useDetailStore();
// 控制科室高亮的响应式数据
let currentIndex = ref<number>(0);
// 左侧导航栏点击事件
const changeIndex = (index: number) => {
  currentIndex.value = index;
  // 点击左侧导航，获取右侧对应的科室的标题
  let title = document.querySelectorAll(".current");
  // 滚动到对应的标题
  title[currentIndex.value].scrollIntoView({
    behavior: "smooth", // 平滑滚动
    block: "start", // 顶部对齐
    inline: "nearest", // 尽可能靠近
  });
};
// 点击科室的回调
const showLogin = (item: any) => {
  // userStore.visible = true;
  // 点击某一个科室，进入到相应的预约挂号的详情页面
  // console.log(item);
  // 跳转到预约挂号的详情页面
  // console.log($route.query.hoscode);
  let hospitalCode = $route.query.hoscode;
  let departmentCode = item.depcode;
  $router.push({
    path: "/hospital/register_step1",
    query: {
      hoscode: hospitalCode,
      depcpde: departmentCode,
    },
  });
};
</script>

<style scoped lang="scss">
.register {
  .top {
    display: flex;
    .title {
      font-size: 26px;
    }
    .level {
      color: #999;
      margin-left: 20px;
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }
  .content {
    display: flex;
    margin-top: 30px;
    span {
      color: #999;
    }
    .left {
      width: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      margin-left: 20px;
      .time {
        margin-top: 10px;
        span {
          margin-right: 20px;
        }
      }
      .address {
        margin-top: 10px;
      }
      .route {
        margin-top: 10px;
      }
      .quitTime {
        margin-top: 10px;
      }
      .rule {
        margin-top: 10px;
        p {
          margin-bottom: 10px;
        }
        span {
          line-height: 25px;
        }
      }
    }
  }
  .department {
    width: 100%;
    height: 500px;
    display: flex;
    margin-top: 50px;
    .leftNav {
      width: 80px;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        background-color: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li {
          flex: 1;
          text-align: center;
          color: #7f7f7f;
          font-size: 14px;
          line-height: 41.67px;
          cursor: pointer;
          &.active {
            border-left: 1px solid red;
            background-color: #fff;
            color: red;
          }
        }
      }
    }
    .rightContent {
      flex: 1;
      margin-left: 20px;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .showDepartment {
        h4 {
          background-color: rgb(248, 248, 248);
          color: #7f7f7f;
          font-weight: bold;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 33%;
            color: #7f7f7f;
            line-height: 30px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
