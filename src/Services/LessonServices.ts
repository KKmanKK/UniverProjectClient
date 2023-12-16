import { AxiosResponse } from "axios";
import { ILessonResponse } from "../models/response/LessonResponse";
import $api from "../http";

export default class LessonServices {
  static async createLesson(
    name: string,
    text: string
  ): Promise<AxiosResponse<ILessonResponse>> {
    return $api.post<ILessonResponse>("/lesson", { name, text });
  }
}
