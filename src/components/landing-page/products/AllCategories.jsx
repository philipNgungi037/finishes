import React from 'react';
import { useProductContext } from '../../contexts/product-context/ProductContext';

const AllCategories = () => {
    const { AllCategories } = useProductContext();

    console.log(AllCategories); 

    return (
        <div className='all-categories-main px-16 mb-4 bg-white flex gap-4 overflow-x-scroll '>
            <h2>All Categories</h2>
                {AllCategories.map((category, index) => (
                    <div key={index} className="category-item">
                        <h3>{category.title}</h3>
                        <img src={category.img} alt={category.title} />
                    </div>
                ))}
        </div>
    );
};

export default AllCategories;
