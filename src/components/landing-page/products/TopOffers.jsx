import React from 'react'
import { useProductContext } from '../../contexts/product-context/ProductContext'
import ProductCard from './ProductCard';

const TopOffers = () => {

    // This component displays top-offers products variable
    const { TopOffers } = useProductContext();

    return (
        <div className=''>
            <div className='top-offers grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6  gap-1 lg:gap-4 px-1 lg:px-16'>
                <h1 className='top-offer-title bg-white p-2 w-full text-center uppercase  col-span-2 xs:col-span-3 lg:col-span-6 rounded-md  ' >
                    top offers
                </h1>
                {
                    TopOffers.map(
                        (product) =>
                            // <div className='flex justify-center items-center'>
                                <ProductCard key={product.id} product={product} className />
                            
                    )
                }
            </div>
        </div >
    )
}

export default TopOffers