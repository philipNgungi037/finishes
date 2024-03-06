import React from 'react';
import { useProductContext } from '../../contexts/product-context/ProductContext';

const AllCategories = () => {
    const { AllCategories } = useProductContext();

    console.log(AllCategories);

    return (
        <div className='all-categories-main px-16 mb-4 bg-white flex gap-4 mx-16 rounded-md'>
            {AllCategories.map((category, index) => (
                <div key={index} className="category-item my-4 font-light  text-sm text-center">
                    <img src={category.img} alt={category.title} className='w-[200px] h-[200px] rounded-md ' />
                    <h3>{category.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default AllCategories;
