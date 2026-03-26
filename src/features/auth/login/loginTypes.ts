export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  expiry: number;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: string;
}