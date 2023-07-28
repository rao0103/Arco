/* eslint-disable @typescript-eslint/no-explicit-any */
interface ISearchParams {
  keywords: string;
  limit?: number;
  offset?: number;
  type: 1 | 10 | 100 | 1000 | 1002 | 1004 | 1006 | 1009 | 1014 | 1018 | 2000;
}
type TSongs = {
  id: number;
  name: string;
  artists: {
    id: number;
    name: string;
    picUrl?: any;
    alias: any[];
    albumSize: number;
    picId: number;
    fansGroup?: any;
    img1v1Url: string;
    img1v1: number;
    trans?: any;
  }[];
  album: {
    id: number;
    name: string;
    artist: {
      id: number;
      name: string;
      picUrl?: any;
      alias: any[];
      albumSize: number;
      picId: number;
      fansGroup?: any;
      img1v1Url: string;
      img1v1: number;
      trans?: any;
    };
    publishTime: number;
    size: number;
    copyrightId: number;
    status: number;
    picId: number;
    mark: number;
  };
  duration: number;
  copyrightId: number;
  status: number;
  alias: any[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
}[];
interface ISearchResult {
  result: {
    songs: TSongs;
    hasMore: boolean;
    songCount: number;
  };
  code: number;
}
interface IBaseResponse<T = null> {
  code: 0 | 404;
  data: T;
  msg: string;
}
type TLoginResponse = IBaseResponse<{
  accessToken: string;
  csrf: string;
  refreshToken: string;
}>;
