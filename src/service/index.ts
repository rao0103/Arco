import http from "@/utils/http";
// import { AxiosPromise } from "axios";

export const getSearchResult = async (params: ISearchParams) => {
  return (await http.get<ISearchResult>("/search", { params })).data.result
    .songs;
};

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

// 重置密码
export const resetPassword = async (data: {
  email: string;
  code: string;
  password: string;
  passwordConfirm: string;
}) => (await http.put<IBaseResponse>("/api/v1/users/password", data)).data.code;

// 注册账号
export const registeredAccount = async (data: {
  email: string;
  code: string;
  username: string;
  password: string;
  passwordConfirm: string;
  avatar: string;
  verification_type: number;
}) => (await http.post<IBaseResponse>("/api/v1/users", data)).data.code;

// 登录账号
export const isUsersLogin = async (data: {
  password: string;
  username: string;
}) => (await http.post<IBaseResponse>("/api/v1/users/login", data)).data.code;
