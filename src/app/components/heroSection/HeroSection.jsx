"use client";
import React, { useState } from "react";
import axios from "axios";
import { fetchParks } from "@/app/redux/slices/parksSlice";
import { useDispatch } from "react-redux";

export const HeroSection = () => {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [parkCode, setParkCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateCode(event.target.value);
  };
  const handleSearch = async () => {
    if (!activity && !stateCode) {
      alert("Please enter a search term");
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
    if (parkCode) {
      params.parkCode = parkCode;
    }
    if (stateCode) {
      params.stateCode = stateCode;
    }

    await dispatch(fetchParks(params));
    setLoading(false);
  };

  return (
    <div className="relative bg-[#f9dd9c]">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-10 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none ">
          Discover amazing features and services that await you.
          
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 " />
              <span className="relative text-[#FA7436]">Explore Now</span>
            </span>
          </h2>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Search by Activity"
              type="text"
              value={activity}
              onChange={handleActivityChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87]  focus:outline-none focus:shadow-outline"
            />
            <select
              value={stateCode}
              onChange={handleStateChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87]  focus:outline-none focus:shadow-outline"
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

              {/* Add more states as needed */}
            </select>
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#389B87] transition duration-200 rounded shadow-md md:w-auto hover:text-[#389B87] bg-[#FEFCFB]  focus:shadow-outline focus:outline-none"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-orange-400 hover:border-orange-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
