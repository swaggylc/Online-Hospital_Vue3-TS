<template>
  <div class="bottom">
    <div class="content">
      <div class="left">赣ICP备11000994号-1 赣ICP备11000994号-2 &nbsp;&nbsp;&nbsp; 电话:0791-83897952</div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #999;

    .right {
      span {
        margin: 0px 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
