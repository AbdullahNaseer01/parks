
"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchParks } from "../../redux/slices/parksSlice";
import Link from "next/link";
import { SkeletonGrid } from "../sleleton/Skeleton";

const Grid = () => {
  const dispatch = useDispatch();
  const parksData = useSelector((state) => state.parks?.data?.data?.data || []);
  const searchParams = useSelector((state) => state.parks.data.params || {});
  const parksLoading = useSelector((state) => state.parks.loading);
  const parksError = useSelector((state) => state.parks.error);
  const totalResults = useSelector(
    (state) => state.parks.data?.data?.total || 0
  );
  const limit = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Fetching parks data...");
    console.log("Parks data: ", parksData);
    console.log("Search params: ", searchParams);
    console.log("Total results: ", totalResults);
  }, [parksData]);

  const fetchParksData = async (start = 0) => {
    const params = {
      parkCode: searchParams?.parkCode,
      stateCode: searchParams?.stateCode,
      limit: searchParams?.limit.toString(),
      start: start?.toString(),
    };
    if (searchParams?.q) {
      params.q = searchParams.q;
    }
    await dispatch(fetchParks(params));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const start = (page - 1) * limit;
    fetchParksData(start);
  };

  const totalPages = Math.ceil(totalResults / limit);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      }
    }
    return pages;
  };

  if (parksLoading) {
    return (
      <>
        <SkeletonGrid />
      </>
    );
  }

  if (parksError) {
    return <div>Error: {parksError}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-8 px-2">
      <div className="flex justify-center text-2xl md:text-3xl font-bold">
        Related Tools
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        {parksData.map((park, index) => (
          <Link href={park?.parkCode} key={index}>
            <div className="flex px-3 py-3 h-[650px] overflow-hidden">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={`${park?.images[0]?.url}?w=1080&h=720&fit=crop&auto=format&q=80`}
                  alt={park?.fullName}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {park?.fullName.length > 100
                      ? `${park?.fullName.substring(0, 97)}...`
                      : park?.fullName}
                  </div>
                  <p className="text-gray-700 text-base">
                    {park?.description.length > 250
                      ? `${park?.description.substring(0, 247)}...`
                      : park?.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                  {[
                    ...park.activities.slice(0, 3),
                    ...park.topics.slice(0, 2),
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex items-center space-x-2">
          {currentPage > 1 && (
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 border rounded"
              >
                Back
              </button>
            </li>
          )}
          {getPageNumbers().map((number, index) => (
            <li
              key={index}
              className={`mx-1 ${currentPage === number ? "font-bold" : ""}`}
            >
              {number === "..." ? (
                <span className="px-3 py-1">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(number)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === number ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {number}
                </button>
              )}
            </li>
          ))}
          {currentPage < totalPages && (
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Grid;
