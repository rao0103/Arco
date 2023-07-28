/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ref } from "vue";
// function useRequest<T = any, U = any>(
//   requestHandler: (...rest: any[]) => Promise<T>,
//   config?: {
//     transform: (data: T) => U;
//   }
// ) {
//   const result = ref<T>();
//   const loading = ref(true);
//   const error = ref(false);
//   requestHandler()
//     .then((res) => {
//       if (config?.transform) {
//         result.value = config.transform(res);
//       } else {
//         result.value = res;
//       }
//     })
//     .catch((err) => (err.value = err))
//     .finally(() => {
//       loading.value = false;
//     });
//   return [result, loading, error];
// }
// export default useRequest;
// 类似useRequest函数 借助若干个组合式API封装好一个指定的逻辑 (自定义hook)
// 一定要以use开头 (vueuse)
// Promise
// () => Promise
// () => () => Promise()
import { ref, Ref } from "vue";
function useRequest<T>(service: (...rest: any[]) => Promise<T>): {
  data: Ref<T>;
  loading: Ref<boolean>;
  error: Ref<any>;
};
function useRequest<T, U>(
  service: (...rest: any[]) => Promise<T>,
  options?: {
    formateResult: (data: T) => U;
  }
): {
  data: Ref<T>;
  loading: Ref<boolean>;
  error: Ref<any>;
};
function useRequest<T, U>(
  service: (...rest: any[]) => Promise<T>,
  options?: {
    formateResult: (data: T) => U;
  }
) {
  const data = ref<T | U>();
  const loading = ref(true);
  const error = ref<unknown>();
  service()
    .then((response) => {
      if (options?.formateResult) {
        data.value = options.formateResult?.(response);
      } else {
        data.value = response;
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loading.value = false;
    });
  return { data, loading, error };
}
export default useRequest;

const { data } = useRequest(
  () =>
    Promise.resolve({
      config: {},
      data: {
        code: 200,
        result: [1, 2, 3],
      },
    }),
  {
    formateResult(data) {
      return data.data.result;
    },
  }
);
