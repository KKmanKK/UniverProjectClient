import { rootReducer } from "./reducers/index";
import thunk from "../../node_modules/redux-thunk/es/index";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
