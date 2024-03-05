import React from 'react';

// A re-usable card with product prop, to be used to display single-item all over the app
const ProductCard = ({ product, width, height }) => {
  return (
    <div className="product-card bg-white shadow-md relative text-xs rounded-md ">
      <img src={product.imgUrl}
        alt={product.name}
        // className='relative w-[300px] h-[200px]  bg-cover rounded-md  '
        className={`relative w-[${width}] h-[${height}] bg-cover rounded-md m-0 w-full`}
      />
      <p className='discount-tag absolute top-0 rounded-md p-1 px-2'><strong>Off -</strong> {product.discount}%</p>
      <div className="details p-4 text-center">
        <h2 className='font-extrabold  '>{product.name}</h2>
        <p className='underline '><strong></strong> {product.category}</p>
        <p className='text-sm'><strong> </strong> ${product.discountedPrice}</p>
        <p className='line-through'><strong></strong> ${product.price}</p>
        <p><strong></strong> {product.additionalParams}</p>
      </div>
    </div>
  );
};

export default ProductCard;
