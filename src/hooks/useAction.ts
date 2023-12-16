import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as LessonActionCreators from "../Store/actionCreators/lesson"
export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LessonActionCreators, dispatch)
}   