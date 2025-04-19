import React from 'react';
import bannerimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center gap-2 bg-gray-100 p-8'>
            <div className='space-y-5'>
                <h2 className='font-semibold text-5xl'>Books to freshen <br /> up  your bookshelf</h2>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='' src={bannerimage} alt="banner image" />
            </div>
        </div>
    );
};

export default Banner;