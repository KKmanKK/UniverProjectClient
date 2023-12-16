import { AxiosResponse } from "axios";
import $api from "../http";
import { IAuthResponse } from "../models/response/AuthResponse";

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/login", { email, password });
  }
  static async singUp(
    email: string,
    passord: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/singup", { email, passord });
  }
  static async logout(): Promise<void> {
    return $api.get("/logout");
  }
}
