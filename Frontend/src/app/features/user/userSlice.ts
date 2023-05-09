import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user.model";
import axios from "axios";
import { baseUrl, header } from "../../connection/env";


interface userState {
      users: User[],
      user: User | null,
      loading: boolean,
      error: any,
}
const initialState: userState = {
      users: [],
      user: null,
      loading: false,
      error: null,
}
export const getusers = createAsyncThunk<User[]>(
      "users/user",
      async (_, thunkAPI) => {
            try {
                  const response = await axios.get(`${baseUrl}/user`, header);
                  console.log( response.data, "response.data");
                  return response.data;
            } catch (error: any) {
                  return thunkAPI.rejectWithValue(error.response.data)
            }
      }
)
export const usersSlice = createSlice({
      name: "users",
      initialState,
      reducers: {
            setUser: (state, action: PayloadAction<User[]>) => {
                  state.users = action.payload;
            },
      },
      extraReducers: (builder) => {
            builder.addCase(getusers.pending, (state) => {
                  state.loading = true;
            });
            builder.addCase(getusers.fulfilled, (state, action) => {
                  state.loading = false;
                  state.users = action.payload;
            });
            builder.addCase(getusers.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload;
            });
      }
})

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;