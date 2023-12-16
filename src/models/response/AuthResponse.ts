import { IUser } from "../../types/user";

export interface IAuthResponse {
  user: IUser;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
