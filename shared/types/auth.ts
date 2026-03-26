import {UserRole} from "./enums"

export interface LoginDto {
  email: string;
  password: string;
}


export interface LoginResponse {
  access_token: string;
  expiry: number;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

