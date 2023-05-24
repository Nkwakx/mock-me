import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { apiAuthSlice } from "../features/api/apiAuthSlice";
import { persistReducer } from "redux-persist";
import authSlice from "../features/auth/authSlice";
import usersSlice from "../features/user/userSlice";

// const persistConfig = {
//       key: 'root',
//       storage: "localstorage"
// }
// const persistedReducer = persistReducer(persistConfig, combineReducers({
//       [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
//       auth: authSlice,
//       users: usersSlice,
// }))


export const store = configureStore({
      // reducer: persistedReducer,
      reducer: {
            auth: authSlice,
            users: usersSlice,
      }, middleware: (getDefault) => getDefault().concat(),
      // devTools: process.env.NODE_ENV === 'development',
      // middleware: (getDefaultMiddleware) =>
      //       getDefaultMiddleware({
      //             serializableCheck: false,
      //       }).concat(apiAuthSlice.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
