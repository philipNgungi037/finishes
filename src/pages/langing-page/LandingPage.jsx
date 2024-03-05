import React from 'react'
import HeroSection from '../../components/landing-page/hero-section/HeroSection'
import AllProducts from '../../components/landing-page/products/AllProducts'
import '../../components/landing-page/products/products.css'
import TopOffers from '../../components/landing-page/products/TopOffers'

const LandingPage = () => {
  return (
    <div className='landing-page bg-gray-200 h-full '>
      <HeroSection />
      <TopOffers/>
      {/* <AllProducts/> */}
    </div>
  )
}

export default LandingPage