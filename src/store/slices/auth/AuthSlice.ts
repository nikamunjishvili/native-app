import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { servicesApi } from "../../../services";
import { updateOnboard } from "../App/AppSlice";


interface AuthState extends Partial<any> {
	isLoading: boolean;
	isError: boolean;
}

const initialState: AuthState = {
	isLoading: false,
	isError: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: state => {
			state.isLoading = false;
			state.isError = false;
			state.user = undefined;
			state.token = undefined;
			state.status = undefined;
			state.message = undefined;
			updateOnboard({ isOnboarded: true });
		},
	},
	extraReducers: builder => {
		builder
			.addMatcher(servicesApi.endpoints.login.matchPending, state => {
				state = initialState;
				state.isLoading = true;
				state.isError = false;
			})
			.addMatcher(servicesApi.endpoints.login.matchRejected, state => {
				state = initialState;

				state.isLoading = false;
				state.isError = true;
			})
			.addMatcher(
				servicesApi.endpoints.login.matchFulfilled,
				(state, action: PayloadAction<any>) => {
					state.isLoading = false;
					state.isError = false;
					state.user = action.payload.user;
					state.token = action.payload.token;
					state.status = action.payload.status;
					state.message = action.payload.message;
				},
			)
			.addMatcher(servicesApi.endpoints.registerUser.matchPending, state => {
				state = initialState;

				state.isLoading = true;
				state.isError = false;
			})
			.addMatcher(servicesApi.endpoints.registerUser.matchRejected, state => {
				state = initialState;

				state.isLoading = false;
				state.isError = true;
			})
			.addMatcher(
				servicesApi.endpoints.registerUser.matchFulfilled,
				(state, action: PayloadAction<any>) => {
					state.isLoading = false;
					state.isError = false;
					state.user = action.payload.user;
					state.token = action.payload.token;
					state.status = action.payload.status;
					state.message = action.payload.message;
				},
			);
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
