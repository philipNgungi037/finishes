import React, { createContext, useContext } from 'react';
import ProductsData from '../../landing-page/products/ProductsData';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    // products categorized-varables that can be accessed anywhere in the app by use of `useContext`
    const products = ProductsData;
    const AllProducts = products;
    const AllCategories = [...new Set(ProductsData.map(product => product.category.title))];
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
