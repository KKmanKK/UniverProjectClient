import {
  ILessonState,
  LessonAction,
  LessonActionTypes,
} from "../../types/lesson";

const initialState: ILessonState = {
  lessons: [],
  selectedLesson: {
    id: 0,
    name: "",
    text: "",
    speed: 0,
    accuracy: 0,
    time: 0,
    userId: 0,
  },
  isLoad: true,
};

export const lessonReducer = (
  state = initialState,
  action: LessonAction
): ILessonState => {
  switch (action.type) {
    case LessonActionTypes.FETCH_LESSONS:

      return { lessons: action.payload, isLoad: false, selectedLesson: state.selectedLesson };
    case LessonActionTypes.FETCH_LESSON:

      return { lessons: [], isLoad: false, selectedLesson: action.payload }
    default:
      return state;
  }
};
