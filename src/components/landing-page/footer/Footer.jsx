import React from 'react'
import FooterHeader from './FooterHeader'
import ImportantLinks from './ImportantLinks'
import FooterCustomer from './FooterCustomer'
import SocialLinks from './SocialLinks'
import Business from './Business'

//  Footer is just an UI component that renders all footer related components.
const Footer = () => {
  return (
    <div className='footer'>
      <FooterHeader />
      <div className='flex justify-between mt-4 px-16' >
        <ImportantLinks />
        <FooterCustomer />
        <Business />
        <SocialLinks />
      </div>
      <h1 className='copy-right my-4 font-extralight text-center border-t border-yellow-400 '>
      Copyright 2024 <span className='line-through '>No logo</span>, All rights reserved.
      </h1>
    </div>
  )
}

export default Footer