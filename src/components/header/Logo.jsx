import React from 'react'

const Logo = () => {
    const logo = "No logo";
    return (
        <div className='logo  text-4xl font-extrabold    rounded-md p-4'>
            <h3 className='logo-text uppercase line-through '>
                {logo}
            </h3>
        </div>
    )
}

export default Logo