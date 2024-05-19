"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParkDetails } from "../redux/slices/parksSlice";
import { getDistance } from "geolib";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DetailsHeroSection from "../components/detailsHeroSection/DetailsHeroSection";
import LocationDetails from "../components/Location/LocationDetails";
import AnimatedCards from "../components/AnimatedCards/AnimatedCards";
import { TreeSpinner } from "../components/sleleton/Skeleton";
import { GrLocationPin } from "react-icons/gr";
import L from "leaflet"; // Import Leaflet library

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl:
    "https://e7.pngegg.com/pngimages/760/399/png-clipart-map-computer-icons-flat-design-location-logo-location-icon-photography-heart-thumbnail.png", // URL to your custom marker icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Page = ({ params }) => {
  const dispatch = useDispatch();
  const parkDetails = useSelector(
    (state) => state.parks?.parkDetails?.data?.[0]
  );
  const parkLoading = useSelector((state) => state.parks.loading);
  const parkCode = params.id;
  const [distance, setDistance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapRendered, setMapRendered] = useState(false);

  useEffect(() => {
    console.log("Fetching park data...");
    dispatch(fetchParkDetails(parkCode));
  }, [dispatch, parkCode]);

  useEffect(() => {
    console.log("Park details: ", parkDetails);
    if (parkDetails) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;
            setUserLocation([userLatitude, userLongitude]);

            const parkLatitude = parseFloat(parkDetails.latitude);
            const parkLongitude = parseFloat(parkDetails.longitude);

            const distance = getDistance(
              { latitude: userLatitude, longitude: userLongitude },
              { latitude: parkLatitude, longitude: parkLongitude }
            );

            // Convert distance from meters to kilometers
            setDistance((distance / 1000).toFixed(2));
          },
          (error) => {
            console.error("Error getting user location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, [parkDetails]);

  useEffect(() => {
    if (userLocation && parkDetails) {
      setMapRendered(true);
    }
  }, [userLocation, parkDetails]);

  if (parkLoading) return <TreeSpinner />;

  if (!parkDetails) return <div>No park details available.</div>;

  const parkLatitude = parseFloat(parkDetails?.latitude);
  const parkLongitude = parseFloat(parkDetails?.longitude);

  return (
    <div>
      <DetailsHeroSection images={parkDetails?.images} interval={6000} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{parkDetails?.fullName}</h2>
        <p className="my-2">{parkDetails?.description}</p>
        <p>Latitude: {parkDetails?.latitude}</p>
        <p>Longitude: {parkDetails?.longitude}</p>
        <p>Coordinates: {parkDetails?.latLong}</p>
        {distance !== null && <p>Distance from your location: {distance} km</p>}
        <AnimatedCards images={parkDetails?.images} />
        <LocationDetails />
      </div>
      {mapRendered && (
        <div className="h-[300px] p-2 bg-slate-400">
          <MapContainer
            center={userLocation}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            {/* Custom tile layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* User marker */}
            <Marker position={userLocation} icon={customIcon}>
              <Popup>You are here</Popup>
            </Marker>
            {/* Park marker */}
            <Marker position={[parkLatitude, parkLongitude]} icon={customIcon}>
              <Popup>{parkDetails.fullName}</Popup>
            </Marker>
            {/* Polyline */}
            <Polyline
              positions={[userLocation, [parkLatitude, parkLongitude]]}
              color="red"
              weight={2}
              opacity={0.8}
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Page;


// "use client"

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchParkDetails } from "../redux/slices/parksSlice";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Polyline,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import DetailsHeroSection from "../components/detailsHeroSection/DetailsHeroSection";
// import LocationDetails from "../components/Location/LocationDetails";
// import AnimatedCards from "../components/AnimatedCards/AnimatedCards";
// import { TreeSpinner } from "../components/sleleton/Skeleton";
// import { GrLocationPin } from "react-icons/gr";
// import L from "leaflet"; // Import Leaflet library

// // Custom icon for markers
// const customIcon = new L.Icon({
//   iconUrl:
//     "https://e7.pngegg.com/pngimages/760/399/png-clipart-map-computer-icons-flat-design-location-logo-location-icon-photography-heart-thumbnail.png", // URL to your custom marker icon
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const Page = ({ params }) => {
//   const dispatch = useDispatch();
//   const parkDetails = useSelector(
//     (state) => state.parks?.parkDetails?.data?.[0]
//   );
//   const parkLoading = useSelector((state) => state.parks.loading);
//   const parkCode = params.id;
//   const [userLocation, setUserLocation] = useState(null);
//   const [mapRendered, setMapRendered] = useState(false);
//   const [routeCoordinates, setRouteCoordinates] = useState([]);

//   useEffect(() => {
//     console.log("Fetching park data...");
//     dispatch(fetchParkDetails(parkCode));
//   }, [dispatch, parkCode]);

//   useEffect(() => {
//     console.log("Park details: ", parkDetails);
//     if (parkDetails) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const userLatitude = position.coords.latitude;
//             const userLongitude = position.coords.longitude;
//             setUserLocation([userLatitude, userLongitude]);

//             // Fetch route coordinates
//             fetchRouteCoordinates([userLatitude, userLongitude], [
//               parseFloat(parkDetails.latitude),
//               parseFloat(parkDetails.longitude),
//             ]);
//           },
//           (error) => {
//             console.error("Error getting user location: ", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     }
//   }, [parkDetails]);

//   useEffect(() => {
//     if (userLocation && parkDetails) {
//       setMapRendered(true);
//     }
//   }, [userLocation, parkDetails]);

//   const fetchRouteCoordinates = async (start, end) => {
//     // Make API request to routing service (Mapbox Directions API, OSRM, etc.)
//     // Parse the response to get route coordinates
//     const response = await fetch(
//       `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=YOUR_MAPBOX_ACCESS_TOKEN`
//     );
//     const data = await response.json();
//     const route = data.routes[0].geometry.coordinates;
//     setRouteCoordinates(route);
//   };

//   if (parkLoading) return <TreeSpinner />;

//   if (!parkDetails) return <div>No park details available.</div>;

//   return (
//     <div>
//       <DetailsHeroSection images={parkDetails?.images} interval={6000} />
//       <div className="p-4">
//         <h2 className="text-xl font-bold">{parkDetails?.fullName}</h2>
//         <p className="my-2">{parkDetails?.description}</p>
//         <p>Latitude: {parkDetails?.latitude}</p>
//         <p>Longitude: {parkDetails?.longitude}</p>
//         <p>Coordinates: {parkDetails?.latLong}</p>
//         <AnimatedCards images={parkDetails?.images} />
//         <LocationDetails />
//       </div>
//       {mapRendered && (
//         <div className="h-[300px] p-2 bg-slate-400">
//           <MapContainer
//             center={userLocation}
//             zoom={10}
//             style={{ height: "100%", width: "100%" }}
//           >
//             {/* Custom tile layer */}
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {/* User marker */}
//             <Marker position={userLocation} icon={customIcon}>
//               <Popup>You are here</Popup>
//             </Marker>
//             {/* Park marker */}
//             <Marker
//               position={[
//                 parseFloat(parkDetails.latitude),
//                 parseFloat(parkDetails.longitude),
//               ]}
//               icon={customIcon}
//             >
//               <Popup>{parkDetails.fullName}</Popup>
//             </Marker>
//             {/* Route polyline */}
//             <Polyline positions={routeCoordinates} color="blue" />
//           </MapContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
