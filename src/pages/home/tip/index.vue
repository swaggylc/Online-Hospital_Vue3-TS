<template>
  <div class="tip">
    <!-- 常见科室的结构 -->
    <div class="deparment">
      <div class="header">
        <div class="left">
          <svg
            t="1688461838123"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2359"
            width="16"
            height="16"
          >
            <path
              d="M817.3 305.3H762V250c0-61.1-49.5-110.7-110.7-110.7H374.7C313.5 139.3 264 188.8 264 250v55.3h-55.3C147.5 305.3 98 354.8 98 416v359.7c0 61.1 49.5 110.7 110.7 110.7h608.7c61.1 0 110.7-49.5 110.7-110.7V416c-0.1-61.2-49.6-110.7-110.8-110.7z m-498-55.3c0-30.5 24.8-55.3 55.3-55.3h276.7c30.5 0 55.3 24.8 55.3 55.3v55.3H319.3V250z m553.4 525.6c0 30.5-24.8 55.3-55.3 55.3H208.7c-30.5 0-55.3-24.8-55.3-55.3V416c0-30.5 24.8-55.3 55.3-55.3H817.3c30.5 0 55.3 24.8 55.3 55.3v359.6z"
              p-id="2360"
              fill="#55a6fe"
            ></path>
            <path
              d="M540.7 471.3h-55.4V582H374.7v55.3h110.6V748h55.4V637.3h110.6V582H540.7z"
              p-id="2361"
              fill="#55a6fe"
            ></path>
          </svg>
          <span>常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <svg
            t="1688462019552"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4398"
            width="16"
            height="16"
          >
            <path
              d="M279.063 1019.387c-13.838 0-23.063-4.612-32.288-13.837-18.45-18.45-18.45-46.127 0-64.577L675.748 512 246.775 87.64c-18.45-18.45-18.45-46.126 0-64.577s46.126-18.45 64.576 0l461.262 461.261c18.45 18.45 18.45 46.126 0 64.577L311.35 1010.162c-4.612 4.613-18.45 9.225-32.288 9.225z"
              p-id="4399"
              fill="#2c2c2c"
            ></path>
          </svg>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>神经内科</li>
          <li>消化内科</li>
          <li>呼吸内科</li>
          <li>内科</li>
          <li>神经外科</li>
          <li>妇科</li>
          <li>儿科</li>
          <li>骨科</li>
          <li>口腔科</li>
          <li>耳鼻喉科</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tip {
  color: #999;
  .deparment {
    .header {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
          margin-right: 5px;
        }
      }
    }
    .content {
      font-size: 15px;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 40%;
          margin-top: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
