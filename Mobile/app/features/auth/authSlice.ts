import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user.model";

interface UserState {
      user: User | null;
      access_token: string | null;
      refresh_token: string | null;
      loading: boolean;
      error: any | null;
}
const initialState: UserState = {
      user: null,
      access_token: null,
      refresh_token: null,
      loading: false,
      error: []
}
const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            setCredentials: (state, action) => {
                  const { user, access_token } = action.payload;
                  state.user = user;
                  state.access_token = access_token;
                  state.access_token = action.payload.TokenConfig?.AccessToken;
                  state.refresh_token = action.payload.TokenConfig?.RefreshToken;
            },
            logout: (state) => {
                  state.user = null;
                  state.access_token = null;
                  state.refresh_token = null;
            }
      },
      extraReducers(builder) {
            builder.addCase('auth/login/pending', (state, action) => {
                  state.loading = true;
            });
            builder.addCase('auth/login/fulfilled', (state, action: any) => {
                  state.loading = false;
                  state.user = action.payload;
            });
            builder.addCase('auth/signin/rejected', (state, action: any) => {
                  state.loading = false;
                  state.error = action.errror;
            });
      }
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;