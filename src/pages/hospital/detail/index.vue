<!--
 * @Author: lucan lucanlc0417@gmail.com
 * @Date: 2023-07-04
 * @LastEditors: lucan lucanlc0417@gmail.com
 * @LastEditTime: 2023-10-12
 * @FilePath: \Online Hospital\src\pages\hospital\detail\index.vue
 * @Description: 详情组件
 * Copyright (c) 2023 by lucan - Tanikawa, All Rights Reserved.  
-->
<template>
  <div class="detail">
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
        <div class="address">
          <span>
            具体地址：{{
              hospitalStore.hospitalInfo.hospital?.param.fullAddress
            }}</span
          >
        </div>
        <div class="route">
          <span
            >规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}</span
          >
        </div>
      </div>
    </div>
    <div class="intro" v-if="hospitalStore.hospitalInfo.hospital?.intro ">
      <p>医院介绍</p>
      <br />
      <span>{{ hospitalStore.hospitalInfo.hospital?.intro }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入医院详情的仓库信息
import useDetailStore from "@/store/modules/hospitalDetail.ts";
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.detail {
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
      .address {
        margin-top: 10px;
      }
      .route {
        margin-top: 10px;
        span {
          line-height: 20px;
        }
      }
    }
  }
  .intro {
    margin-top: 50px;
    p {
      font-size: 20px;
    }
    span {
      color: #999;
      margin-top: 10px;
      line-height: 20px;
    }
  }
}
</style>
