import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className='mt-[100px] '>
            <Header />
            <div className='flex gap-5 ml-[450px]'>
                <div >
                    <button className='border-2 border-gray-300  py-1 px-4 rounded-md' onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='flex gap-3 font-bold text-lg'>
                    Blogs On <span className='font-bold underline'>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage