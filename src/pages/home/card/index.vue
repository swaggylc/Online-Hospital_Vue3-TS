<template>
  <el-card class="box-card" shadow="hover" @click="goDetail">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospitalInfo.hosname }}</div>
        <div class="tip">
          <div class="level">
            <svg
              t="1688371831463"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3246"
              width="16"
              height="16"
            >
              <path
                d="M693.333333 138.666667v149.333333h192v597.333333h-746.666666v-597.333333h192v-149.333333h362.666666z m128 213.333333h-618.666666v469.333333h618.666666v-469.333333z m-277.482666 85.184V554.666667H661.333333v64h-117.482666v117.482666h-64V618.666667h-117.482667v-64h117.482667v-117.482667h64zM629.333333 202.666667h-234.666666v85.333333h234.666666v-85.333333z"
                fill="#1677FF"
                p-id="3247"
              ></path>
            </svg>
            <span>{{ hospitalInfo.param.hostypeString }}</span>
          </div>
          <div class="time">
            <svg
              t="1688371928786"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4400"
              width="16"
              height="16"
            >
              <path
                d="M533.333333 96c229.76 0 416 186.24 416 416S763.093333 928 533.333333 928 117.333333 741.76 117.333333 512 303.573333 96 533.333333 96z m0 64C338.922667 160 181.333333 317.589333 181.333333 512S338.922667 864 533.333333 864 885.333333 706.410667 885.333333 512 727.744 160 533.333333 160z m32 116.608v220.992l163.2 144.554667-42.410666 47.893333-184.789334-163.626667v-249.813333h64z"
                fill="#1677FF"
                p-id="4401"
              ></path>
            </svg>
            <span>每天{{ hospitalInfo.bookingRule.releaseTime }}放号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
// 引入路由，创建路由实例
import { useRouter } from "vue-router";
// 接收父组件传递的数据
let props = defineProps(["hospitalInfo"]);
// 创建路由实例
const $router = useRouter();
// 点击医院卡片跳转到医院详情页面
const goDetail = () => {
  // console.log(props.hospitalInfo.hoscode);
  // 路由跳转
  $router.push({
    path: "/hospital",
    query: {
      hoscode: props.hospitalInfo.hoscode,
    },
  });
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  .left {
    width: 60%;
    .tip {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      color: #999;
      .level,
      .time {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
    }
  }
  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
