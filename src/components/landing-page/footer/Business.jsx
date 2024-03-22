import React from 'react'
import { businessLinks } from './footer-data'


const Business = () => {                                 
    //This component will be displaying businenss related links. It will import the links from Footer-data File. then .map will be used to display each link.
    return (
        <div className=''>
            <h1 className='business-links-title mb-4 font-bold'>
                Businsses
            </h1>
            <div className='business-links'>
                {
                    businessLinks.map(
                        (link, index) =>
                            <div key={index}>
                                {link.name}
                            </div>

                    )
                }
            </div>

        </div>
    )
}

export default Business