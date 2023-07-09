export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}
// 提交订单接口返回的数据类型
export interface CreateOrderResponseData extends ResponseData {
  data: number;
}
// 订单详情数据的ts类型
export interface OrderInfoData {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    orderStatusString: string;
  };
  userId: number;
  outTradeNo: string;
  hoscode: string;
  hosname: string;
  depcode: string;
  depname: string;
  title: string;
  scheduleId: string;
  reserveDate: string;
  reserveTime: number;
  amount: number;
  patientId: number;
  patientName: string;
  patientPhone: string;
  hosRecordId: string;
  number: number;
  fetchTime: string;
  fetchAddress: string;
  quitTime: string;
  orderStatus: number;
}
// 获取订单详情接口返回的数据类型
export interface GetOrderInfoResponseData extends ResponseData {
  data: OrderInfoData;
}
// 获取支付订单二维码接口中data的数据类型
export interface QrCodeData {
  codeUrl: string;
  orderId: number;
  totalFee: number;
  resultCode: string;
}
// 获取支付订单二维码接口返回的数据类型
export interface GetQrCodeResponseData extends ResponseData {
  data: QrCodeData;
}
// 查询订单支付状态接口返回的数据类型
export interface QueryPayStatusResponseData extends ResponseData {
  data: boolean;
}
