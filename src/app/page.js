'use client'
import { HeroSection } from "./components/heroSection/HeroSection";
import AnimatedCards from "./components/AnimatedCards/AnimatedCards";
import Grid from "./components/grid/Grid";
import HomePage from "./components/homePage/Home";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Blogs from "./components/blogs/Blogs";
import LocationDetails from "./components/Location/LocationDetails";
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
   <>
  
   <HomePage/>
   <HeroSection />
   {/* <Grid/> */}
  
   {/* <AnimatedCards/> */}
   <Blogs/>
   {/* <LocationDetails/> */}
  
   </>
  );
}
