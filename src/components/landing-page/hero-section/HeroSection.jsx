import React from 'react'
import Carousel from './Carousel'
import CategorySection from './CategorySection'
import './hero-section.css'

const HeroSection = () => {
    return (
        <div className='hero-section lg:flex gap-4 justify-between p-0 lg:px-16 '>
            <CategorySection/> 
            <Carousel/> 

        </div>
    )
}

export default HeroSection