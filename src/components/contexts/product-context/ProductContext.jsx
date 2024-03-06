import React, { createContext, useContext } from 'react';
import ProductsData from '../../landing-page/products/ProductsData';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    // products categorized-varables that can be accessed anywhere in the app by use of `useContext`
    const products = ProductsData;
    const AllProducts = products;

    // use a Set named uniqueCategories to store unique category titles and iterate over each product in ProductsData, adding its category title to the uniqueCategories set.
    // Then use Array.from() to convert the set to an array and then use map() to create an array of category objects with only the title and img properties.
    const uniqueCategories = new Set();
    ProductsData.forEach(product => uniqueCategories.add(product.category.title));
    const AllCategories = Array.from(uniqueCategories).map(categoryTitle => {
        const product = ProductsData.find(product => product.category.title === categoryTitle);
        return product.category;
    });


    const TopOffers = products.filter(product => product.discount > 20);
    const TopPrice = products.reduce((prev, current) => (prev.price > current.price ? prev : current));
    const ElectronicsProducts = products.filter(product => product.category.title === 'Electronics');
    const ClothingProducts = products.filter(product => product.category.title === 'Clothing');
    const BeautyProducts = products.filter(product => product.category.title === 'Beauty');
    const ExpensiveProducts = products.filter(product => product.price > 100);
    const AffordableProducts = products.filter(product => product.price < 50);

    return (
        <ProductContext.Provider value={{
            AllProducts,
            TopOffers,
            TopPrice,
            ElectronicsProducts,
            ClothingProducts,
            BeautyProducts,
            ExpensiveProducts,
            AffordableProducts,
            AllCategories
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(ProductContext);
};
