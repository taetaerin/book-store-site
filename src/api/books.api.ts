import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
    categoryId?: number;
    news?: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBoosResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
    console.log('params 가져온거', params)
    try {
        const response = await httpClient.get<FetchBoosResponse>("/books", {
            params: params,
        });
        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 1,
            },
        };
    }
};
