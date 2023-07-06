<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">北京人民医院</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="dot">·</div>
      <div class="hosdepartment">多发性硬化专科门诊</div>
    </div>
    <div class="center">
      <h4>2023年7月6日</h4>
      <div class="container">
        <div class="item" v-for="item in 6" :key="item">
            <div class="item_top">item_top</div>
            <div class="item_bottom">item_bottom</div>
        </div>
      </div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrap {
  .top {
    display: flex;
    color: #999;

    .line {
      width: 2px;
      height: 16px;
      background-color: #999;
      margin: 0 10px;
    }
    .dot {
      margin: 0 10px;
      line-height: 16px;
    }
  }
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h4{
        font-weight: bold;
        color: #999;
    }
    .container{
        display: flex;
        margin-top: 50px;
        width: 100%;
        margin-bottom: 30px;
        .item{
            flex: 1;
            border: 1px solid skyblue;
            margin: 0 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .item_top{
                height: 30px;
                background-color: #e8f2ff;
                text-align: center;
                line-height: 30px;
            }
            .item_bottom{
                height: 60px;
                text-align: center;
                line-height: 60px;
            }
        }
    }
  }
}
</style>
