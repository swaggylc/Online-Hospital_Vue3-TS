// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import {
  CreateOrderResponseData,
  GetOrderInfoResponseData,
} from "@/api/user/type.ts";

// 枚举请求地址
enum API {
  // 创建订单,获取订单号的接口
  CREATEORDER_URL = "/order/orderInfo/auth/submitOrder/",
  // 获取订单详情的数据
  GETORDERINFO_URL = "/order/orderInfo/auth/getOrderInfo/",
}
// 提交订单
export const createOrder = (
  hoscode: string,
  scheduleId: string,
  patientId: number
) => {
  return request.post<any, CreateOrderResponseData>(
    API.CREATEORDER_URL + `${hoscode}/${scheduleId}/${patientId}`
  );
};
// 获取订单详情的方法
export const getOrderInfo = (id: number) => {
  return request.get<any, GetOrderInfoResponseData>(API.GETORDERINFO_URL + id);
};
