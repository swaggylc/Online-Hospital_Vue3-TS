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
