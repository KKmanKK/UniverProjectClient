export interface ILessonState {
  lessons: ILesson[];
  selectedLesson: ILesson
  isLoad: boolean;
}

export interface ILesson {
  id: number
  name: string;
  text: string;
  speed?: number;
  accuracy?: number;
  time?: number;
  userId?: number;
}
export enum LessonActionTypes {
  FETCH_LESSONS = "FETCH_LESSONS",
  FETCH_LESSON = "FETCH_LESSON",

}
export interface IFetchLessonsAction {
  type: LessonActionTypes.FETCH_LESSONS;
  payload: ILesson[];
}
export interface IFetchLessonAction {
  type: LessonActionTypes.FETCH_LESSON;
  payload: ILesson;
}
export type LessonAction = IFetchLessonsAction | IFetchLessonAction;
