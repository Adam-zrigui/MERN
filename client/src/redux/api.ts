import { createApi  } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axios";
export const userApi = createApi({
    reducerPath: "usersApi",
    baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5500/"}),
    endpoints: (builder) => ({
getData: builder.query({
    query: (params) => ({ url: params, method: "get" }),

})
    })
})
export const {useGetDataQuery} = userApi