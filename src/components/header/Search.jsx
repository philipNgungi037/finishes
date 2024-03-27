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
        <div className='search relative  flex items-center w-full lg:w-1/2  '>
            

            <input className='relative  text-justify  p-1 lg:p-2 text-xs sm:text-sm border border-black rounded-md w-full '
                type="text"
                placeholder=" " 
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className='absolute left-0  text-center p-1 lg:p-2 text-lg rounded-md'>
                <ion-icon name="search-outline"></ion-icon>
            </div>

            <button className='search-button hidden lg:block rounded-md p-1 lg:p-2 px-4 text-xs sm:text-sm ml-2 ' onClick={handleSearch}>SEARCH</button>
        </div>
    );
};

export default Search;