import React from 'react'
import { description } from './about-us-data'
// import Logo from '../../header/Logo'
import Features from './Features'

const Description = () => {
    return (
        <div className='about-us-description bg-white rounded-md'>
            <h1 className='description-title text-xl px-16 py-8 '>
               About us
                {/* <Logo /> */}
               
            </h1>
            <Features/>
            <div className='description-inner px-16 py-8 text-justify   '>
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