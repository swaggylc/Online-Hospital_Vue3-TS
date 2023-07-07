import { defineStore } from "pinia";
import {
  getHospitalDetail,
  getHospitalDepartment,
} from "@/api/hospital/index.ts";
// 引入ts类型
import type { HospitalDetail } from "@/api/hospital/type.ts";
import type { DetailState } from "./interface/index.ts";
import type {
  HosPitalDetail,
  DepartmentResponseData,
} from "@/api/hospital/type.ts";
// pinia的写法有两种，组合式API和选项式API

const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      // 定义医院详情数据
      hospitalInfo: {} as HosPitalDetail,
      // 定义医院科室数据
      departmentArr: [],
    };
  },
  actions: {
    // 获取医院详情的方法
    async getHospital(hoscode: string) {
      // console.log(hoscode);
      let result: HospitalDetail = await getHospitalDetail(hoscode);
      //   console.log("单个医院的详情数据", result);
      if (result.code == 200) {
        this.hospitalInfo = result.data;
      }
    },
    // 获取医院科室的方法
    async getDepartment(hoscode: string) {
      let result: DepartmentResponseData = await getHospitalDepartment(hoscode);
      // console.log("单个医院的科室数据", result);
      if (result.code == 200) {
        this.departmentArr = result.data;
      }
    },
  },
  getters: {},
});

// 获取仓库的方法对外暴露
export default useDetailStore;
