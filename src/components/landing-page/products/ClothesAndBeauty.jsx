import React from 'react'
import { useProductContext } from '../../contexts/product-context/ProductContext';
import ProductCard from './ProductCard';

const ClothesAndBeauty = () => {
    const { BeautyProducts, ClothingProducts } = useProductContext();
    return (
        <div className='clothes-and-beauty  relative  bg-gray-400 mx-16 rounded-md'>
            <div className='clothes-beauty-title '>
                <h1 className='top-offer-title  p-2 w-full text-center uppercase  rounded-md  ' >
                    beauty and clothing only
                </h1>
                {/* <h1 className='underline text-sm text-center p-2'>View All</h1>  */}
            </div>
            <div className='flex justify-between  bg-gray-400 gap-4'>
                <div className='beauty-grid grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-md'>

                    {
                        BeautyProducts.map(
                            (product) =>
                                <ProductCard key={product.id} product={product} width="300px" height="200px" />
                        )
                    }
                </div>
                <div className='grid grid-cols-2 gap-4 bg-gray-600 p-4 rounded-md'>

                    {
                        ClothingProducts.map(
                            (product) =>
                                <ProductCard key={product.id} product={product} width="600px" height="200px" />
                        )
                    }
                </div>
            </div>

        </div >
    )
}

export default ClothesAndBeauty