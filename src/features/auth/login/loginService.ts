import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../services/api";
import type { LoginDto, RegisterDto } from "../../../../shared/types/auth";

// REGISTER THUNK
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterDto, { rejectWithValue }) => {
    try {
      const res = await api.post("/users", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message || "Registration failed"
      );
    }
  }
);

// LOGIN THUNK
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginDto, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", data);
      return res.data; // { access_token }
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message || "Login failed"
      );
    }
  }
);