import http from "@/utils/http";

export const isUserExists = async (
  params: { username: string } | { email: string }
) =>
  (
    await http.get<IBaseResponse>("/api/v1/users/exists_user_unique_fields", {
      params,
    })
  ).data.code;
export const sendVerificationCodes = async (data: {
  target: string;
  type: 1;
}) =>
  (await http.post<IBaseResponse>("/api/v1/verification_codes", data)).data
    .code;

// 判断是否注册
export const registerUsers = async (data: {
  avatar: "";
  code: string;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  verification_type: 1;
}) => (await http.post<IBaseResponse>("/api/v1/users", data)).data.code;
//登录
export const isLoginExists = async (data: {
  username: string;
  password: string;
}) => (await http.post<ILoginResponse>("/api/v1/users/login", data)).data.code;
// 重置密码
export const resetPassword = async (data: {
  email: string;
  code: string;
  password: string;
  passwordConfirm: string;
}) => (await http.put<IBaseResponse>("/api/v1/users/password", data)).data.code;
// 用户信息
export const userInfo = async () =>
  (await http.get<IuserInfo>("/api/v1/users/user_info")).data.data;
//菜单路由
export const GetUserMenus = async () =>
  (await http.get<TLayout>("/api/v1/menus/user_menus")).data.data;

// 用户进行中的项目
export const userOngoingProject = async (params: {
  is_recycle: number;
  is_archived: number;
}) =>
  (
    await http.get<IuserOngoingProject>("/api/v1/projects/list", {
      params,
    })
  ).data.data.rows;
// 我的任务
export const taskPrioritysList = async (params: MyTaskParmas) =>
  (await http.get<MyTask>("/api/v1/tasks/list", { params })).data.data;
// 部门列表
export const departmentList = async () =>
  (await http.get<Tlist>("/api/v1/departments/list")).data.data;
// 部门详情
export const departmentDetails = async (id: number) =>
  (await http.get<Tlist>(`/api/v1/users/list?keyword=&department_id=${id}`))
    .data.data;
// 获取所有成员数据
export const memberInfo = async (id: string) =>
  (await http.get<Tmember>(`/api/v1/users/list?keyword=${id}`)).data.data;

// 获取新加入的成员数据
export const newMemberInfo = async () =>
  (
    await http.get<Tmember>(
      `/api/v1/users/list?keyword=&date_after_created=2023-07-02%2000%3A00%3A00`
    )
  ).data.data;
// 获取未分配部门的成员数据
export const undistributedMemberInfo = async () =>
  (await http.get<Tmember>(`/api/v1/users/list?keyword=&department_id=0`)).data
    .data;
// 获取停用的成员数据
export const deactivateMembers = async () =>
  (await http.get<Tmember>(`/api/v1/users/list?keyword=&state=0`)).data.data;

// 更改部门名称
export const changeDepartmentName = async (data: {
  id: number;
  name: string;
  owner_id: number;
  parent_id: number;
  sort: number;
  created_at: string;
  updated_at: string;
}) =>
  (await http.post<TchangeNepartmentName>(`/api/v1/departments`, data)).data
    .code;
