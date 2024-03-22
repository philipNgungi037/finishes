// FeaturesComponent.jsx
import React from 'react';
import { features } from './about-us-data';

const Features = () => {
    return (
        <div className='about-us-features flex justify-between bg-white px-16'>
            {features.map((feature, index) => (
                <div className='about-us-inner text-s font-light p-4 bg-gray-100 rounded-md' key={index}>
                    <div className=' flex flex-col text-center gap-2 '>
                        <h1 dangerouslySetInnerHTML={{ __html: feature.icon }} className='' />
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
