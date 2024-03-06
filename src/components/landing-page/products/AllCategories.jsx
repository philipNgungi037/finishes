import React from 'react';
import { useProductContext } from '../../contexts/product-context/ProductContext';

const AllCategories = () => {
    const { AllCategories } = useProductContext();

    console.log(AllCategories); 

    return (
        <div>
            <h2>All Categories</h2>
            <div className="categories-container flex overflow-x-scroll p-16 my-8">
                {AllCategories.map((category, index) => (
                    <div key={index} className="category-item">
                        <h3>{category.title}</h3>
                        <img src={category.img} alt={category.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
