import React, { useEffect, useState } from "react";
import { fetchBookData } from "../services/services";
import Loader from "./Loader";
import BookCard from "../components/BookCard";

const BookStorePage = () => {
    const [bookData, setBookData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBooks = async () => {
            const booksDataFromApi = await fetchBookData();
            console.log('datatatatata', booksDataFromApi)
            if (booksDataFromApi) {
                setBookData((booksDataFromApi));
                setIsLoading(false);
            }
        }
        getBooks();
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <>
                        <Loader />
                    </>
                ) : (
                    <>
                        <div className="container content-padding">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {bookData && bookData?.map((book, index) => (
                                    <div key={index} className="col">
                                        <BookCard book={book} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default BookStorePage;