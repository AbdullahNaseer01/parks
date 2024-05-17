'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 lg:px-16 px-4 bg-transparent flex flex-wrap items-center py-4">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl text-white">
          Company
        </a>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block" onClick={toggleNavbar}>
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className={`md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`} id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="#">
                Treatments
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1547974996-050bf23b6196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1502856755506-d8626589ef19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1614207794460-e6d26156d408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
      style={{ width: '100%', height: '100vh' }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col lg:items-start justify-center bg-black bg-opacity-50 text-white p-4">
              <h1 className="text-5xl font-bold leading-tight mb-4 lg:text-7xl text-justify  lg:w-[45%] lg:text-start lg:pl-20">
              It’s a Big World Out There, <span className='text-[#FFB60A]'>Go Explore</span> 
              </h1>
              <p className="text-lg text-gray-300 mb-8 lg:text-3xl lg:pl-20">
                Discover amazing features and services that await you.
              </p>
             
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
}
