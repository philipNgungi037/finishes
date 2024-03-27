import React from 'react'

const CategorySection = () => {
    // create mock data that will be replaced by real one later
    const categories = [
        { name: "Electronics", icon: "tv" },
        { name: "Clothing & Apparel", icon: "shirt" },
        { name: "Home & Kitchen", icon: "planet" },
        { name: "Beauty & Personal Care", icon: "heart" },
        { name: "Books & Media", icon: "book" },
        { name: "Sports & Outdoors", icon: "football" },
        { name: "Toys & Games", icon: "play" },
        { name: "Health & Wellness", icon: "medkit" },
        { name: "Food & Groceries", icon: "restaurant" },
        { name: "Jewelry & Accessories", icon: "watch" }
    ];

    return (
        <div className='category-section w-full lg:w-1/4 lg:h-[380px] lg:rounded-md  overflow-x-scroll lg:overflow-x-hidden bg-white shadow-lg lg:mt-2 font-extralight lg:font-normal  text-xs lg:text-sm  text-black text-center'>
            <div className='category-wrapper m-4 flex lg:block '>
                {
                    // map through the data to display icon alongside its name/category
                    categories.map(
                        (category) =>
                            <div className=' lg:flex gap-4 p-1 border-r lg:border-none  '>
                                {/* i have used fake `a tag links` to be replaced with real link using router dom  */}
                                <a href='11'><h1 className='hidden lg:block'>
                                    <ion-icon name={category.icon}></ion-icon>
                                </h1>
                                </a>
                                <a href='113'>
                                    <h1>
                                        {category.name}
                                    </h1>
                                </a>
                            </div>
                    )

                }
            </div>

        </div>
    )
}

export default CategorySection