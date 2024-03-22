import React from 'react'
import { socialLinks } from './footer-data'
//This component will be displaying social media related links. It will import the links from Footer-data File. then .map will be used to display each link.
const SocialLinks = () => {
    return (
        <div className=''>
            <h1 className='social-title mb-4 font-bold '>
                Stay Connected
            </h1>
            <div className='footer-social-links flex justify-between gap-4 w-1/4 '>
                {
                    socialLinks.map(
                        (link, index) =>
                            <div key={index} className=''>
                                {link.name}
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default SocialLinks