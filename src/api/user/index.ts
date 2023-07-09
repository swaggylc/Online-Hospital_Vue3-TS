// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import {
  CreateOrderResponseData,
  GetOrderInfoResponseData,
  GetQrCodeResponseData,
  QueryPayStatusResponseData
} from "@/api/user/type.ts";

// 枚举请求地址
enum API {
  // 创建订单,获取订单号的接口
  CREATEORDER_URL = "/order/orderInfo/auth/submitOrder/",
  // 获取订单详情的数据
  GETORDERINFO_URL = "/order/orderInfo/auth/getOrderInfo/",
  // 取消订单的接口
  CANCELORDER_URL = "/order/orderInfo/auth/cancelOrder/",
  // 获取支付订单的二维码接口
  QRCODE_URL = "/order/weixin/createNative/",
  // 查询订单支付状态的接口
  QUERY_PAY_STATUS_URL = "/order/weixin/queryPayStatus/",
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
// 取消订单的方法
export const cancelOrder = (orderId: number) => {
  return request.get<any>(API.CANCELORDER_URL + orderId);
};
// 获取支付订单的二维码的方法
export const getQrCode = (orderId: number) => {
  return request.get<any, GetQrCodeResponseData>(API.QRCODE_URL + orderId);
};
// 查询订单支付状态的方法
export const queryPayStatus = (orderId: number) => {
  return request.get<any,QueryPayStatusResponseData>(API.QUERY_PAY_STATUS_URL + orderId);
};
