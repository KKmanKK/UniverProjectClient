import { AnyAction, Dispatch } from "redux";
import { LessonAction, LessonActionTypes } from "../../types/lesson";
import { getLessons, getOneLesson } from "../../http/lessonApi";

export const fetchLessons = () => {

    return async (dispatch: Dispatch<LessonAction>) => {
        const res = await getLessons();
        dispatch({ type: LessonActionTypes.FETCH_LESSONS, payload: res })
    }
};
export const fetchLesson = (id: number) => {

    return async (dispatch: Dispatch<LessonAction>) => {

        const res = await getOneLesson(id);

        dispatch({ type: LessonActionTypes.FETCH_LESSON, payload: res })
    }
};
