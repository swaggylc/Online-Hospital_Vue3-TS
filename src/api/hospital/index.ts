// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import type { HospitalDetail, DepartmentResponseData } from "./type";
// 枚举请求地址
enum API {
  HOSPITALDETAIL_URL = "/hosp/hospital/",
  // 获取医院科室的数据
  HOSPITALDEPARTMENT_URL = "/hosp/hospital/department/",
  // 获取验证码 
  GETUSERCODE_URL = "/sms/send/",
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
}