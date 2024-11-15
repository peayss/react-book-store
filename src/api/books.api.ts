import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FatchBooksParams {
    category_id?: number;
    news?:boolean;
    currentPage?:number;
    limit: number;
}

interface FatchBooksResponse{
    books : Book[];
    pagination : Pagination;
}

export const fetchBooks = async (params:FatchBooksParams) => {
    try {
        const response = await httpClient.get<FatchBooksResponse>
        ("/books", {params:params});
        return response.data;
    } catch (error) {
        return {
            books : [],
            pagination: {
                totalCount:0,
                currentPage:1,
            },
        };
    }
};