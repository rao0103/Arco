import http from "@/utils/http";
// 用户名验证
export const isUserExists = async (
  params: { username: string } | { email: string }
) =>
  (
    await http.get<IBaseResponse>("/api/v1/users/exists_user_unique_fields", {
      params,
    })
  ).data.code;

// 登录
export const isLoginExists = async (data: {
  username: string;
  password: string;
}) => (await http.post<ILoginResponse>("/api/v1/users/login", data)).data.code;

// 验证码验证
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

// 用户信息
export const userInfo = async () =>
  (await http.get<IuserInfo>("/api/v1/users/user_info")).data.data;
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
