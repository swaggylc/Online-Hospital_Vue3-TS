import Mock from "mockjs";

// 模拟订单号数据
let data = Mock.mock({
  code: 200,
  message: "success",
  ok: true,
  "data|200-300": 202,
});
// 模拟订单详细数据
let orderInfo = Mock.mock({
  code: 200,
  message: "success",
  ok: true,
  data: {
    id: 202,
    createTime: "2021-01-01T00:00:00",
    updateTime: "2021-01-01T00:00:00",
    isDeleted: 0,
    param: {
      orderStatusString: "预约成功，待支付",
    },
    userId: 430,
    outTradeNo: "6225753336a9ba1be763dc41",
    hoscode: "1000_0",
    hosname: "北京市第一人民医院",
    depcode: "430",
    depname: "内科",
    title: "主治医师",
    scheduleId: 1,
    reserveDate: "2021-01-01",
    reserveTime: "上午",
    amount: 100,
    patientId: 1,
    patientName: "张三",
    patientPhone: "13888888888",
    hosRecordId: "6225753336a9ba1be763dc41",
    number: 1,
    fetchTime: "2021-01-01T00:00:00",
    fetchAddress: "北京市朝阳区",
    quitTime: "2021-01-01T00:00:00",
    orderStatus: 0,
  },
});
// /api/order/orderInfo/auth/submitOrder/1000_0/6225753336a9ba1be763dc41/430
// /api/order/orderInfo/auth/getOrderInfo/202
// 拦截获取订单号的请求
Mock.mock(
  RegExp("/api/order/orderInfo/auth/submitOrder" + ".*"),
  "post",
  () => {
    // console.log("mock get");
    return data;
  }
);
// 拦截获取订单详细信息的请求
Mock.mock(
  RegExp("/api/order/orderInfo/auth/getOrderInfo" + ".*"),
  "get",
  () => {
    // console.log("mock get");
    return orderInfo;
  }
);
