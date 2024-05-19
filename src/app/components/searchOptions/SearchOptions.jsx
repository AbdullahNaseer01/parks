import React from "react";
import {
  FaHiking,
  FaNewspaper,
  FaCalendarAlt,
  FaClipboardList,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import { LiaCampgroundSolid } from "react-icons/lia";

import Link from "next/link";

const SearchOptions = () => {
  return (
    <>
      <h1 className="flex justify-center text-2xl md:text-3xl font-bold mt-6">
        Also Search
      </h1>
      <div className="container relative z-40 mx-auto mt-6 lg:px-16 px-4">
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          <Link
            href="/search?search=activities"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaHiking className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Activities
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=amenities"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaMapMarkerAlt className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Amenities
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=articles"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaNewspaper className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Articles
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=campgrounds"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <LiaCampgroundSolid className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                campgrounds
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=events"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaCalendarAlt className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Events
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=lessonplans"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaClipboardList className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Lesson Plans
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=thingstodo"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaMapMarkerAlt className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Things to do
              </p>
            </div>
          </Link>
          <Link
            href="/search?search=topics"
            className="block w-1/2 py-10 text-center border lg:w-1/4"
          >
            <div>
              <FaComments className="mx-auto text-green-500 text-3xl" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Topics
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchOptions;
