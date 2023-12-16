import $api from "."
import { IUser } from "../types/user"


export const registation = async (email: string, password: string) => {
    const res = await $api.post<IUser>("/singup", { email, password });
    return res;
}

export const login = async (email: string, password: string) => {
    const res = await $api.post<IUser>("/login", { email, password });
    return res;
}
