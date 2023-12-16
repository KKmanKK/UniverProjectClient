import { IUserState, UserAction, UserActionTypes } from "../../types/user";

const initialState: IUserState = {
  user: {
    id: 0,
    email: "",
    passord: "",
  },
  isAuth: false,
};
export const userReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SINGUP_USER:
      return { user: action.payload, isAuth: true };
    case UserActionTypes.LOGIN_USER:
      return { user: action.payload, isAuth: true };
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {
          id: 0,
          email: "",
          passord: "",
        },
        isAuth: false,
      };
    default:
      return state;
  }
};
