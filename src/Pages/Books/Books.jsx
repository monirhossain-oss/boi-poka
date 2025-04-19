import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // console.log(data)
    // const [allBooks, setAllBooks]=useState([]);
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // console.log(data)
    //         setAllBooks(data)
    //     })
    // },[])
    // const dataPromised = fetch('booksData.json')
    // .then(res=> res.json())
    return (
        <div>
            <h2 className='text-4xl text-center p-6 font-semibold'>Books</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className='grid grid-cols-3'>
                    {
                        data.map(singleData => <Book key={singleData.bookId} singleData={singleData}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;