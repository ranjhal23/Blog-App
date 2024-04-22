import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div className='flex gap-7 mt-[100px] ml-[450px] mb-1'>
                <div>
                    <button className='border-2 border-gray-300  py-1 px-4 rounded-md'  onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-lg mr-3 font-bold flex gap-4'>
                    Blog Tagged<span className="text-lg font-semibold underline text-blue-700 cursor-pointer mr-2">#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage