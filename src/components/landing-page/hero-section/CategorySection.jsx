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
        <div className='category-section w-1/4 h-[380px] rounded-md bg-white shadow-lg'>
            <div className='category-wrapper m-4 '>
                {
                    // map through the data to display icon alongside its name/category
                    categories.map(
                        (category) =>
                            <div className='flex gap-4 p-1  '>

                                {/* i have used fake `a tag links` to be replaced with real link using router dom  */}
                                <a href='11'><h1 className=''>
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