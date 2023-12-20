import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
	retry,
  } from "@reduxjs/toolkit/query/react";
  import { RootState } from "../store/store";
  
  const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8083/api",
	prepareHeaders: (headers, { getState }) => {
	  const { token } = (getState() as RootState).auth;
	  console.log("hello this is token ->", token);
	  if (token) {
		headers.set("Authorization", `Bearer ${token}`);
	  }
	  return headers;
	},
  });
  
  const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
  ) => {
	const result = await baseQuery(args, api, extraOptions);
	return result;
  };
  
  const baseQueryWithRetry = retry(customFetchBase, { maxRetries: 1 });
  
export const api = createApi({
	refetchOnReconnect: true,
	refetchOnFocus: true,

	reducerPath: "rootApi",

	baseQuery: baseQueryWithRetry,

	endpoints: () => ({}),

	tagTypes: ["userRoles", "carTypes", "trailerTypes", "languages", "chatsList"],
});