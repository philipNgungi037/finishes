import React from 'react';

// A re-usable card with product prop, to be used to display single-item all over the app
const ProductCard = ({ product, width, height }) => {

    // Function to round off prices to the nearest whole number after multiplying by 100
    const roundPrice = (price) => {
      return Math.round(price * 100);
    };
  
  return (
    <div className="product-card bg-white shadow-md relative text-xs rounded-md ">
      <img src={product.imgUrl}
        alt={product.name}
        // className='relative w-[300px] h-[200px]  bg-cover rounded-md 
        className='relative w-[100px] h-[100px]  bg-cover rounded-md mx-[50px] '
      />
      <p className='discount-tag absolute top-0 rounded-md p-1 px-2'><strong>Off -</strong> {product.discount}%</p>
      <div className="details p-4 text-center">
        <h2 className='font-extrabold  '>{product.name}</h2>
        <p className='underline '><strong></strong> {product.category.title}</p>
        <p className='text-sm'><strong> </strong> Ksh{roundPrice(product.discountedPrice)}</p>
        <p className='line-through'><strong></strong> Ksh{roundPrice(product.price)}</p>
        <p><strong></strong> {product.additionalParams}</p>
      </div>
    </div>
  );
};

export default ProductCard;
