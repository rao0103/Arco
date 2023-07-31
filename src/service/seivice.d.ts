interface IBaseResponse<T = null> {
  code: 0 | 404;
  data: T;
  msg: string;
}
type ILoginResponse = IBaseResponse<{
  accessToken: string;
  csrf: string;
  refreshToken: string;
}>;
type ResponseData = {
  id: number;
  user_id_github: number;
  username: string;
  department_id: object;
  nickname: string;
  email: string;
  state: number;
  phone: string;
  avatar: string;
  company: string;
  city: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  roles: {
    id: number;
    name: string;
    is_default: number;
    created_at: string;
    updated_at: string;
    user_roles: {
      id: number;
      user_id: number;
      role_id: number;
      created_at: string;
      updated_at: string;
    };
    permissions: {
      id: number;
      url: string;
      action: string;
      role_permissions: {
        id: number;
        role_id: number;
        permission_id: number;
        created_at: string;
        updated_at: string;
      };
    }[];
  }[];
  permissions: string[];
};
type IuserInfo = IBaseResponse<ResponseData>
