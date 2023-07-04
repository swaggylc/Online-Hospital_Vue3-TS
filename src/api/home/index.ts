// 统一管理首页模块接口
import request from "@/utils/request";

// 通过枚举管理首页模块的接口地址
enum API {
  // 获取已有医院的数据接口地址
  HOSPITAL_URL = "/hosp/hospital",
}

export const reqHospital = (page: number, limit: number) => {
  return request.get(API.HOSPITAL_URL + `/${page}/${limit}`);
};
