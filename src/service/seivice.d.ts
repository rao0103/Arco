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
