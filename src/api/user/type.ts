export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}
// 提交订单接口返回的数据类型
export interface CreateOrderResponseData extends ResponseData {
  data: number;
}
