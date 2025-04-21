import React, { use } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleData }) => {
    const { image, bookName, rating, category, bookId, tags, yearOfPublishing, publisher } = singleData;
    // const data = use(dataPromised)
    // console.log(singleData)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 p-10  flex flex-1 border border-blue-500">
                    <figure className='bg-gray-100 p-6 rounded-2xl'>
                        <img
                            src={image} className='h-[144px]'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-around'>
                            {
                                tags.map(tag => <button>{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">{yearOfPublishing}</div>
                        </h2>
                        <p className='text-lg font-semibold'>Book By:{publisher}</p>
                        <div className='border-1 border-dashed'>

                        </div>
                        <div className="card-actions mt-2 justify-between">
                            <div className="badge text-lg">{category}</div>
                            <div className="badge">{rating}<FaStarHalfAlt></FaStarHalfAlt></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;