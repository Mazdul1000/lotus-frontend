import { baseApi } from "@/redux/api/baseApi";


const AUTH_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllService: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/${AUTH_URL}`,
          method: 'GET',
          params: arg
        }
      },
    }),
  })
});


export const {useGetAllServiceQuery} = serviceApi;
