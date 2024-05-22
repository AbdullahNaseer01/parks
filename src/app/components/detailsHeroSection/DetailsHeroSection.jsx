"use client"; 
import React, { useState, useEffect } from "react";

const DetailsHeroSection = ({ images, interval = 3000 }) => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, interval);

  return () => clearInterval(timer);
}, [images.length, interval]);

  return (
    <div className="relative h-screen w-full">
      <img
        key={currentIndex}
        src={images[currentIndex].url}
        alt={images[currentIndex].altText}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl text-white font-bold">{images[currentIndex].title}</h1>
        <p className="text-xl text-white mt-4">{images[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default DetailsHeroSection;

