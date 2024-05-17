"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParkDetails } from "../redux/slices/parksSlice";
import AnimatedCards from "../components/AnimatedCards/AnimatedCards";
import LocationDetails from "../components/Location/LocationDetails";
import DetailsHeroSection from "../components/detailsHeroSection/DetailsHeroSection";

const Page = ({ params }) => {
  const dispatch = useDispatch();
  const parkDetails = useSelector(
    (state) => state.parks?.parkDetails?.data?.[0]
  );
  const parkCode = params.id;

  useEffect(() => {
    console.log("Fetching park data...");
    dispatch(fetchParkDetails(parkCode));
  }, [dispatch, parkCode]);

  useEffect(() => {
    console.log("Park details: ", parkDetails);
  }, [parkDetails]);

  return (
    <div>
      {parkDetails ? (
        <div>
          <DetailsHeroSection images={parkDetails?.images} interval={5000} />
          <h2>{parkDetails.fullName}</h2>
          <p>Description: {parkDetails.description}</p>
          <AnimatedCards images={parkDetails?.images} />
          <LocationDetails />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
