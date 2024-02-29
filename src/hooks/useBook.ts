import { useEffect, useState } from "react";
import { BookDetail } from "@/models/book.model";
import { fetchBook, likeBook, unlikeBook } from "@/api/books.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { addCart } from "@/api/carts.api";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const { isloggedIn } = useAuthStore();
    const { showAlert } = useAlert();
    const [cartAdded, setCartAdded] = useState(false);

    const likeToggle = () => {
        if (!isloggedIn) {
            showAlert("로그인이 필요합니다.");
            return;
        }

        if (!book) return;

        if (book.liked) {
            unlikeBook(book.id).then(() =>
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                })
            );
        } else {
            likeBook(book.id).then(() =>
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                })
            );
        }
    };

    const addToCart = (quantity: number) => {
        if (!book) return;

        addCart({
            bookId: book.id,
            quantity: quantity,
        }).then(
            () => {
                setCartAdded(true);

                setTimeout(() => {
                    setCartAdded(false);
                }, 3000);
            },
            (error) => showAlert("로그인을 해주세요")
        );
    };

    useEffect(() => {
        if (!bookId) return;

        fetchBook(bookId).then((book) => setBook(book));
    }, [bookId]);

    return { book, likeToggle, addToCart, cartAdded };
};
