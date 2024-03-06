import React from 'react'
import { useProductContext } from '../../contexts/product-context/ProductContext'
import ProductCard from './ProductCard';

const Affordable = () => {

    // This component displays affordable products variable
    const { AffordableProducts} = useProductContext();

    return (
        <div className='relative bg-gray-300 mx-16 rounded-md'>
            <div className='top-offers grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5  gap-4 px-16 py-4'>
                <h1 className='top-offer-title  p-2 w-full text-center uppercase  col-span-1 lg:col-span-6 rounded-md  ' >
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