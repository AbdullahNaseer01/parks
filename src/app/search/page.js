// "use client"
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar/Navbar";
// import { useSearchParams } from "next/navigation";

// const Page = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams.get("search");
//   const [selectedOption, setSelectedOption] = useState("");

//   // Mapping search query to select option
//   useEffect(() => {
//     const searchToOptionMap = {
//       activities: "Activities",
//       amenities: "Amenities",
//       articles: "Articles",
//       campgrounds: "campgrounds",
//       events: "Events",
//       "lesson-plans": "Lesson Plans",
//       "things-to-do": "Things to do",
//       topics: "Topics",
//     };

//     setSelectedOption(searchToOptionMap[search] || "");
//   }, [search]);

//   // Use useEffect to log the search value when it changes
//   useEffect(() => {
//     console.log(search);
//   }, [search]);

//   // Update the title based on selected option or search query
//   useEffect(() => {
//     const pageTitle = selectedOption ? `Search for ${selectedOption}` : search ? `Search for ${search}` : "Search";
//     document.title = pageTitle;
//   }, [selectedOption, search]);

//   return (
//     <div className="min-h-screen">
//       <div className="relative h-[350px]">
//         <Navbar />
//         <div
//           className="absolute top-0 left-0 w-full h-[350px]"
//           style={{
//             backgroundImage: `url(https://preview.redd.it/national-park-4k-3840x2160-by-a-i-v0-g4crddfnmt9a1.jpg?auto=webp&s=5e92a3bb0952435a962a9071dc0f6e4bcf95d996)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             zIndex: -1,
//           }}
//         />
//         <div className="flex flex-col items-center pt-24 gap-4">
//           <p className="text-4xl md:text-6xl font-extrabold text-white">
//             {search || selectedOption ? `Search for ${search || selectedOption}` : "Search"}
//           </p>
//           <form className="flex flex-col items-center w-full mt-8 md:flex-row md:px-0 lg:px-16 px-4">
//             <input
//               placeholder="Search by Activity"
//               type="text"
//               className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
//             />
//             <select
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
//             >
//               {/* Options */}
//               <option value="">Select Category</option>
//               <option value="articles">Articles</option>
//               <option value="activities">Activities</option>
//               <option value="amenities">Amenities</option>
//               <option value="campgrounds">campgrounds</option>
//               <option value="events">Events</option>
//               <option value="lesson-plans">Lesson Plans</option>
//               <option value="things-to-do">Things to do</option>
//               <option value="topics">Topics</option>
//             </select>
//             <button
//               type="button"
//               className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#389B87] transition duration-200 rounded shadow-md md:w-auto hover:text-[#389B87] bg-[#FEFCFB] focus:shadow-outline focus:outline-none"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//       <div>
//         <p>1212</p>
//       </div>
//     </div>
//   );
// };

// export default Page;



"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar"; // Assuming Navbar is a separate component
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedOption, setSelectedOption] = useState("");

  const searchOptions = {
    activities: "Activities",
    amenities: "Amenities",
    articles: "Articles",
    campgrounds: "campgrounds",
    events: "Events",
    "lesson-plans": "Lesson Plans",
    "things-to-do": "Things to do",
    topics: "Topics",
  };

  useEffect(() => {
    const searchParam = searchParams.get("search");
    setSearch(searchParam || "");
    const searchToOptionMap = {
      activities: "Activities",
      amenities: "Amenities",
      articles: "Articles",
      campgrounds: "campgrounds",
      events: "Events",
      "lesson-plans": "Lesson Plans",
      "things-to-do": "Things to do",
      topics: "Topics",
    };

    setSelectedOption(searchToOptionMap[searchParam] || "");
  }, [searchParams]);

  useEffect(() => {
    document.title = selectedOption ? `Search for ${selectedOption}` : "Search";
  }, [selectedOption]);

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    const searchToOptionMap = {
      activities: "Activities",
      amenities: "Amenities",
      articles: "Articles",
      campgrounds: "campgrounds",
      events: "Events",
      "lesson-plans": "Lesson Plans",
      "things-to-do": "Things to do",
      topics: "Topics",
    };

    setSelectedOption(searchToOptionMap[newSearch] || "");
    router.push(`/search?search=${newSearch}`);
  };

  const handleSelectChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    const optionToSearchMap = {
      Activities: "activities",
      Amenities: "amenities",
      Articles: "articles",
      campgrounds: "campgrounds",
      Events: "events",
      "Lesson Plans": "lesson-plans",
      "Things to do": "things-to-do",
      Topics: "topics",
    };
    const newSearch = optionToSearchMap[newOption];
    setSearch(newSearch);
    router.push(`/search?search=${newSearch}`);
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[350px]">
        <Navbar />
        <div
          className="absolute top-0 left-0 w-full h-[350px]"
          style={{
            backgroundImage: `url(https://preview.redd.it/national-park-4k-3840x2160-by-a-i-v0-g4crddfnmt9a1.jpg?auto=webp&s=5e92a3bb0952435a962a9071dc0f6e4bcf95d996)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
        <div className="flex flex-col items-center pt-24 gap-4">
          <p className="text-4xl md:text-6xl font-extrabold text-white">
            {selectedOption ? `Search for ${selectedOption}` : "Search"}
          </p>
          <form className="flex flex-col items-center w-full mt-8 md:flex-row md:px-0 lg:px-16 px-4">
            <input
              placeholder="Search by Activity"
              type="text"
              value={search}
              onChange={handleSearchChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
            />
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-[#389B87] focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Category</option>
              {Object.entries(searchOptions).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#389B87] transition duration-200 rounded shadow-md md:w-auto hover:text-[#389B87] bg-[#FEFCFB] focus:shadow-outline focus:outline-none"
              onClick={handleSearchChange} // Assuming button click triggers search as well
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        {/* Replace this with your search results component or logic */}
        <p>1212</p>
      </div>
    </div>
  );
};

export default Page;
