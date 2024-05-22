// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { fetchParkDetails } from "../redux/slices/parksSlice";
// // // import { getDistance } from "geolib";
// // // import {
// // //   MapContainer,
// // //   TileLayer,
// // //   Marker,
// // //   Polyline,
// // //   Popup,
// // // } from "react-leaflet";
// // // import "leaflet/dist/leaflet.css";
// // // import DetailsHeroSection from "../components/detailsHeroSection/DetailsHeroSection";
// // // import LocationDetails from "../components/Location/LocationDetails";
// // // import AnimatedCards from "../components/AnimatedCards/AnimatedCards";
// // // import { TreeSpinner } from "../components/sleleton/Skeleton";
// // // import { GrLocationPin } from "react-icons/gr";
// // // import L from "leaflet";
// // // import Navbar from "../components/navbar/Navbar";

// // // // Custom icon for markers
// // // const customIcon = new L.Icon({
// // //   iconUrl:
// // //     "https://e7.pngegg.com/pngimages/760/399/png-clipart-map-computer-icons-flat-design-location-logo-location-icon-photography-heart-thumbnail.png",
// // //   iconSize: [25, 41],
// // //   iconAnchor: [12, 41],
// // //   popupAnchor: [1, -34],
// // // });

// // // const Page = ({ params }) => {
// // //   const dispatch = useDispatch();
// // //   const parkDetails = useSelector(
// // //     (state) => state.parks?.parkDetails?.data?.[0]
// // //   );
// // //   const parkLoading = useSelector((state) => state.parks.loading);
// // //   const parkCode = params.id;
// // //   const [distance, setDistance] = useState(null);
// // //   const [userLocation, setUserLocation] = useState(null);
// // //   const [mapRendered, setMapRendered] = useState(false);

// // //   useEffect(() => {
// // //     dispatch(fetchParkDetails(parkCode));
// // //   }, [dispatch, parkCode]);

// // //   useEffect(() => {
// // //     if (parkDetails) {
// // //       if (navigator.geolocation) {
// // //         navigator.geolocation.getCurrentPosition(
// // //           (position) => {
// // //             const userLatitude = position.coords.latitude;
// // //             const userLongitude = position.coords.longitude;
// // //             setUserLocation([userLatitude, userLongitude]);

// // //             const parkLatitude = parseFloat(parkDetails.latitude);
// // //             const parkLongitude = parseFloat(parkDetails.longitude);

// // //             const distance = getDistance(
// // //               { latitude: userLatitude, longitude: userLongitude },
// // //               { latitude: parkLatitude, longitude: parkLongitude }
// // //             );

// // //             setDistance((distance / 1000).toFixed(2));
// // //           },
// // //           (error) => {
// // //             console.error("Error getting user location: ", error);
// // //           }
// // //         );
// // //       } else {
// // //         console.error("Geolocation is not supported by this browser.");
// // //       }
// // //     }
// // //   }, [parkDetails]);

// // //   useEffect(() => {
// // //     if (userLocation && parkDetails) {
// // //       setMapRendered(true);
// // //     }
// // //   }, [userLocation, parkDetails]);

// // //   if (parkLoading) return <TreeSpinner />;

// // //   if (!parkDetails) return <div>No park details available.</div>;

// // //   const parkLatitude = parseFloat(parkDetails?.latitude);
// // //   const parkLongitude = parseFloat(parkDetails?.longitude);

// // //   return (
// // //     <div>
// // //       <Navbar styleProps={{ color: "white" }} />
// // //       <DetailsHeroSection images={parkDetails?.images} interval={6000} />
// // //       <div className="lg:px-16 px-4 mt-10">
// // //         <h2 className="text-4xl font-bold">{parkDetails?.fullName}</h2>
// // //         <p className="my-2">{parkDetails?.description}</p>
// // //         <div className="mx-auto">
// // //           <div className="bg-white p-6 rounded-lg shadow-lg w-full">
// // //             <h2 className="text-lg font-semibold mb-4">Activities</h2>
// // //             <div className="flex flex-wrap gap-2">
// // //               {parkDetails?.activities?.map((activity, index) => (
// // //                 <a
// // //                   key={index}
// // //                   href="#"
// // //                   className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm"
// // //                 >
// // //                   {activity.name}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="bg-white p-6 rounded-lg shadow-lg">
// // //           <h2 className="text-lg font-semibold mb-4">
// // //             Weather Details and Guide
// // //           </h2>
// // //           <p className="">{parkDetails?.weatherInfo}</p>
// // //         </div>
// // //         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
// // //           <h2 className="text-lg font-semibold mb-4">Operating Hours</h2>
// // //           <p className="text-gray-600 mb-4">
// // //             {parkDetails?.operatingHours[0]?.description}
// // //           </p>
// // //           <div className="grid grid-cols-2 gap-4">
// // //             {Object.entries(parkDetails?.operatingHours[0]?.standardHours).map(
// // //               ([day, hours], index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="bg-gray-200 p-3 rounded-lg hover:shadow-md transition duration-300"
// // //                 >
// // //                   <p className="font-semibold text-sm">{day}</p>
// // //                   <p className="text-xs">{hours}</p>
// // //                 </div>
// // //               )
// // //             )}
// // //           </div>
// // //         </div>
// // //         <AnimatedCards images={parkDetails?.images} />
// // //         <LocationDetails
// // //           addresses={parkDetails?.addresses}
// // //           phoneNumbers={parkDetails?.contacts?.phoneNumbers}
// // //           emailAddresses={parkDetails?.contacts?.emailAddresses}
// // //         >
// // //           {mapRendered && (
// // //             <div className="h-[450px] w-[650px]">
// // //               <MapContainer
// // //                 center={userLocation}
// // //                 zoom={10}
// // //                 style={{ height: "100%", width: "100%" }}
// // //               >
// // //                 <TileLayer
// // //                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // //                 />
// // //                 <Marker position={userLocation} icon={customIcon}>
// // //                   <Popup>You are here</Popup>
// // //                 </Marker>
// // //                 <Marker
// // //                   position={[parkLatitude, parkLongitude]}
// // //                   icon={customIcon}
// // //                 >
// // //                   <Popup>{parkDetails.fullName}</Popup>
// // //                 </Marker>
// // //                 <Polyline
// // //                   positions={[userLocation, [parkLatitude, parkLongitude]]}
// // //                   color="red"
// // //                   weight={2}
// // //                   opacity={0.8}
// // //                 />
// // //               </MapContainer>
// // //             </div>
// // //           )}
// // //         </LocationDetails>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Page;

"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParkDetails } from "../redux/slices/parksSlice";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import "leaflet/dist/leaflet.css";
import DetailsHeroSection from "../components/detailsHeroSection/DetailsHeroSection";
import LocationDetails from "../components/Location/LocationDetails";
import AnimatedCards from "../components/AnimatedCards/AnimatedCards";
import { TreeSpinner } from "../components/sleleton/Skeleton";
import Navbar from "../components/navbar/Navbar";
import { getDistance } from "geolib";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const Page = ({ params }) => {
  const dispatch = useDispatch();
  const parkDetails = useSelector(
    (state) => state.parks?.parkDetails?.data?.[0]
  );
  const parkLoading = useSelector((state) => state.parks.loading);
  const parkCode = params.id;
  const [distance, setDistance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [route, setRoute] = useState(null);

  useEffect(() => {
    dispatch(fetchParkDetails(parkCode));
  }, [dispatch, parkCode]);

  useEffect(() => {
    if (parkDetails && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          setUserLocation({ lat: userLatitude, lng: userLongitude });

          const parkLatitude = parseFloat(parkDetails.latitude);
          const parkLongitude = parseFloat(parkDetails.longitude);

          const distance = getDistance(
            { latitude: userLatitude, longitude: userLongitude },
            { latitude: parkLatitude, longitude: parkLongitude }
          );

          setDistance((distance / 1000).toFixed(2));
        },
        (error) => {
          console.error("Error getting user location: ", error);
        }
      );
    }
  }, [parkDetails]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdh0EyVyjoHVUhxwjkN82KqBBJt-hdukQ",
    libraries: ["geometry", "drawing"],
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(userLocation);
      map.fitBounds(bounds);
      setMap(map);
    },
    [userLocation]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleFindRoute = () => {
    if (userLocation && parkDetails) {
      setRoute({
        origin: userLocation,
        destination: {
          lat: parseFloat(parkDetails.latitude),
          lng: parseFloat(parkDetails.longitude),
        },
        // destination: { lat: parseFloat(31.278046), lng: parseFloat(72.31176) },
      });
    }
  };

  const handleDirectionsCallback = useCallback((result, status) => {
    if (status === "OK" && result) {
      setRoute(result);
    } else {
      console.error(`Error fetching directions: ${status}`);
    }
  }, []);

  if (parkLoading) return <TreeSpinner />;
  if (!parkDetails) return <div>No park details available.</div>;

  return (
    <div className="text-[#389b87]">
      <Navbar styleProps={{ color: "white" }} />
      <DetailsHeroSection images={parkDetails?.images} interval={6000} />
      <div className="lg:px-16 px-4 mt-10">
        <h2 className="text-4xl font-bold text-[#286a5d]">
          {parkDetails?.fullName}
        </h2>
        <p className="my-2 text-[#64bfa8]">{parkDetails?.description}</p>
        <div className="mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-lg font-semibold mb-4 text-[#286a5d]">
              Activities
            </h2>
            <div className="flex flex-wrap gap-2">
              {parkDetails?.activities?.map((activity, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#64bfa8] text-white hover:bg-[#286a5d] py-1 px-2 rounded-lg text-sm"
                >
                  {activity.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-4 text-[#286a5d]">
            Weather Details and Guide
          </h2>
          <p className="text-[#64bfa8]">{parkDetails?.weatherInfo}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-lg font-semibold mb-4 text-[#286a5d]">
            Operating Hours
          </h2>
          <p className="text-gray-600 mb-4">
            {parkDetails?.operatingHours[0]?.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(parkDetails?.operatingHours[0]?.standardHours).map(
              ([day, hours], index) => (
                <div
                  key={index}
                  className="bg-[#64bfa8] p-3 rounded-lg hover:shadow-md transition duration-300"
                >
                  <p className="font-semibold text-sm text-white">{day}</p>
                  <p className="text-xs text-white">{hours}</p>
                </div>
              )
            )}
          </div>
        </div>
        <AnimatedCards images={parkDetails?.images} />
        <LocationDetails
          addresses={parkDetails?.addresses}
          phoneNumbers={parkDetails?.contacts?.phoneNumbers}
          emailAddresses={parkDetails?.contacts?.emailAddresses}
        >
          {isLoaded && userLocation && (
            <div className="h-[450px] w-full">
              <button
                onClick={handleFindRoute}
                className="bg-[#64bfa8] text-white py-2 px-4 rounded-lg mb-4"
              >
                Find Best Routes
              </button>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {userLocation && <Marker position={userLocation} label="A" />}
                {parkDetails && (
                  <Marker
                    position={{
                      lat: parseFloat(parkDetails.latitude),
                      lng: parseFloat(parkDetails.longitude),
                    }}
                    label="B"
                  />
                )}
                {route && (
                  <>
                    <DirectionsService
                      options={{
                        origin: route.origin,
                        destination: route.destination,
                        travelMode: "DRIVING",
                      }}
                      callback={handleDirectionsCallback}
                    />
                    {route.routes && (
                      <DirectionsRenderer options={{ directions: route }} />
                    )}
                  </>
                )}
              </GoogleMap>
            </div>
          )}
        </LocationDetails>
      </div>
    </div>
  );
};

export default Page;
