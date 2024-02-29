import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        // search logic here using the 'searchQuery' state
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className='search flex items-center '>
            <div className='text-center p-1 lg:p-2 text-xs sm:text-sm  bg-yellow-200'>
                <ion-icon name="search-outline"></ion-icon>
            </div>

            <input className='text-center p-1 lg:p-2 text-xs sm:text-sm bg-yellow-200  '
                type="text"
                placeholder="search for products, brands, categories... " 
                value={searchQuery}
                onChange={handleSearchChange}
            />

            <button className='bg-yellow-200 p-1 lg:p-2 px-4 text-xs sm:text-sm ml-2 lg:ml-8' onClick={handleSearch}>SEARCH</button>
        </div>
    );
};

export default Search;