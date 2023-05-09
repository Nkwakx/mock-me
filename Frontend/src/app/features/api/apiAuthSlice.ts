
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl, refresh } from "../../connection/env";
import { logout, setCredentials } from "../auth/authSlice";
import { User, UserSigninRequest } from "../../../interfaces/user.model";


const baseQuery = fetchBaseQuery({
      baseUrl,
      credentials: 'include',
      prepareHeaders: async (headers: any, { getState }: any) => {
            const user = getState().auth.userDetails;
            const token = getState().auth.access_token;
            if (token && user) {
                  headers.set('authorization', `${token}`);
                  // await AsyncStorage.setItem('user', JSON.stringify(user));
                  // await AsyncStorage.setItem('token', JSON.stringify(token));
            }
            return headers;
      }
});

const baseQueryWithAuth = async (arg: any, api: any, extraOptions: any) => {
      let result = await baseQuery(arg, api, extraOptions);
      if (result?.error?.status === 403) {
            const refreshResult = await baseQuery("/refresh", api, extraOptions)
            if (refreshResult?.data) {
                  const user = api.getState().auth.userDetails;
                  api.dispatch(setCredentials({ ...refreshResult.data, user }));
                  result = await baseQuery(arg, api, extraOptions);
            }
            else {
                  api.dispatch(logout);
            }
      }
      return result;
};
export const apiAuthSlice = createApi({
      baseQuery: baseQueryWithAuth,
      tagTypes: ['auth'],
      endpoints: builder => ({}),
});

export const authApi = apiAuthSlice.injectEndpoints({
      endpoints: builder => ({
            login: builder.mutation<User,Partial<UserSigninRequest>>({
                  query: credentials => ({
                        url: '/auth/login',
                        method: 'POST',
                        body: { ...credentials },
                  }),
                  // async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
                  //       try {
                  //             const result = await queryFulfilled(arg, true);
                  //             const user = result.data;
                  //             const access_token = result.TokenConfig?.AccessToken;
                  //             const refresh_token = result.TokenConfig?.RefreshToken;
                  //             dispatch(setCredentials({ user, access_token, refresh_token }));
                  //       } catch (error) {
                  //             console.log(error);
                  //       }
                  // },
            }),
            register: builder.mutation({
                  query: credentials => ({
                        url: '/auth/register',
                        method: 'POST',
                        body: { ...credentials },
                  }),
                  transformResponse: (response: { data: { user: User } }) => {
                        return response.data.user;
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