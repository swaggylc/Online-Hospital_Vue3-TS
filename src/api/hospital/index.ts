// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import type {
  HospitalDetail,
  DepartmentResponseData,
  LoginData,
  UserLoginResponseData,
  HospitalWorkData,
} from "./type";
// 枚举请求地址
enum API {
  HOSPITALDETAIL_URL = "/hosp/hospital/",
  // 获取医院科室的数据
  HOSPITALDEPARTMENT_URL = "/hosp/hospital/department/",
  // 获取验证码
  GETUSERCODE_URL = "/sms/send/",
  // 用户登录接口
  USERLOGIN_URL = "/user/login",
  // 获取某医院某科室的预约挂号数据
  HOSPITALWORK_URL = "/hosp/hospital/auth/getBookingScheduleRule/",
}
// 获取医院详情的接口
export const getHospitalDetail = (hoscode: string) => {
  return request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);
};
// 获取医院科室的接口
export const getHospitalDepartment = (hoscode: string) => {
  return request.get<any, DepartmentResponseData>(
    API.HOSPITALDEPARTMENT_URL + hoscode
  );
};
// 获取验证码的接口
export const getUserCode = (phone: string) => {
  return request.get<any, any>(API.GETUSERCODE_URL + phone);
};
// 用户登录的接口
export const userLogin = (data: LoginData) => {
  return request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);
};
// 获取预约挂号的数据
export const getHospitalWork = (
  page: number,
  limit: number,
  hoscode: string,
  depcode: string
) => {
  return request.get<any, HospitalWorkData>(
    API.HOSPITALWORK_URL + `${page}/${limit}/${hoscode}/${depcode}`
  );
};
