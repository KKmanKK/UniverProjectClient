import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { lessonReducer } from "./lessonReducer";
export const rootReducer = combineReducers({
  userReducer,
  lessonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
