<template>
  <div>
    <!-- 展示订单详情的结构 -->
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
          <span>{{ orderInfo.param?.orderStatusString }}</span>
        </el-tag>
        <div class="right">
          <img src="../../../../assets/images/code_login_wechat.png" alt="" />
          <div class="righttext">
            <span>微信<svg t="1688803791409" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2307" width="16" height="16">
                <path
                  d="M135.934972 64.303538l752.130056 0c39.559994 0 71.631434 32.069393 71.631434 71.629387l0 752.132102c0 39.559994-32.07144 71.631434-71.631434 71.631434l-752.130056 0c-39.562041 0-71.631434-32.07144-71.631434-71.631434L64.303538 135.932925C64.303538 96.372931 96.372931 64.303538 135.934972 64.303538z"
                  fill="#3CAF34" p-id="2308"></path>
                <path
                  d="M639.977743 396.113643c8.237615 0 16.389272 0.589424 24.471344 1.494027C642.456191 295.204395 532.9788 219.119533 408.005484 219.119533c-139.720182 0-254.162654 95.216595-254.162654 216.140689 0 69.826322 38.075177 127.117143 101.703333 171.585937l-25.419949 76.453253 88.851631-44.548612c31.79003 6.282077 57.301054 12.762675 89.027639 12.762675 7.975649 0 15.880689-0.398066 23.727401-1.013073-4.964058-16.981766-7.845689-34.777061-7.845689-53.255924C423.88822 486.210637 519.241938 396.113643 639.977743 396.113643L639.977743 396.113643zM501.526461 322.041624c21.701255 0 39.292911 17.59268 39.292911 39.294958s-17.591657 39.293935-39.292911 39.293935c-21.703301 0-39.294958-17.59268-39.294958-39.293935C462.231503 339.635327 479.825207 322.041624 501.526461 322.041624L501.526461 322.041624zM323.697333 401.423579c-21.701255 0-39.294958-17.59268-39.294958-39.293935 0-21.701255 17.593703-39.293935 39.294958-39.293935 21.703301 0 39.294958 17.59268 39.294958 39.293935C362.992291 383.829875 345.400634 401.423579 323.697333 401.423579L323.697333 401.423579zM870.157169 595.018785c0-101.612259-101.67775-184.441733-215.882815-184.441733-120.931257 0-216.172411 82.82845-216.172411 184.441733 0 101.788268 95.241154 184.436616 216.172411 184.436616 25.307386 0 50.839899-6.388501 76.260871-12.760628l69.716828 38.184671-19.119453-63.516616C832.150554 703.091176 870.157169 652.339282 870.157169 595.018785L870.157169 595.018785zM587.860758 566.534034c-15.45397 0-27.981285-12.530384-27.981285-27.983331 0-15.454994 12.527314-27.981285 27.981285-27.981285 15.45397 0 27.982308 12.527314 27.982308 27.981285C615.843066 554.004673 603.314729 566.534034 587.860758 566.534034L587.860758 566.534034zM727.581963 568.121182c-15.456017 0-27.982308-12.529361-27.982308-27.981285 0-15.456017 12.527314-27.981285 27.982308-27.981285 15.45397 0 27.982308 12.526291 27.982308 27.981285C755.565295 555.591821 743.035934 568.121182 727.581963 568.121182L727.581963 568.121182z"
                  fill="#FFFFFF" p-id="2309"></path>
              </svg>关注</span>
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
              {{ orderInfo.patientName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊日期</div>
              </template>
              {{ orderInfo.reserveDate }}-{{ orderInfo.reserveTime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊医院</div>
              </template>
              {{ orderInfo.hosname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊科室</div>
              </template>
              {{ orderInfo.depname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">医生职称</div>
              </template>
              {{ orderInfo.title }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">医事服务费</div>
              </template>
              <span style="color: red;">{{ orderInfo.amount }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">挂号订单</div>
              </template>
              {{ orderInfo.outTradeNo }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">挂号时间</div>
              </template>
              {{ orderInfo.createTime }}
            </el-descriptions-item>
          </el-descriptions>
          <div class="btn" v-if="orderInfo.orderStatus != -1">
            <el-popconfirm title="确定取消预约？" @confirm="cancel">
              <template #reference>
                <el-button>取消预约</el-button>
              </template>
            </el-popconfirm>
            <el-button type="primary" v-if="orderInfo.orderStatus == 0" @click="goPay">去支付</el-button>
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
              <span>1、请确认就诊人信息是否填写准确，若填写错误将无法取号就诊，损失由本人承担；</span>
              <span style="color: red">2、【取号】就诊需在{{ orderInfo.fetchTime }}前在医院取号，未取号视为爽约，该号不退不换；</span>
              <span>3、【退号】在{{ orderInfo.quitTime }}前可在线退号，逾期不可办理退号、退费；</span>
              <span>4、北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号</span>
              <span>5、请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。</span>
            </div>
          </el-card>
        </div>
      </div>
    </el-card>
    <!-- 展示支付二维码的结构 -->
    <el-dialog width="500px" v-model="dialogTableVisible" title="微信支付">
      <!-- 二维码图片 -->
      <div class="pay">
        <img src="../../../../assets/images/code_app.png" alt="">
        <span>请使用微信扫一扫</span>
        <span>扫描二维码支付</span>
      </div>

      <!-- 对话框底部插槽 -->
      <template #footer>
        <el-button @click="dialogTableVisible = false" type="primary">取 消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
//引入请求方法
import { getOrderInfo, cancelOrder } from "@/api/user/index.ts";
// 引入ts类型
import type { GetOrderInfoResponseData } from "@/api/user/type.ts";
// 引入路由
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";

// let $router = useRouter();
let $route = useRoute();
// 存储订单详情的数据
let orderInfo = ref<any>({})
// 控制支付对话框的显示隐藏
let dialogTableVisible = ref<boolean>(false)


onMounted(() => {
  getOrderInfoFn()
});

// 获取订单详情的方法
const getOrderInfoFn = async () => {
  // console.log($route.query);
  let id = $route.query.orderNo as unknown;
  // console.log(id);
  let res: GetOrderInfoResponseData = await getOrderInfo(id as number);
  // console.log(res);
  if (res.code === 200) {
    orderInfo.value = res.data
  }
};
// 取消预约的回调
// 订单的状态（orderStatus） -1:取消预约  0：已预约但未支付   1：已支付
const cancel = async () => {
  let id = $route.query.orderNo as unknown;
  try {
    await cancelOrder(id as number);
    getOrderInfoFn()
  } catch (error) {
    ElMessage.error("取消预约失败")
  }
};
// 点击去支付的回调
const goPay = () => {
  dialogTableVisible.value = true
}




</script>

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

::v-deep(.el-dialog__body) {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}

.pay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 20px;
  }

  span {
    line-height: 20px;
    color: #7f7f7f;
  }
}</style>
