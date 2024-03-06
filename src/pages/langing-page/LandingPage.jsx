import React from 'react'
import HeroSection from '../../components/landing-page/hero-section/HeroSection'
import '../../components/landing-page/products/products.css'
import TopOffers from '../../components/landing-page/products/TopOffers'
import AllCategories from '../../components/landing-page/products/AllCategories'
import Affordable from '../../components/landing-page/products/Affordable'
import ClothesAndBeauty from '../../components/landing-page/products/ClothesAndBeauty'

const LandingPage = () => {
  return (
    <div className='landing-page bg-gray-200 h-full flex flex-col gap-4 '>
      <HeroSection />
      <AllCategories/>
      <TopOffers/>
      <Affordable/>
      <ClothesAndBeauty/>
      {/* <AllProducts/> */}
    </div>
  )
}

export default LandingPage