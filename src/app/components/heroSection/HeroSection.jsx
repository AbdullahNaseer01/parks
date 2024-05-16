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
    <div className="relative bg-orange-400">
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
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over a{" "}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-orange-200" />
              <span className="relative text-orange-900">lazy dog</span>
            </span>
          </h2>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Search by Name"
              type="text"
              value={activity}
              onChange={handleActivityChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-orange-900 focus:border-orange-400 focus:outline-none focus:shadow-outline"
            />
            <select
              value={stateCode}
              onChange={handleStateChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-orange-900 focus:border-orange-400 focus:outline-none focus:shadow-outline"
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              {/* Add more states as needed */}
            </select>
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-orange-900 transition duration-200 rounded shadow-md md:w-auto hover:text-orange-800 bg-orange-200 hover:bg-orange-300 focus:shadow-outline focus:outline-none"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-orange-100 sm:text-sm sm:mx-auto md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
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
