"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchParks } from "../../redux/slices/parksSlice";
import Link from "next/link";

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
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-7xl mx-auto my-8 px-2">
      <div className="flex justify-center text-2xl md:text-3xl font-bold">
        Related Tools
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        {parksData.map((park) => (
          <Link href={park?.parkCode}>
            <article
              key={park?.id}
              className="relative bg-white border rounded shadow-md hover:shadow-teal-400"
            >
              <a className="relative block" href={park.url}>
                <img
                  className="h-48 rounded relative w-full object-cover aspect-video"
                  src={`${park?.images[0].url}?w=1080&h=720&fit=crop&auto=format&q=80`}
                  alt={park?.fullName}
                  loading="lazy"
                />
              </a>
              <div className="p-4">
                <a
                  href={park.url}
                  className="block text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
                >
                  <span>{park?.fullName}</span>
                </a>
                <p className="text-gray-600 two-lines">{park?.description}</p>
                <div className="flex flex-wrap items-center justify-start text-sm gap-2 my-1">
                  <div className="flex items-center gap-2">
                    <span>Pricing type: </span>
                    <span>Freemium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Activities: </span>
                    {/* {park.activities.map(activity => (
            <span key={activity.id}>{activity.name}, </span>
          ))} */}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Topics: </span>
                    {/* {park.topics.map(topic => (
            <span key={topic.id}>{topic.name}, </span>
          ))} */}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>State: {park?.states}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    Contact: {park?.contacts?.phoneNumbers[0]?.phoneNumber}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`mx-1 ${currentPage === number ? "font-bold" : ""}`}
            >
              <button onClick={() => handlePageChange(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grid;
