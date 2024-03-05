import React from 'react'
import Carousel from './Carousel'
import CategorySection from './CategorySection'
import './hero-section.css'

const HeroSection = () => {
    return (
        <div className='hero-section flex gap-4 justify-between p-16'>
            <CategorySection/> 
            <Carousel/> 

        </div>
    )
}

export default HeroSection