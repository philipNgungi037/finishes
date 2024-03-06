

const ProductsData = [
  {
    id: 1,
    category: {
      title: 'Electronics',
      img: 'https://www.thenoiseuk.com/wp-content/uploads/2021/10/Consumer-Electronics-Appliance_blog-1024x701.jpeg'
    },
    name: 'Smart Watch Series X',
    price: 99.99,
    discountedPrice: 79.99,
    discount: 20,
    imgUrl: 'https://www.smartwatchforless.com/wp-content/uploads/2023/03/1-3.jpg',
    additionalParams: 'Waterproof, Bluetooth connectivity'
  },
  {
    id: 2,
    category: {
      title: 'Clothing',
      img: 'https://www.cato.org/sites/cato.org/files/styles/hero_impact_desktop/public/2023-11/fast-fashion2.jpeg?itok=9XNZrGt7'
    },
    name: "Men's Classic Denim Jeans",
    price: 49.99,
    discountedPrice: 39.99,
    discount: 20,
    imgUrl: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/0496471/1.jpg?8445',
    additionalParams: 'Slim fit, Available in various sizes and colors'
  },
  {
    id: 3,
    category: {
      title: 'Beauty',
      img: 'https://static.thcdn.com/images/medium/original/widgets/290-en/34/HP_HERO_MOBILE_600x600_LIPS_MODEL-094534.jpg'
    },
    name: 'Luxury Facial Cream',
    price: 79.99,
    discountedPrice: 59.99,
    discount: 25,
    imgUrl: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/8623941/1.jpg?9077',
    additionalParams: 'Anti-aging, Hydrating formula'
  },
  {
    id: 4,
    category: {
      title: 'Home & Kitchen',
      img: 'https://static.thcdn.com/images/medium/original/widgets/290-en/34/HP_HERO_MOBILE_600x600_LIPS_MODEL-094534.jpg'
    },
    name: 'Stainless Steel Cookware Set (12-piece)',
    price: 149.99,
    discountedPrice: 119.99,
    discount: 20,
    imgUrl: 'https://images-cdn.ubuy.com.sa/64cd3d00a2d3c545434110b9-gotham-steel-12-piece-non-stick-cookware.jpg',
    additionalParams: 'Non-stick coating, Dishwasher safe'
  },
  {
    id: 5,
    category: {
      title: 'Sports & Outdoors',
      img: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg'
    },
    name: 'Camping Tent for 4 Persons',
    price: 129.99,
    discountedPrice: 99.99,
    discount: 23,
    imgUrl: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/6638661/1.jpg?3445',
    additionalParams: 'Waterproof, Lightweight design'
  },
  {
    id: 6,
    category: {
      title: 'Toys & Games',
      img: 'https://previews.123rf.com/images/shangarey/shangarey1903/shangarey190300059/119054819-children-s-playroom-with-plastic-colorful-educational-blocks-toys-games-floor-for-preschoolers.jpg'
    },
    name: 'Remote Control Car',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    imgUrl: 'https://www.jiomart.com/images/product/original/493831479/frendo-red-abs-plastic-remote-control-car-toy-verc3458-product-images-o493831479-p604233475-0-202308301403.jpg?im=Resize=(420,420)',
    additionalParams: 'Rechargeable battery, High-speed capability'
  },
  {
    id: 7,
    category: {
      title: 'Books',
      img: 'https://discoveririshkidsbooks.ie/wp-content/uploads/2023/08/Irish-childrens-books-e1693410021475.jpeg'
    },
    name: 'Bestselling Fiction Novel: "The Last Adventure"',
    price: 12.99,
    discountedPrice: 9.99,
    discount: 23,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfKLoMTENf4Gi-9C41Xhu0LEPX5NtdRLD1QdafYeto4-P-vNPYdrf1YtD9wkwTUwu2jg&usqp=CAU',
    additionalParams: 'Author: John Doe, Hardcover edition'
  },
  {
    id: 8,
    category: {
      title: 'Health & Personal Care',
      img: 'https://www.careinsurance.com/upload_master/media/posts/July2022/personal-hygiene.jpg'
    },
    name: 'Electric Toothbrush',
    price: 29.99,
    discountedPrice: 19.99,
    discount: 33,
    imgUrl: 'https://skywave.co.ke/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-19-at-13.35.50-1.jpeg',
    additionalParams: 'Includes replacement brush heads, Timer feature'
  },
  {
    id: 9,
    category: {
      title: 'Electronics',
      img: 'https://www.thenoiseuk.com/wp-content/uploads/2021/10/Consumer-Electronics-Appliance_blog-1024x701.jpeg'
    },
    name: 'Wireless Noise-Cancelling Headphones',
    price: 149.99,
    discountedPrice: 129.99,
    discount: 13,
    imgUrl: 'https://www.masoko.com/_next/image?url=https%3A%2F%2Fassets.shop.masoko.com%2Fcatalog%2Fproduct%2Fh%2F6%2Fh630gt_pro_1_2_.png&w=640&q=75',
    additionalParams: 'Bluetooth 5.0, Foldable design'
  },
  {
    id: 10,
    category: {
      title: 'Clothing',
      img: 'https://www.cato.org/sites/cato.org/files/styles/hero_impact_desktop/public/2023-11/fast-fashion2.jpeg?itok=9XNZrGt7'
    },
    name: "Women's Athletic Shoes",
    price: 59.99,
    discountedPrice: 49.99,
    discount: 17,
    imgUrl: 'https://image.kilimall.com/kenya/shop/store/goods/5991/2020/06/5991_06461767765843208.jpg.webp',
    additionalParams: 'Breathable mesh material, Available in various sizes'
  },
  {
    id: 11,
    category: {
      title: 'Beauty',
      img: 'https://static.thcdn.com/images/medium/original/widgets/290-en/34/HP_HERO_MOBILE_600x600_LIPS_MODEL-094534.jpg'
    },
    name: 'Organic Vitamin C Serum',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    imgUrl: 'https://i0.wp.com/sterlingcosmetics.co.ke/wp-content/uploads/2022/09/BFF5F107-44F1-4B19-BFC5-786EB1BA1635.jpeg?resize=460%2C460&ssl=1',
    additionalParams: 'Brightening formula, Suitable for all skin types'
  },
  {
    id: 12,
    category: {
      title: 'Home & Kitchen',
      img: 'https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Q4_Storefront_Flip/Kitchen/2021Q4_newnnow_tile_738x500.jpg'
    },
    name: 'Robot Vacuum Cleaner',
    price: 199.99,
    discountedPrice: 159.99,
    discount: 20,
    imgUrl: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4983451/1.jpg?4342',
    additionalParams: 'Wi-Fi connectivity, Voice control compatible'
  },
];
export default ProductsData;