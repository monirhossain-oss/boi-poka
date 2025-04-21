import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { image, review, bookName } = singleBook;
    // console.log(singleBook)
    return (
        <div className='flex flex-col items-center justify-center p-8 m-10 border-1'>
            <img className='h-[200px] w-[150px]' src={image} alt="book image" />
            <h2>{bookName}</h2>
            <p>{review}</p>

            <div>
                <button className="btn btn-accent m-2">Mark As Read</button>
                <button className="btn btn-info m-2">Add To Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;