<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <div class="type">医保</div>
        <div class="name">张三</div>
      </div>
      <div class="right">
        <el-button type="primary" :icon="Edit" circle />
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
        <span>身份证</span>
        <span>362203333333333333</span>
        <span>男</span>
        <span>2001-01-01</span>
        <span>15111111111</span>
        <span>未婚</span>
        <span>江西省宜春市</span>
        <span>江西省宜春市xxxxxxx</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.container {
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  height: 400px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
  .top {
    height: 20%;
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
    padding: 15px;
    display: flex;
    .c_left {
      span {
        display: flex;
        flex-direction: column;
        line-height: 25px;
        margin-top: 10px;
        margin-left: 5px;
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
  }
}
</style>
