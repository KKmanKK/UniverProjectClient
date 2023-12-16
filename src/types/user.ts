export enum UserActionTypes {
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SINGUP_USER = "SINGUP_USER",
}

export interface IUserState {
  user: IUser;
  isAuth: boolean;
}

export interface ILoginUserAction {
  type: UserActionTypes.LOGIN_USER;
  payload: IUser;
}
export interface ILogoutUserAction {
  type: UserActionTypes.LOGOUT_USER;
}
export interface ISingUpUserAction {
  type: UserActionTypes.SINGUP_USER;
  payload: IUser;
}
export type UserAction =
  | ILoginUserAction
  | ILogoutUserAction
  | ISingUpUserAction;

export interface IUser {
  id: number;
  email: string;
  passord: string;
}
