// Need to use the React-specific entry point to import createApi
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
	retry,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";


type CUSTOM_ERROR = {
	errors: string[];
};

const UNAUTH_MSG = "აღნიშნულ ოპერაცია სჭირდება ავტორიზებული მომხმარებელი";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
	baseUrl: "https://forwarder-dev.srulad1.com/api",
	prepareHeaders: (headers, { getState }) => {
		// By default, if we have a token in the store, let's use that for authenticated requests
		// const { token } = (getState() as RootState).auth;
		// console.log("hello this is token ->", token);
		// if (token) {
		// 	headers.set("Authorization", `Bearer ${token}`);
		// }
		return headers;
	},
});

const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	const result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.data) {
		try {
			const errorData = result.error.data as CUSTOM_ERROR[];
			const errorMsg = errorData[0]?.errors[0] || "";
			if (errorMsg === UNAUTH_MSG) {
				// api.dispatch(logoutAuthAction());
				// api.dispatch(redirectToAuth({}));
			}
		} catch {}
	}
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
