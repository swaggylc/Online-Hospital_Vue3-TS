// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import {
  CreateOrderResponseData,
  GetOrderInfoResponseData,
  GetQrCodeResponseData,
  QueryPayStatusResponseData,
  GetUserInfoResponseData,
  GetCertificateTypeResponseData,
  UserAuthParams,
  GetOrderListResponseData,
  GetPatientListResponseData,
  GetOrderStatusResponseData,
  PatientParams,
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
  // 获取用户信息的接口
  GET_USER_INFO_URL = "/user/auth/getUserInfo",
  // 获取用户证件类型的接口
  GET_CERTIFICATE_TYPE_URL = "/cmn/dict/findByDictCode/",
  // 用户认证的接口
  USER_AUTH_URL = "/user/auth/userAuah/",
  // 获取用户订单列表的接口
  GET_ORDER_LIST_URL = "/order/orderInfo/auth/",
  // 获取就诊人列表的接口
  GET_PATIENT_LIST_URL = "/user/patient/auth/findAll/",
  // 获取订单状态的接口
  GET_ORDER_STATUS_URL = "/order/orderInfo/auth/getStatusList/",
  // 获取城市的接口
  GET_CITY_LIST_URL = "/cmn/dict/findByParentId/",
  // 新增就诊人的接口
  SAVE_PATIENT_URL = "/user/patient/auth/save/",
  // 更新就诊人信息的接口
  UPDATE_PATIENT_URL = "/user/patient/auth/update/",
  // 删除就诊人的接口
  REMOVE_PATIENT_URL = "/user/patient/auth/remove/",
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
  return request.get<any, QueryPayStatusResponseData>(
    API.QUERY_PAY_STATUS_URL + orderId
  );
};
// 获取用户信息的方法
export const getUserInfo = () => {
  return request.get<any, GetUserInfoResponseData>(API.GET_USER_INFO_URL);
};
// 获取用户证件类型的方法
export const getCertificateType = (dictCode: string) => {
  return request.get<any, GetCertificateTypeResponseData>(
    API.GET_CERTIFICATE_TYPE_URL + dictCode
  );
};
// 用户认证的方法
export const userAuth = (userInfo: UserAuthParams) => {
  return request.post<any, any>(API.USER_AUTH_URL, userInfo);
};
// 获取用户订单列表的方法
export const getOrderList = (
  page: number,
  limit: number,
  patientId: string,
  orderStatus: string
) => {
  return request.get<any, GetOrderListResponseData>(
    API.GET_ORDER_LIST_URL +
      `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`
  );
};
// 获取就诊人列表的方法
export const getPatientList = () => {
  return request.get<any, GetPatientListResponseData>(API.GET_PATIENT_LIST_URL);
};
// 获取订单状态的方法
export const getOrderStatus = () => {
  return request.get<any, GetOrderStatusResponseData>(API.GET_ORDER_STATUS_URL);
};
// 获取城市的方法
export const getCityList = (parentId: string) => {
  return request.get<any>(API.GET_CITY_LIST_URL + parentId);
};
// 新增与修改就诊人的方法
export const saveOrUpdatePatient = (data: PatientParams) => {
  if (data.id) {
    return request.put<any>(API.UPDATE_PATIENT_URL, data);
  } else {
    return request.post<any>(API.SAVE_PATIENT_URL, data);
  }
};
// 删除就诊人的方法
export const removePatient = (id: string) => {
  return request.delete<any>(API.REMOVE_PATIENT_URL + id);
};
