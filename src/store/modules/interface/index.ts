import type { HosPitalDetail ,DepartmentArr} from "@/api/hospital/type";
import type { UserInfo } from "@/api/hospital/type";
// 定义仓库内部存储数据的ts类型
export interface DetailState {
  hospitalInfo: HosPitalDetail;
  departmentArr: DepartmentArr;
}

// 用户仓库相关state的ts类型
export interface UserState {
  visible: boolean;
  code: string;
  userInfo: UserInfo;
}
