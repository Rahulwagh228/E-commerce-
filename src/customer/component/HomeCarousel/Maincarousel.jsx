import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mainCarouselData from "./MainCarouselData";

const Maincarousel = () => {
  const items = mainCarouselData.map((items) => (
    <img
      className="cursor-pointer object-cover w-full h-screen -z-10"
      role="presentation"
      src={items.image}
      alt=" "
      
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default Maincarousel;
