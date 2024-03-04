import React from 'react';

const ProductsData = [
  {
    id: 1,
    category: 'Electronics',
    name: 'Smart Watch Series X',
    price: 99.99,
    discountedPrice: 79.99,
    discount: 20,
    imgUrl: 'https://example.com/smart_watch_series_x.jpg',
    additionalParams: 'Waterproof, Bluetooth connectivity'
  },
  {
    id: 2,
    category: 'Clothing',
    name: "Men's Classic Denim Jeans",
    price: 49.99,
    discountedPrice: 39.99,
    discount: 20,
    imgUrl: 'https://example.com/mens_denim_jeans.jpg',
    additionalParams: 'Slim fit, Available in various sizes and colors'
  },
  {
    id: 3,
    category: 'Beauty',
    name: 'Luxury Facial Cream',
    price: 79.99,
    discountedPrice: 59.99,
    discount: 25,
    imgUrl: 'https://example.com/luxury_facial_cream.jpg',
    additionalParams: 'Anti-aging, Hydrating formula'
  },
  {
    id: 4,
    category: 'Home & Kitchen',
    name: 'Stainless Steel Cookware Set (12-piece)',
    price: 149.99,
    discountedPrice: 119.99,
    discount: 20,
    imgUrl: 'https://example.com/cookware_set.jpg',
    additionalParams: 'Non-stick coating, Dishwasher safe'
  },
  {
    id: 5,
    category: 'Sports & Outdoors',
    name: 'Camping Tent for 4 Persons',
    price: 129.99,
    discountedPrice: 99.99,
    discount: 23,
    imgUrl: 'https://example.com/camping_tent.jpg',
    additionalParams: 'Waterproof, Lightweight design'
  },
  {
    id: 6,
    category: 'Toys & Games',
    name: 'Remote Control Car',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    imgUrl: 'https://example.com/remote_control_car.jpg',
    additionalParams: 'Rechargeable battery, High-speed capability'
  },
  {
    id: 7,
    category: 'Books',
    name: 'Bestselling Fiction Novel: "The Last Adventure"',
    price: 12.99,
    discountedPrice: 9.99,
    discount: 23,
    imgUrl: 'https://example.com/the_last_adventure_novel.jpg',
    additionalParams: 'Author: John Doe, Hardcover edition'
  },
  {
    id: 8,
    category: 'Health & Personal Care',
    name: 'Electric Toothbrush',
    price: 29.99,
    discountedPrice: 19.99,
    discount: 33,
    imgUrl: 'https://example.com/electric_toothbrush.jpg',
    additionalParams: 'Includes replacement brush heads, Timer feature'
  },
  {
    id: 9,
    category: 'Electronics',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 149.99,
    discountedPrice: 129.99,
    discount: 13,
    imgUrl: 'https://example.com/noise_cancelling_headphones.jpg',
    additionalParams: 'Bluetooth 5.0, Foldable design'
  },
  {
    id: 10,
    category: 'Clothing',
    name: "Women's Athletic Shoes",
    price: 59.99,
    discountedPrice: 49.99,
    discount: 17,
    imgUrl: 'https://example.com/womens_athletic_shoes.jpg',
    additionalParams: 'Breathable mesh material, Available in various sizes'
  },
  {
    id: 11,
    category: 'Beauty',
    name: 'Organic Vitamin C Serum',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    imgUrl: 'https://example.com/vitamin_c_serum.jpg',
    additionalParams: 'Brightening formula, Suitable for all skin types'
  },
  {
    id: 12,
    category: 'Home & Kitchen',
    name: 'Robot Vacuum Cleaner',
    price: 199.99,
    discountedPrice: 159.99,
    discount: 20,
    imgUrl: 'https://example.com/robot_vacuum_cleaner.jpg',
    additionalParams: 'Wi-Fi connectivity, Voice control compatible'
  },
  {
    id: 13,
    category: 'Sports & Outdoors',
    name: 'Yoga Mat with Carrying Strap',
    price: 24.99,
    discountedPrice: 19.99,
    discount: 20,
    imgUrl: 'https://example.com/yoga_mat.jpg',
    additionalParams: 'Eco-friendly material, Non-slip surface'
  },
  {
    id: 14,
    category: 'Toys & Games',
    name: 'LEGO Classic Creative Bricks Set (500 Pieces)',
    price: 29.99,
    discountedPrice: 24.99,
    discount: 17,
    imgUrl: 'https://example.com/lego_bricks_set.jpg',
    additionalParams: 'Includes a variety of colorful bricks, Compatible with other LEGO sets'
  },
  {
    id: 15,
    category: 'Books',
    name: 'Cookbook: "Healthy Eating Made Easy"',
    price: 19.99,
    discountedPrice: 14.99,
    discount: 25,
    imgUrl: 'https://example.com/healthy_eating_cookbook.jpg',
    additionalParams: 'Author: Jane Smith, Paperback edition'
  },
  {
    id: 16,
    category: 'Health & Personal Care',
    name: 'Aromatherapy Essential Oil Diffuser',
    price: 34.99,
    discountedPrice: 24.99,
    discount: 29,
    imgUrl: 'https://example.com/essential_oil_diffuser.jpg',
    additionalParams: 'LED light changing, Timer settings'
  },
  {
    id: 17,
    category: 'Electronics',
    name: '4K Ultra HD Smart TV (55-inch)',
    price: 699.99,
    discountedPrice: 599.99,
    discount: 14,
    imgUrl: 'https://example.com/smart_tv_4k_ultra_hd.jpg',
    additionalParams: 'Built-in streaming apps, Voice remote included'
  },
  {
    id: 18,
    category: 'Clothing',
    name: 'Unisex Beanie Hat',
    price: 19.99,
    discountedPrice: 14.99,
    discount: 25,
    imgUrl: 'https://example.com/beanie_hat.jpg',
    additionalParams: 'One size fits all, Available in various colors'
  },
  {
    id: 19,
    category: 'Beauty',
    name: 'Anti-Acne Facial Cleanser',
    price: 24.99,
    discountedPrice: 19.99,
    discount: 20,
    imgUrl: 'https://example.com/anti_acne_cleanser.jpg',
    additionalParams: 'Salicylic acid, Oil-free formula'
  },
  {
    id: 20,
    category: 'Home & Kitchen',
    name: 'Electric Kettle (1.7 Liters)',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    imgUrl: 'https://example.com/electric_kettle.jpg',
    additionalParams: 'Fast boil, Auto shut-off feature'
  },
];

export default ProductsData;
