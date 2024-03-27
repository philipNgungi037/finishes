import React from 'react'
import { description } from './about-us-data'
// import Logo from '../../header/Logo'
import Features from './Features'

const Description = () => {
    return (
        <div className='about-us-description bg-white rounded-md'>
            <h1 className='description-title text-sm lg:text-xl px-2 lg:px-16 py-4 lg:py-8 '>
               About us
                {/* <Logo /> */}
               
            </h1>
            <Features/>
            <div className='description-inner px-2 lg:px-16 py-8 text-justify  text-xs lg:text-sm '>
                {
                    description.map(
                        (paragraph, index) =>
                            <div key={index} className='description-item py-2 '>
                                {Object.values(paragraph)[0]}
                            </div>

                    )
                }
            </div>

        </div>
    )
}

export default Description