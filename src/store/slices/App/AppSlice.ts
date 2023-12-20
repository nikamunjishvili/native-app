import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AppState {
  isOnBoarded: boolean;
}

const initialState: AppState = {
  isOnBoarded: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateOnboard: (state, action: PayloadAction<{ isOnboarded: boolean }>) => {
			state.isOnBoarded = action.payload.isOnboarded;
		},
  },
});

export const {updateOnboard} = appSlice.actions;

export default appSlice.reducer;
