import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user.model";

interface UserState {
      userDetails: User | null;
      access_token: string | null;
      refresh_token: string | null;
      loading: boolean;
      error: any | null;
}
const initialState: UserState = {
      userDetails: null,
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
                  const { userDetails, access_token } = action.payload;
                  state.userDetails = userDetails;
                  state.access_token = access_token;
            },
            logout: () => initialState,
      },
      extraReducers(builder) {
            builder.addCase('auth/login/pending', (state, action) => {
                  state.loading = true;
            });
            builder.addCase('auth/login/fulfilled', (state, action: any) => {
                  state.loading = false;
                  state.userDetails = action.payload;
            });
            builder.addCase('auth/signin/rejected', (state, action: any) => {
                  state.loading = false;
                  state.error = action.errror;
            });
      }
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;