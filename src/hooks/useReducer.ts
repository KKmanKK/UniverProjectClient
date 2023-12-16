import { RootState } from "../Store/reducers/index";
import { useSelector, TypedUseSelectorHook } from "react-redux/es/exports";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
