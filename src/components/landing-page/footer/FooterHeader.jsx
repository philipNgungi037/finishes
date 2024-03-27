import React from 'react'
import FooterEmail from './FooterEmail'
import FooterLogo from './FooterLogo'
import FooterPayments from './FooterPayments'

//  Footer header is just an UI component that renders logo, email, paymnets options.

const FooterHeader = () => {
  return (
    <div className='footer-header flex flex-col xs:flex-row justify-between items-center col-span-3 bg-gray-400 py-2 lg:py-0 px-2 lg:px-16 '>
      <FooterLogo/>
        <FooterEmail/>
        <FooterPayments/> 
    </div>
  )
}

export default FooterHeader