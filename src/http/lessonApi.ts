import { ILesson } from "../types/lesson";
import api from "./index"

export const getLessons = async () => {
    const { data } = await api.get<ILesson[]>("/lessons");
    return data;
}
export const getOneLesson = async (id: number) => {

    const { data } = await api.get<ILesson>(`/lessons/${id}`);

    return data;
}