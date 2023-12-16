import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import AuthServices from "../../Services/AuthServices";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const res = await AuthServices.login(email, password);
      localStorage.setItem("token", res.data.tokens.accessToken);
      dispatch({ type: UserActionTypes.LOGIN_USER, payload: res.data.user });
    } catch (e: any) {}
  };
};

export const singUpUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      debugger;
      const res = await AuthServices.singUp(email, password);
      localStorage.setItem("token", res.data.tokens.accessToken);
      dispatch({ type: UserActionTypes.SINGUP_USER, payload: res.data.user });
    } catch (e: any) {}
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    await AuthServices.logout();
    localStorage.removeItem("token");
    dispatch({ type: UserActionTypes.LOGOUT_USER });
  };
};
