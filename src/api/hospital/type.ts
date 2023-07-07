// 定义详情模块数据ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}
// 代表医院详情数据
export interface HosPitalDetail {
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: Array<string>;
  };
  hospital: {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: {
      hostypeString: string;
      fullAddress: string;
    };
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro: null;
    route: string;
    status: number;
    bookingRule: null;
  };
}
// 医院详情返回数据的ts
export interface HospitalDetail extends ResponseData {
  data: HosPitalDetail;
}

// 代表医院科室数据
export interface Department {
  depcode: string;
  depname: string;
  children: Array<Department>;
}
// 存储科室的数组类型
export type DepartmentArr = Array<Department>;
// 获取科室接口返回的ts数据类型
export interface DepartmentResponseData extends ResponseData {
  data: DepartmentArr;
}

// 登陆接口携带的参数类型
export interface LoginData {
  phone: string;
  code: string;
}
// 登陆接口返回的用户信息数据类型
export interface UserInfo {
  name: string;
  token: string;
}
// 登录接口返回的ts数据类型
export interface UserLoginResponseData extends ResponseData {
  data: UserInfo;
}

export interface BaseMap {
  warkDataString: string;
  releaseTime: string;
  bigname: string;
  stopTime: string;
  depname: string;
  hosname: string;
}
export interface WorkData {
  workDate: string;
  workDateMd: string;
  dayOfWeek: string;
  docCount: number;
  reservedNumber: null;
  availableNumber: number;
  status: number;
}
export type BookingScheduleList = Array<WorkData>;

export interface HospitalWorkData extends ResponseData {
  data: {
    total: number;
    bookingScheduleList: BookingScheduleList;
    baseMap: BaseMap;
  };
}

// 一个医生数据
export interface Doctor {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    dayOfWeek: string;
    depname: string;
    hosname: string;
  };
  hoscode: string;
  depcode: string;
  title: string;
  docname: string;
  skill: string;
  workDate: string;
  workTime: number;
  reservedNumber: number;
  availableNumber: number;
  amount: number;
  status: number;
  hosScheduleId: string;
}
// 数组,包含全部医生
export type DocArr = Array<Doctor>;
// 科室排班接口返回的ts数据类型
export interface DoctorResponseData extends ResponseData {
  data: DocArr;
}
