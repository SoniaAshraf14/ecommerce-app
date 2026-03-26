import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./loginService";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Registration successful";
        state.token = action.payload.access_token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearMessages, logout } = authSlice.actions;
export default authSlice.reducer;