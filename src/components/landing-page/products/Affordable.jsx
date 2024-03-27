import React from 'react'
import { useProductContext } from '../../contexts/product-context/ProductContext'
import ProductCard from './ProductCard';

const Affordable = () => {

    // This component displays affordable products variable
    const { AffordableProducts} = useProductContext();

    return (
        <div className='relative bg-gray-300 mx-2 lg:mx-16 rounded-md'>
            <div className='top-offers grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6  gap-1 lg:gap-4 px-2 py-4'>
                <h1 className='top-offer-title  p-2 w-full text-center uppercase  col-span-2 xs:col-span-3  lg:col-span-6 rounded-md  ' >
                    Most Affordable
                </h1>
                {
                    AffordableProducts.map(
                        (product) =>
                            <ProductCard key={product.id} product={product} width="600px" height="200px" />
                    )
                }
            </div>
        </div >
    )
}

export default Affordable;