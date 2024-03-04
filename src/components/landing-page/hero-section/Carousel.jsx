import React, { useState, useEffect } from "react";
import CarouselData from "./CarouselData";



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

  return (
    <div className="carousel w-3/4 relative ">
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
        {/* <img src={CarouselImages[currentIndex].image2Url} alt="" className="w-full"/> */}
      </div>
      {/* <div className="w-full why-us-label mt-8 h-48 absolute top- p-4 bg-yellow-400">

      </div> */}
      <div className="carousel-buttons flex justify-between text-2xl">
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