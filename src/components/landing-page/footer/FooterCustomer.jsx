import React from 'react'
import { customerCenter } from './footer-data'
//This component will be displaying customer-care related links. It will import the links from Footer-data File. then .map will be used to display each link.
const FooterCustomer = () => {
    return (
        <div className=''>
            <h1 className='center-title mb-4 font-bold'>
                Help Center
            </h1>
            <div className='footer-customer'>
                {
                    customerCenter.map(
                        (item, index) =>
                            <div key={index} className=''>
                                {item.name}
                            </div>

                    )
                }
            </div>

        </div>
    )
}

export default FooterCustomer 