"use client";
import { HeroSection } from "./components/heroSection/HeroSection";
import AnimatedCards from "./components/AnimatedCards/AnimatedCards";
import Grid from "./components/grid/Grid";
import HomePage from "./components/homePage/Home";
import * as geolib from "geolib";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import Blogs from "./components/blogs/Blogs";
import LocationDetails from "./components/Location/LocationDetails";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const targetLocation = {
          latitude: 31.447486543385185,
          longitude: 73.08379020264066,
        };

        const distance = geolib.getDistance(userLocation, targetLocation);
        console.log(
          "You are ",
          distance,
          "meters away from 31.447486543385185, 73.08379020264066"
        );
      },
      () => {
        alert("Position could not be determined.");
      }
    );
  }, []);

  return (
    <>
      <HomePage />
      <HeroSection />
      <Grid />

      {/* <AnimatedCards/> */}
      <Blogs />
      {/* <LocationDetails/> */}
    </>
  );
}
