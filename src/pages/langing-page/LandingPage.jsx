import React from 'react'
import HeroSection from '../../components/landing-page/hero-section/HeroSection'
import '../../components/landing-page/products/products.css'
import TopOffers from '../../components/landing-page/products/TopOffers'
import AllCategories from '../../components/landing-page/products/AllCategories'
import Affordable from '../../components/landing-page/products/Affordable'
import ClothesAndBeauty from '../../components/landing-page/products/ClothesAndBeauty'
import AboutUs from '../../components/landing-page/about-us/About-us'

const LandingPage = () => {
  return (
    <div className='landing-page bg-gray-200 h-full flex flex-col gap-4 '>
      <HeroSection />
      <AllCategories/>
      <TopOffers/>
      <Affordable/>
      <ClothesAndBeauty/>
      <AboutUs/>
      {/* <AllProducts/> */}
    </div>
  )
}

export default LandingPage