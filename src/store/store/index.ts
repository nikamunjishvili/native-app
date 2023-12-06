import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thunk } from 'redux-thunk';
import { api } from '../../services';

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

const rootReducer = combineReducers({
	// app: appSlice,
	// auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, api.middleware];

const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares,
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;