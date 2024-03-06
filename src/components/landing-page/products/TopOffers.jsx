import React from 'react'
import { useProductContext } from '../../contexts/product-context/ProductContext'
import ProductCard from './ProductCard';

const TopOffers = () => {

    // This component displays top-offers products variable
    const { TopOffers } = useProductContext();

    return (
        <div className='relative'>
            <div className='top-offers grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-6  gap-4 px-16'>
                <h1 className='top-offer-title bg-white p-2 w-full text-center uppercase  col-span-1 lg:col-span-6 rounded-md  ' >
                    top offers
                </h1>
                {
                    TopOffers.map(
                        (product) =>
                            <ProductCard key={product.id} product={product} width="600px" height="200px" />
                    )
                }
            </div>
        </div >
    )
}

export default TopOffers