<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <div class="dot">·</div>
      <div class="hosdepartment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h4>{{ workData.baseMap?.workDateString }}</h4>
      <div class="container">
        <div
          class="item"
          v-for="item in workData.bookingScheduleList"
          :key="item"
          :class="{
            active: item.status == -1 || item.availableNumber == -1,
            current: item.workDate == workTime.workDate,
          }"
          @click="changeTime(item)"
        >
          <div class="item_top">{{ item.workDate }} {{ item.dayOfWeek }}</div>
          <div class="item_bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{
                item.availableNumber == -1
                  ? "预约已满"
                  : `余${item.availableNumber}号`
              }}
            </div>
            <div v-if="item.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination
        v-model:current-page="pageNo"
        layout="prev, pager, next"
        :total="workData.total"
      />
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 即将放号 -->
      <div class="will" v-if="workTime.status == 1">
        <span>放号时间：</span>
        <p>{{ workTime?.workDate }}-{{ workData.baseMap?.releaseTime }}</p>
      </div>
      <!-- 医生结构 -->
      <div class="doctor" v-else>
        <!-- 上午 -->
        <div class="morning">
          <!-- 号源 -->
          <div class="tip">
            <svg
              t="1688696740625"
              class="icon"
              viewBox="0 0 1195 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2334"
              width="32"
              height="32"
            >
              <path
                d="M335.591467 699.733333c-83.2-42.666667-142.933333-128-142.933334-230.4 0-140.8 115.2-256 256-256s256 115.2 256 256v23.466667c-29.866667-8.533333-59.733333-12.8-85.333333-8.533333V469.333333c0-93.866667-76.8-170.666667-170.666667-170.666666s-170.666667 76.8-170.666666 170.666666c0 66.133333 38.4 125.866667 96 153.6-14.933333 19.2-27.733333 42.666667-38.4 76.8z m-40.533334 66.133334l4.266667-10.666667c4.266667-12.8 14.933333-21.333333 25.6-25.6-2.133333 8.533333-4.266667 19.2-6.4 27.733333-8.533333 2.133333-14.933333 6.4-23.466667 8.533334zM452.9248 0c23.466667 0 42.666667 19.2 42.666667 42.666667v85.333333c0 23.466667-19.2 42.666667-42.666667 42.666667s-42.666667-19.2-42.666667-42.666667V42.666667c0-23.466667 19.2-42.666667 42.666667-42.666667zM747.3248 106.666667c17.066667 14.933333 21.333333 42.666667 4.266667 59.733333l-55.466667 66.133333c-14.933333 17.066667-42.666667 21.333333-59.733333 4.266667s-21.333333-42.666667-4.266667-59.733333l55.466667-66.133334c14.933333-17.066667 42.666667-19.2 59.733333-4.266666z m157.866667 273.066666c4.266667 23.466667-10.666667 44.8-34.133334 49.066667l-83.2 14.933333c-23.466667 4.266667-44.8-10.666667-49.066666-34.133333-4.266667-23.466667 10.666667-44.8 34.133333-49.066667l83.2-14.933333c21.333333-4.266667 44.8 10.666667 49.066667 34.133333zM56.1248 686.933333c-12.8-21.333333-4.266667-46.933333 14.933333-57.6l74.666667-42.666666c21.333333-12.8 46.933333-4.266667 57.6 14.933333s4.266667 46.933333-14.933333 57.6l-74.666667 42.666667c-19.2 12.8-46.933333 6.4-57.6-14.933334zM0.658133 379.733333c4.266667-23.466667 25.6-38.4 49.066667-34.133333l83.2 14.933333c23.466667 4.266667 38.4 25.6 34.133333 49.066667-4.266667 23.466667-25.6 38.4-49.066666 34.133333l-83.2-14.933333c-21.333333-4.266667-38.4-25.6-34.133334-49.066667zM158.5248 106.666667c17.066667-14.933333 44.8-12.8 59.733333 4.266666l55.466667 66.133334c14.933333 17.066667 12.8 44.8-4.266667 59.733333-17.066667 14.933333-44.8 12.8-59.733333-4.266667L154.258133 166.4c-17.066667-17.066667-14.933333-44.8 4.266667-59.733333z"
                fill="#20A0FF"
                p-id="2335"
              ></path>
              <path
                d="M939.3248 576c140.8 0 256 113.066667 256 253.866667 0 70.4-29.866667 136.533333-81.066667 183.466666l-12.8 10.666667H111.591467l-10.666667-25.6c-10.666667-23.466667-17.066667-51.2-17.066667-76.8 0-106.666667 85.333333-192 192-196.266667 32-157.866667 174.933333-277.333333 343.466667-277.333333 108.8 0 209.066667 49.066667 275.2 132.266667 17.066667-2.133333 29.866667-4.266667 44.8-4.266667z m-115.2 49.066667c-49.066667-57.6-123.733333-91.733333-202.666667-91.733334-138.666667 0-253.866667 106.666667-264.533333 241.066667l-4.266667 49.066667-46.933333-8.533334c-8.533333-2.133333-14.933333-2.133333-23.466667-2.133333-61.866667 0-113.066667 49.066667-113.066666 110.933333 0 6.4 0 12.8 2.133333 17.066667h896c27.733333-29.866667 42.666667-68.266667 42.666667-108.8 0-91.733333-76.8-166.4-170.666667-168.533333-40.533333 0-74.666667 34.133333-74.666667 74.666666s34.133333 74.666667 74.666667 74.666667h8.533333c4.266667 0 8.533333-2.133333 12.8-4.266667 2.133333-2.133333 6.4-4.266667 8.533334-6.4 17.066667-17.066667 42.666667-17.066667 59.733333 0 17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-19.2 17.066667-32 23.466666-14.933333 8.533333-32 12.8-51.2 12.8h-8.533333-2.133334c-87.466667 0-160-72.533333-160-160 4.266667-44.8 21.333333-85.333333 49.066667-113.066666z"
                fill="#9AD4FF"
                p-id="2336"
              ></path>
            </svg>
            <span>上午号源</span>
          </div>
          <!-- 医生信息 -->
          <div
            class="docInfo"
            v-for="item in morningDoc"
            :key="item.id"
            v-if="workTime?.status != -1"
          >
            <div class="info_left">
              <div class="left_top">
                <span>{{ item.title }}</span>
                <span>|</span>
                <span>{{ item.docname }}</span>
              </div>
              <div class="left_bottom">
                <span>{{ item.skill }}</span>
              </div>
            </div>
            <div class="info_right">
              <div class="price">
                <span>￥{{ item.amount }}</span>
              </div>
              <div class="btn">
                <el-button type="primary" @click="handleRegister(item)"
                  >余{{ item.availableNumber }}号</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 下午 -->
        <div class="morning">
          <!-- 号源 -->
          <div class="tip">
            <svg
              t="1688699127027"
              class="icon"
              viewBox="0 0 1044 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8993"
              width="32"
              height="32"
            >
              <path
                d="M512.607508 807.384615c-163.446154 0-295.384615-131.938462-295.384616-295.384615s131.938462-295.384615 295.384616-295.384615 295.384615 131.938462 295.384615 295.384615-131.938462 295.384615-295.384615 295.384615z m0-78.76923c120.123077 0 216.615385-96.492308 216.615384-216.615385s-96.492308-216.615385-216.615384-216.615385-216.615385 96.492308-216.615385 216.615385 96.492308 216.615385 216.615385 216.615385z"
                fill="#20A0FF"
                p-id="8994"
              ></path>
              <path
                d="M514.576738 0c21.661538 0 39.384615 17.723077 39.384616 39.384615v78.769231c0 21.661538-17.723077 39.384615-39.384616 39.384616s-39.384615-17.723077-39.384615-39.384616V39.384615c0-21.661538 17.723077-39.384615 39.384615-39.384615z m336.738462 122.092308c15.753846 13.784615 19.692308 39.384615 3.938462 55.138461l-51.2 61.046154c-13.784615 15.753846-39.384615 19.692308-55.138462 3.938462-15.753846-13.784615-19.692308-39.384615-3.938462-55.138462l51.2-61.046154c13.784615-15.753846 37.415385-17.723077 55.138462-3.938461z m177.230769 309.16923c3.938462 21.661538-9.846154 41.353846-31.507692 45.292308l-76.8 13.784616c-21.661538 3.938462-41.353846-9.846154-45.292308-31.507693-3.938462-21.661538 9.846154-41.353846 31.507693-45.292307l76.8-13.784616c21.661538-3.938462 41.353846 9.846154 45.292307 31.507692z m-61.046154 350.523077c-11.815385 19.692308-35.446154 25.6-53.16923 13.784616l-68.923077-39.384616c-19.692308-11.815385-25.6-35.446154-13.784616-53.16923s35.446154-25.6 53.169231-13.784616l68.923077 39.384616c17.723077 11.815385 23.630769 35.446154 13.784615 53.16923zM693.776738 1012.184615c-19.692308 7.876923-43.323077-3.938462-51.2-23.630769l-27.56923-74.830769c-7.876923-19.692308 3.938462-43.323077 23.630769-51.2 19.692308-7.876923 43.323077 3.938462 51.2 23.630769l27.569231 74.830769c7.876923 21.661538-3.938462 43.323077-23.63077 51.2z m-356.430769 0c-19.692308-7.876923-31.507692-29.538462-23.630769-51.2l27.569231-74.830769c7.876923-19.692308 29.538462-31.507692 51.2-23.630769 19.692308 7.876923 31.507692 29.538462 23.630769 51.2l-27.569231 74.830769c-7.876923 19.692308-31.507692 31.507692-51.2 23.630769zM63.622892 781.784615c-11.815385-19.692308-3.938462-43.323077 13.784616-53.16923l68.923077-39.384616c19.692308-11.815385 43.323077-3.938462 53.16923 13.784616s3.938462 43.323077-13.784615 53.16923l-68.923077 39.384616c-17.723077 11.815385-43.323077 5.907692-53.169231-13.784616zM0.607508 431.261538c3.938462-21.661538 23.630769-35.446154 45.292307-31.507692l76.8 13.784616c21.661538 3.938462 35.446154 23.630769 31.507693 45.292307-3.938462 21.661538-23.630769 35.446154-45.292308 31.507693l-76.8-13.784616C12.422892 472.615385-3.330954 452.923077 0.607508 431.261538zM179.807508 122.092308c15.753846-13.784615 41.353846-11.815385 55.138461 3.938461l51.2 61.046154c13.784615 15.753846 11.815385 41.353846-3.938461 55.138462-15.753846 13.784615-41.353846 11.815385-55.138462-3.938462L175.869046 177.230769c-15.753846-15.753846-13.784615-41.353846 3.938462-55.138461z"
                fill="#9AD4FF"
                p-id="8995"
              ></path>
            </svg>
            <span>下午号源</span>
          </div>
          <!-- 医生信息 -->
          <div
            class="docInfo"
            v-for="item in afterDoc"
            :key="item.id"
            v-if="workTime?.status != -1"
          >
            <div class="info_left">
              <div class="left_top">
                <span>{{ item.title }}</span>
                <span>|</span>
                <span>{{ item.docname }}</span>
              </div>
              <div class="left_bottom">
                <span>{{ item.skill }}</span>
              </div>
            </div>
            <div class="info_right">
              <div class="price">
                <span>￥{{ item.amount }}</span>
              </div>
              <div class="btn">
                <el-button type="primary" @click="handleRegister(item)"
                  >余{{ item.availableNumber }}号</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  HospitalWorkData,
  DoctorResponseData,
  DocArr,
  Doctor,
} from "@/api/hospital/type.ts";
import { onMounted, ref, watch, computed } from "vue";
import { getHospitalWork, getHospitalDoctor } from "@/api/hospital/index";
import { useRoute, useRouter } from "vue-router";
let $route = useRoute();
let $router = useRouter();

let pageNo = ref<number>(1); // 当前页
let limit = ref<number>(6); // 每页显示的条数
let workData = ref<any>({}); // 存储挂号的数据
let docArr = ref<DocArr>([]);
// 存储排排班数据
let workTime = ref<any>({});

onMounted(() => {
  fetchWorkData();
});

// 获取挂号的数据
const fetchWorkData = async () => {
  // console.log($route.query);
  const res: HospitalWorkData = await getHospitalWork(
    pageNo.value,
    limit.value,
    $route.query.hoscode as string,
    $route.query.depcpde as string
  );
  // console.log("预约挂号数据", res);
  if (res.code === 200) {
    workData.value = res.data;
    // 存储第一天日期的数据
    workTime.value = res.data.bookingScheduleList[0];
    // 获取第一天的排班数据
    getDoctorWorkData();
  }
};
// 点击分页的回调
// const pageChange = (val: number) => {
//   pageNo.value = val;
//   fetchWorkData();
// };
// 监视页码的变化
watch(pageNo, (newVal, oldVal) => {
  console.log(newVal, oldVal);
  fetchWorkData();
});

// 获取某天的排班数据
const getDoctorWorkData = async () => {
  // 获取医生的排班数据
  let res: DoctorResponseData = await getHospitalDoctor(
    $route.query.hoscode as string,
    $route.query.depcpde as string,
    workTime.value.workDate
  );
  console.log("医生的排班数据", res);
  if (res.code === 200) {
    docArr.value = res.data;
  }
};

// 点击日期的回调
const changeTime = async (item: any) => {
  // console.log(item);
  workTime.value = item;
  getDoctorWorkData();
};
// 计算上午排班的医生数据
const morningDoc = computed(() => {
  return docArr.value.filter((item: Doctor) => item.workTime == 0);
});
// 计算下午排班的医生数据
const afterDoc = computed(() => {
  return docArr.value.filter((item: Doctor) => item.workTime == 1);
});
// 点击右侧按钮的回调
const handleRegister = (item: any) => {
  console.log(item);
  // 跳转到选择就诊人的页面
  $router.push({
    path: "/hospital/register_step2",
    query: {
      docId: item.id,
    },
  });
};
</script>

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
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h4 {
      font-weight: bold;
      color: #999;
    }
    .container {
      display: flex;
      margin-top: 50px;
      width: 100%;
      margin-bottom: 30px;
      .item {
        flex: 1;
        border: 1px solid skyblue;
        margin: 0 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.5s;
        cursor: pointer;

        &.active {
          border: 1px solid #ccc;
          color: #ccc;
          .item_top {
            background-color: #ccc;
          }
        }
        &.current {
          transform: scale(1.1);
        }
        .item_top {
          height: 30px;
          background-color: #e8f2ff;
          text-align: center;
          line-height: 30px;
          color: #81878e;
        }
        .item_bottom {
          height: 60px;
          text-align: center;
          line-height: 60px;
          color: #c6c6c6;
        }
      }
    }
  }
  .bottom {
    .will {
      text-align: center;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      span {
        font-size: 22px;
        line-height: 22px;
      }
      p {
        font-size: 22px;
        line-height: 22px;
        color: skyblue;
      }
    }
    .doctor {
      .morning {
        .tip {
          display: flex;
          color: #908881;
          font-size: 18px;
          line-height: 32px;
          margin-bottom: 30px;
          span {
            margin-left: 10px;
            font-weight: 900;
          }
        }
        .docInfo {
          display: flex;
          justify-content: space-between;
          margin: 30px 0;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          .info_left {
            .left_top {
              margin-bottom: 10px;
              span {
                margin: 0 5px;
                font-size: 16px;
                color: #72aae5;
              }
            }
            .left_bottom {
              span {
                margin: 0 5px;
                font-size: 16px;
                color: #aaa5a6;
              }
            }
          }
          .info_right {
            display: flex;
            .price {
              margin-right: 20px;
              span {
                font-size: 16px;
                color: #8e8a83;
                line-height: 42px;
              }
            }
            .btn {
              margin-right: 10px;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
