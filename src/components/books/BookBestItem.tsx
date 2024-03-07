import { Book } from "@/models/book.model";
import styled from "styled-components";
import BookItem, { BookItemStyle } from "./BookItem";

interface Props {
    book: Book;
    itemIndex: number;
}
export default function BookBestItem({ book, itemIndex }: Props) {
    return (
        <BookBestItemStyle>
            <BookItem book={book} view="grid" />
            <div className="rank">{itemIndex + 1}</div>
        </BookBestItemStyle>
    );
}

const BookBestItemStyle = styled.div`
    ${BookItemStyle} {
        .summary,
        .price,
        .likes {
            display: none;
        }

        h2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    position: relative;

    .rank {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.theme.color.primary};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #fff;
    }
`;
