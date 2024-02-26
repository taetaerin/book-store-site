import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BookItem from "./BookItem";
import { formatNumber } from "../../utils/format";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
    id: 1,
    title: 'dummy book',
    img: 5,
    categoryId: 1,
    form: 'paper',
    isbn: 1,
    summary: "dummy summary",
    detail: "dummy detail",
    author: "dummy author",
    pages: 100,
    contents: 'dummy contents',
    price: 12000,
    pubDate: '2022-02-02',
    likes: 1,
}


describe("book item 테스트", () => {
    it("렌더 확인", () => {
        const {getByText} = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        )

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText('12,000원')).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
    });

})