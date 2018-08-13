import axios from "axios";

if (__CLIENT__) {
  axios.interceptors.response.use(
    (res: any) => {
      const { code, data } = res;
      if (code !== 0) {
        return Promise.reject(res);
      }
      return data;
    },
    err => {
      return Promise.reject(err);
    }
  );
}

export default async function http<T>(config: object): Promise<T> {
  const result = ((await axios.request<T>(config)) as any) as Promise<T>;
  return result;
}
