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
// 用户信息的数据类型
export interface UserInfoData {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  openid: null;
  nickName: null;
  phone: string;
  name: string;
  status: number;
  certificatesType: string;
  certificatesNo: string;
  certificatesUrl: null;
  authStatus: number;
}
// 获取用户信息接口返回的数据类型
export interface GetUserInfoResponseData extends ResponseData {
  data: UserInfoData;
}
// 用户单个证件类型
export interface CertificateType {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}
// 获取用户证件类型接口返回的data数据类型
export type CertificateTypeData = CertificateType[];

// 获取用户证件类型接口返回的数据类型
export interface GetCertificateTypeResponseData extends ResponseData {
  data: CertificateTypeData;
}

// 用户认证的参数类型
export interface UserAuthParams {
  certificatesNo: string;
  certificatesType: string;
  certificatesUrl: string;
  name: string;
}
// 一个订单的数据类型
export interface OrderListItem {
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
  scheduleId: null;
  reserveDate: string;
  reserveTime: number;
  patientId: number;
  patientName: string;
  patientPhone: string;
  hosRecordId: string;
  number: number;
  fetchTime: string;
  fetchAddress: string;
  quitTime: string;
  orderStatus: number;
  amount: number;
}
export type records = OrderListItem[];

// 获取订单列表接口返回的数据类型
export interface GetOrderListResponseData extends ResponseData {
  data: {
    records: records;
    total: number;
    size: number;
    current: number;
    orders: [];
    searchCount: boolean;
    pages: number;
    hitCount: boolean;
  };
}
