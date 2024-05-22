// "use client";
// import HeroSection from "./components/heroSection/HeroSection";
// import AnimatedCards from "./components/AnimatedCards/AnimatedCards";
// import Grid from "./components/grid/Grid";
// import HomePage from "./components/homePage/Home";
// import * as geolib from "geolib";

// import "aos/dist/aos.css";
// import AOS from "aos";
// import { useEffect } from "react";

// import Blogs from "./components/blogs/Blogs";
// import LocationDetails from "./components/Location/LocationDetails";
// import SearchOptions from "./components/searchOptions/SearchOptions";
// export default function Page() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLocation = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };
//         const targetLocation = {
//           latitude: 31.447486543385185,
//           longitude: 73.08379020264066,
//         };

//         const distance = geolib.getDistance(userLocation, targetLocation);
//         console.log(
//           "You are ",
//           distance,
//           "meters away from 31.447486543385185, 73.08379020264066"
//         );
//       },
//       () => {
//         alert("Position could not be determined.");
//       }
//     );
//   }, []);

//   return (
//     <>
//       <HomePage />
//       <HeroSection />
//       <SearchOptions />
//       <Grid />

//       {/* <AnimatedCards/> */}
//       <Blogs />
//       {/* <LocationDetails/> */}
//     </>
//   );
// }
"use client"; 
import React from "react";
import SearchOptions from "./components/searchOptions/SearchOptions";
import Blogs from "./components/blogs/Blogs";
import Grid from "./components/grid/Grid";
import HomePage from "./components/homePage/HomePage";

const page = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default page;
