import React, { useState, useEffect } from "react";
import CarouselData from "./CarouselData";
import NormalButton from "../../re-usable components/buttons/NormalButton";



const Carousel = () => {

  // initialize index state
  const [currentIndex, setCurrentIndex] = useState(0);



  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % CarouselData.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1)
    );
  };

  // Automatically move to the next image every 1... secs
  useEffect(() => {
    const interval = setInterval(nextImage, 5900);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // An event function to handle action button inside hero-section, for now it does nothing
  const handleClick = () => {
    // console.log('button clicked')
    void {};
  };

  return (
    <div className="carousel w-3/4 relative">
      <img
        src={CarouselData[currentIndex].imageUrl}
        alt={CarouselData[currentIndex].title}
        className="carousel-img w-full relative  h-[380px] rounded-md"
      />
      <div className="carousel-img-details absolute top-4 p-4">
        <h1 className="carousel-img-title text-2xl pr-8">
          {CarouselData[currentIndex].title}
        </h1>
        <p className="carousel-img-location">
          {CarouselData[currentIndex].description}
        </p>
        <p className="carousel-img-offer text-white">
          {CarouselData[currentIndex].offer}
        </p>
      </div>

      {/* Action button that directs users to shopping */}
      <div className="action-button w-1/4 absolute bottom-16 right-32">
        <NormalButton onClick={handleClick} color="blue">
          SHOP NOW!!!
        </NormalButton>
      </div>


      <div className="carousel-buttons w-full absolute bottom-4 px-2 flex justify-between  text-2xl">
        <button onClick={nextImage} className="bg-white p-2 rounded-full" >
          <ion-icon name="chevron-back-outline" />
        </button>
        <button onClick={prevImage} className="bg-white p-2 rounded-full" >
          <ion-icon name="chevron-forward-outline" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;