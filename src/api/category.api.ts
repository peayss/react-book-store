import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fatchCategory = async() => {
    const response = await httpClient.get<Category[]>("/category");
    return response.data;
};