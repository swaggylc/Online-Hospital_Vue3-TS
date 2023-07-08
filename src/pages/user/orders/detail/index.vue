<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>挂号详情</span>
      </div>
    </template>
    <!-- 卡片身体部分 -->
    <div class="top">
      <el-tag class="ml-2" type="success">
        <span>✔ </span>
        <span>预约成功，待支付</span>
      </el-tag>
      <div class="right">
        <img src="../../../../assets/images/code_login_wechat.png" alt="" />
        <div class="righttext">
          <span
            >微信<svg
              t="1688803791409"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2307"
              width="16"
              height="16"
            >
              <path
                d="M135.934972 64.303538l752.130056 0c39.559994 0 71.631434 32.069393 71.631434 71.629387l0 752.132102c0 39.559994-32.07144 71.631434-71.631434 71.631434l-752.130056 0c-39.562041 0-71.631434-32.07144-71.631434-71.631434L64.303538 135.932925C64.303538 96.372931 96.372931 64.303538 135.934972 64.303538z"
                fill="#3CAF34"
                p-id="2308"
              ></path>
              <path
                d="M639.977743 396.113643c8.237615 0 16.389272 0.589424 24.471344 1.494027C642.456191 295.204395 532.9788 219.119533 408.005484 219.119533c-139.720182 0-254.162654 95.216595-254.162654 216.140689 0 69.826322 38.075177 127.117143 101.703333 171.585937l-25.419949 76.453253 88.851631-44.548612c31.79003 6.282077 57.301054 12.762675 89.027639 12.762675 7.975649 0 15.880689-0.398066 23.727401-1.013073-4.964058-16.981766-7.845689-34.777061-7.845689-53.255924C423.88822 486.210637 519.241938 396.113643 639.977743 396.113643L639.977743 396.113643zM501.526461 322.041624c21.701255 0 39.292911 17.59268 39.292911 39.294958s-17.591657 39.293935-39.292911 39.293935c-21.703301 0-39.294958-17.59268-39.294958-39.293935C462.231503 339.635327 479.825207 322.041624 501.526461 322.041624L501.526461 322.041624zM323.697333 401.423579c-21.701255 0-39.294958-17.59268-39.294958-39.293935 0-21.701255 17.593703-39.293935 39.294958-39.293935 21.703301 0 39.294958 17.59268 39.294958 39.293935C362.992291 383.829875 345.400634 401.423579 323.697333 401.423579L323.697333 401.423579zM870.157169 595.018785c0-101.612259-101.67775-184.441733-215.882815-184.441733-120.931257 0-216.172411 82.82845-216.172411 184.441733 0 101.788268 95.241154 184.436616 216.172411 184.436616 25.307386 0 50.839899-6.388501 76.260871-12.760628l69.716828 38.184671-19.119453-63.516616C832.150554 703.091176 870.157169 652.339282 870.157169 595.018785L870.157169 595.018785zM587.860758 566.534034c-15.45397 0-27.981285-12.530384-27.981285-27.983331 0-15.454994 12.527314-27.981285 27.981285-27.981285 15.45397 0 27.982308 12.527314 27.982308 27.981285C615.843066 554.004673 603.314729 566.534034 587.860758 566.534034L587.860758 566.534034zM727.581963 568.121182c-15.456017 0-27.982308-12.529361-27.982308-27.981285 0-15.456017 12.527314-27.981285 27.982308-27.981285 15.45397 0 27.982308 12.526291 27.982308 27.981285C755.565295 555.591821 743.035934 568.121182 727.581963 568.121182L727.581963 568.121182z"
                fill="#FFFFFF"
                p-id="2309"
              ></path></svg
            >关注</span
          >
          <span>"北京114快速预约挂号"</span>
          <span>"快速查看预约信息"</span>
        </div>
      </div>
    </div>
    <!-- 订单详情底部结构 -->
    <div class="bottom">
      <div class="b_left">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊人信息</div>
            </template>
            张三
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊日期</div>
            </template>
            2023-7-7-15:30
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊医院</div>
            </template>
            北京人民医院
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊科室</div>
            </template>
            多发性骨髓瘤科
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生职称</div>
            </template>
            副主任医师
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医事服务费</div>
            </template>
            100元
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">挂号订单</div>
            </template>
            1000100010001
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">挂号时间</div>
            </template>
            2023-7-6-16:00
          </el-descriptions-item>
        </el-descriptions>
        <div class="btn">
          <el-button>取消预约</el-button>
          <el-button type="primary">去支付</el-button>
        </div>
      </div>
      <div class="b_right">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>注意事项</span>
            </div>
          </template>
          <!-- 卡片身体 -->
          <div class="notice">
            <span
              >1、请确认就诊人信息是否填写准确，若填写错误将无法取号就诊，损失由本人承担；</span
            >
            <span style="color: red;"
              >2、【取号】就诊当天需在09：00前在医院取号，未取号视为爽约，该号不退不换；</span
            >
            <span
              >3、【退号】在就诊前一天15：30前可在线退号，逾期不可办理退号、退费；</span
            >
            <span
              >4、北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号</span
            >
            <span
              >5、请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。</span
            >
          </div>
        </el-card>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box-card {
  .card-header {
    color: #7f7f7f;
    font-size: 20px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 15px;
    .right {
      display: flex;
      img {
        width: 60px;
        height: 60px;
        margin-right: 5px;
      }
      .righttext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #7f7f7f;
        font-size: 12px;
        line-height: 18px;
        span {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .b_left {
      flex: 4;
      margin-right: 20px;
      .btn {
        margin-top: 20px;
      }
    }
    .b_right {
      flex: 6;
      .box-card {
        .notice {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          color: #7f7f7f;
          margin: 10px 0;
          span {
            margin: 5px 0;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
