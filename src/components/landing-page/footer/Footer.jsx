import React from 'react'
import FooterHeader from './FooterHeader'
import ImportantLinks from './ImportantLinks'
import FooterCustomer from './FooterCustomer'
import SocialLinks from './SocialLinks'
import Business from './Business'

//  Footer is just an UI component that renders all footer related components.
const Footer = () => {
  return (
    <div className='footer bg-gray-500'>
      <FooterHeader />
      <div className='flex justify-between mt-2 lg:mt-4 px-2 lg:px-16 text-[11px] sm:text-sm' >
        <ImportantLinks />
        <FooterCustomer />
        <Business />
        <SocialLinks />
      </div>
      <h1 className='copy-right my-4 font-extralight text-center text-[11px] sm:text-sm border-t border-yellow-400 '>
      Copyright 2024 <span className='line-through uppercase '>No logo</span>, All rights reserved.
      </h1>
    </div>
  )
}

export default Footer