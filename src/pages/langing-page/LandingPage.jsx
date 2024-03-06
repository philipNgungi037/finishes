import React from 'react'
import HeroSection from '../../components/landing-page/hero-section/HeroSection'
import '../../components/landing-page/products/products.css'
import TopOffers from '../../components/landing-page/products/TopOffers'
import AllCategories from '../../components/landing-page/products/AllCategories'

const LandingPage = () => {
  return (
    <div className='landing-page bg-gray-200 h-full '>
      <HeroSection />
      <AllCategories/>
      <TopOffers/>
      {/* <AllProducts/> */}
    </div>
  )
}

export default LandingPage