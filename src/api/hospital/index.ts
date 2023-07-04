// 引入二次封装的axios
import request from "@/utils/request";
// 引入ts类型
import type { HospitalDetail } from "./type";
// 枚举请求地址
enum API {
  HOSPITALDETAIL_URL = "/hosp/hospital/",
}
// 获取医院详情的接口
export const getHospitalDetail = (hoscode: string) => {
  return request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);
};
