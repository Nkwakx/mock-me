import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl, refresh } from "../../connection/env";
import { logout, setCredentials } from "../auth/authSlice";
import { User, UserSigninRequest } from "../../../interfaces/user.model";


const baseQuery = fetchBaseQuery({
      baseUrl,
      credentials: 'include',
      prepareHeaders: async (headers: any, { getState }: any) => {
            const token = getState().auth.user;
            const user = getState().auth.access_token;
            if (token && user) {
                  headers.set('authorization', `${token}`);
                  await AsyncStorage.setItem('user', JSON.stringify(user));
                  await AsyncStorage.setItem('token', JSON.stringify(token));
            }
            return headers;
      }
});

const baseQueryWithAuth = async (arg: any, api: any, extraOptions: any) => {
      let result = await baseQuery(arg, api, extraOptions);
      if (result.error?.status === 403) {
            const refreshResult = await baseQuery(refresh, api, extraOptions)
            if (refreshResult.data) {
                  const user = api.getState().auth.user;
                  api.dispatch(setCredentials({ user, ...refreshResult.data }));
            }
            else {
                  api.dispatch(logout());
            }
      }
      return result;
};
export const apiAuthSlice = createApi({
      baseQuery: baseQueryWithAuth,
      tagTypes: ['auth'],
      endpoints: (builder) => ({}),
});

export const authApi = apiAuthSlice.injectEndpoints({
      endpoints: builder => ({
            register: builder.mutation({
                  query: (credentials: any) => ({
                        url: 'auth/register',
                        method: 'POST',
                        body: { ...credentials },
                  }),
                  transformResponse: (response: { data: { user: User } }) => {
                        return response.data.user;
                  },
            }),
            login: builder.mutation<User, UserSigninRequest>({
                  query: (credentials: any) => ({
                        url: 'auth/login',
                        method: 'POST',
                        body: { ...credentials },
                  }),
                  async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
                        try {
                              const result = await queryFulfilled(arg, true);
                              const user = result.data;
                              const access_token = result.TokenConfig?.AccessToken;
                              const refresh_token = result.TokenConfig?.RefreshToken;
                              dispatch(setCredentials({ user, access_token, refresh_token }));
                        } catch (error) {
                              console.log(error);
                        }
                  },
            }),
            logout: builder.mutation({
                  query: () => ({
                        url: 'auth/logout',
                        method: 'POST',
                  }),
            }),
      }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;