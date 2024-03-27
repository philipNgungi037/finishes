import React from 'react';
import { useProductContext } from '../../contexts/product-context/ProductContext';

const AllCategories = () => {
    const { AllCategories } = useProductContext();

    // console.log(AllCategories);

    return (
        <div className='all-categories-main px-0 lg:px-16 mb-4 bg-white flex justify-between gap-2 lg:gap-4 mx-0 lg:mx-16 rounded-md  overflow-x-scroll'>
            {AllCategories.map((category, index) => (
                <div key={index} className="category-item mt-4 font-light text-xs lg:text-sm text-center">
                    <img src={category.img} alt={category.title} className=' xs:h-[100px] sm:h-[150px]  rounded-md bg-cover' />
                    <h3>{category.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default AllCategories;
