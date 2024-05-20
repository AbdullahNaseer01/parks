"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SkeletonGrid } from "../../components/sleleton/Skeleton";

const SearchGrid = ({
  fetchData,
  data,
  loading,
  error,
  totalResults,
  itemRenderer,
  currentPage = 1,
  setCurrentPage,
}) => {
  const limit = 10; // Number of items per page
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Fetching data...");
    console.log("Data: ", data);
    console.log("Total results: ", totalResults);
  }, [data]);
  
  const handlePageChange = (page) => {
    if (page !== currentPage) { // Check if clicked page is different from current page
      setCurrentPage(page);
      const start = (page - 1) * limit;
      console.log("Fetching data page", page);
      console.log("Fetching data start", start);
      fetchData(start);
    }
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

  if (loading) {
    return <SkeletonGrid />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto my-8 lg:px-16 px-4">
      <div className="flex justify-center text-2xl md:text-3xl font-bold">
        Search Results
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data && data.length > 0 ? (
          data.map((item, index) => itemRenderer(item, index))
        ) : (
          <></>
        )}
      </div>
      {/* Pagination */}
      {data && (
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
                      currentPage === number ? "bg-[#389B87] text-white" : ""
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
      )}
    </div>
  );
};

export default SearchGrid;
