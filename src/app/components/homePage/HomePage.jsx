// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { fetchParks } from "@/app/redux/slices/parksSlice";
// import Grid from "@/app/components/grid/Grid";

// import Navbar from "@/app/components/navbar/Navbar";
// import { toast } from "react-toastify";
// import SearchOptions from "../searchOptions/SearchOptions";
// import Blogs from "../blogs/Blogs";

// const Carousel = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1547974996-050bf23b6196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D",
//     "https://images.unsplash.com/photo-1502856755506-d8626589ef19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfHx8MA%3D%3D",
//     "https://images.unsplash.com/photo-1614207794460-e6d26156d408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D",
//   ];

//   const dispatch = useDispatch();
//   const [activity, setActivity] = useState("");
//   const [stateCode, setStateCode] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleActivityChange = (event) => {
//     setActivity(event.target.value);
//   };

//   const handleStateChange = (event) => {
//     setStateCode(event.target.value);
//   };

//   const handleSearch = async () => {
//     if (!activity && !stateCode) {
//       toast.error("Please enter a search term");
//       return;
//     }
//     setLoading(true);
//     const params = {
//       limit: "10",
//       start: "0",
//     };
//     if (activity) {
//       params.q = activity;
//     }
//     if (stateCode) {
//       params.stateCode = stateCode;
//     }

//     await dispatch(fetchParks(params));
    
//     setLoading(false);
//   };

//   return (
//     <Swiper
//       spaceBetween={30}
//       effect={"fade"}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       modules={[EffectFade, Autoplay]}
//       style={{ width: "100%", height: "100vh" }}
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative w-full h-full ">
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex flex-col lg:items-start justify-center bg-black bg-opacity-50 text-white ">
//               {/* <h1 className="text-5xl font-bold leading-tight mb-4 lg:text-7xl text-justify lg:w-[45%] lg:text-start lg:px-16 px-4">
//                 It’s a Big World Out There,{" "}
//                 <span className="text-[#FFB60A]">Go Explore</span>
//               </h1>
//               <p className="text-lg text-gray-300 mb-8 lg:text-3xl lg:px-16 px-4">
//                 Discover amazing features and services that await you.
//               </p> */}
//               <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 lg:text-justify lg:w-[45%] lg:px-16 px-4">
//                 It’s a Big World Out There,{" "}
//                 <span className="text-[#FFB60A]">Go Explore</span>
//               </h1>
//               <p className="text-base text-gray-300 mb-8 lg:mb-0 lg:text-3xl lg:px-16 px-4">
//                 Discover amazing features and services that await you.
//               </p>

//               <form className="flex flex-col items-center w-full mt-8 md:flex-row md:px-0 lg:px-16 px-4">
//                 <input
//                   placeholder="Search by Activity"
//                   type="text"
//                   value={activity}
//                   onChange={handleActivityChange}
//                   className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
//                 />
//                 <select
//                   value={stateCode}
//                   onChange={handleStateChange}
//                   className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
//                 >
//                   <option value="">Select State</option>
//                   <option value="AL">Alabama</option>
//                   <option value="AK">Alaska</option>
//                   <option value="AZ">Arizona</option>
//                   <option value="AR">Arkansas</option>
//                   <option value="CA">California</option>
//                   <option value="CO">Colorado</option>
//                   <option value="CT">Connecticut</option>
//                   <option value="DE">Delaware</option>
//                   <option value="FL">Florida</option>
//                   <option value="GA">Georgia</option>
//                   <option value="HI">Hawaii</option>
//                   <option value="ID">Idaho</option>
//                   <option value="IL">Illinois</option>
//                   <option value="IN">Indiana</option>
//                   <option value="IA">Iowa</option>
//                   <option value="KS">Kansas</option>
//                   <option value="KY">Kentucky</option>
//                   <option value="LA">Louisiana</option>
//                   <option value="ME">Maine</option>
//                   <option value="MD">Maryland</option>
//                   <option value="MA">Massachusetts</option>
//                   <option value="MI">Michigan</option>
//                   <option value="MN">Minnesota</option>
//                   <option value="MS">Mississippi</option>
//                   <option value="MO">Missouri</option>
//                   <option value="MT">Montana</option>
//                   <option value="NE">Nebraska</option>
//                   <option value="NV">Nevada</option>
//                   <option value="NH">New Hampshire</option>
//                   <option value="NJ">New Jersey</option>
//                   <option value="NM">New Mexico</option>
//                   <option value="NY">New York</option>
//                   <option value="NC">North Carolina</option>
//                   <option value="ND">North Dakota</option>
//                   <option value="OH">Ohio</option>
//                   <option value="OK">Oklahoma</option>
//                   <option value="OR">Oregon</option>
//                   <option value="PA">Pennsylvania</option>
//                   <option value="RI">Rhode Island</option>
//                   <option value="SC">South Carolina</option>
//                   <option value="SD">South Dakota</option>
//                   <option value="TN">Tennessee</option>
//                   <option value="TX">Texas</option>
//                   <option value="UT">Utah</option>
//                   <option value="VT">Vermont</option>
//                   <option value="VA">Virginia</option>
//                   <option value="WA">Washington</option>
//                   <option value="WV">West Virginia</option>
//                   <option value="WI">Wisconsin</option>
//                   <option value="WY">Wyoming</option>
//                 </select>
//                 <button
//                   type="button"
//                   onClick={handleSearch}
//                   className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#389B87] transition duration-200 rounded shadow-md md:w-auto hover:text-[#389B87] bg-[#FEFCFB] focus:shadow-outline focus:outline-none"
//                   disabled={loading}
//                 >
//                   {loading ? "Searching..." : "Search"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default function HomePage() {
//   return (
//     <>
//       <Navbar styleProps={{ color: "white" }} />
//       <Carousel />
//       <SearchOptions />
//       <Grid />
//       <Blogs />
//     </>
//   );
// }


"use client"; 
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { useDispatch } from "react-redux";
import { fetchParks } from "@/app/redux/slices/parksSlice";
import Navbar from "@/app/components/navbar/Navbar";
import Grid from "@/app/components/grid/Grid";
import SearchOptions from "../searchOptions/SearchOptions";
import Blogs from "../blogs/Blogs";
import { toast } from "react-toastify";

const Carousel = ({ onSearch }) => {
  const images = [
    "https://images.unsplash.com/photo-1547974996-050bf23b6196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1502856755506-d8626589ef19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0aW9uYWwlMjBwYXJrc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1614207794460-e6d26156d408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D",
  ];

  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateCode(event.target.value);
  };

  const handleSearch = async () => {
    if (!activity && !stateCode) {
      toast.error("Please enter a search term");
      return;
    }
    setLoading(true);
    const params = {
      limit: "10",
      start: "0",
    };
    if (activity) {
      params.q = activity;
    }
    if (stateCode) {
      params.stateCode = stateCode;
    }

    await dispatch(fetchParks(params));
    setLoading(false);
    onSearch(); // Call the onSearch function passed as a prop
  };

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      style={{ width: "100%", height: "100vh" }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full ">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col lg:items-start justify-center bg-black bg-opacity-50 text-white ">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 lg:text-justify lg:w-[45%] lg:px-16 px-4">
                It’s a Big World Out There,{" "}
                <span className="text-[#FFB60A]">Go Explore</span>
              </h1>
              <p className="text-base text-gray-300 mb-8 lg:mb-0 lg:text-3xl lg:px-16 px-4">
                Discover amazing features and services that await you.
              </p>

              <form className="flex flex-col items-center w-full mt-8 md:flex-row md:px-0 lg:px-16 px-4">
                <input
                  placeholder="Search by Activity"
                  type="text"
                  value={activity}
                  onChange={handleActivityChange}
                  className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
                />
                <select
                  value={stateCode}
                  onChange={handleStateChange}
                  className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#389B87] transition duration-200 rounded shadow-md md:w-auto hover:text-[#389B87] bg-[#FEFCFB] focus:shadow-outline focus:outline-none"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </form>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function HomePage() {
  const gridRef = useRef(null);

  const handleSearch = () => {
    gridRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar styleProps={{ color: "white" }} />
      <Carousel onSearch={handleSearch} />
      <SearchOptions />
      <div ref={gridRef}>
        <Grid />
      </div>
      <Blogs />
    </>
  );
}
