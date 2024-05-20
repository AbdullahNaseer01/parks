"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchActivities } from "../redux/slices/activitiesSlice";
import { fetchAmenities } from "../redux/slices/amenitiesSlice";
import { fetchArticles } from "../redux/slices/articalsSlice";
import { fetchCampgrounds } from "../redux/slices/campgroundSlice";
import { fetchEvents } from "../redux/slices/eventsSlice";
import { fetchLessonPlans } from "../redux/slices/lessonPlansSlice";
import { fetchThingsToDo } from "../redux/slices/thingsToDoSlice";
import { fetchTopics } from "../redux/slices/topicsSlice";
import Loading from "../loading";
import SearchGrid from "../components/searchGrid/SearchGrid";
import Link from "next/link";
const SearchComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const searchOptions = {
    // activities: "Activities",
    // amenities: "Amenities",
    articles: "Articles",
    campgrounds: "Campgrounds",
    events: "Events",
    lessonplans: "Lesson Plans",
    thingstodo: "Things to do",
    // topics: "Topics",
  };

  const data = useSelector((state) => {
    console.log("State data:", state);
    switch (selectedOption) {
      case "Activities":
        return state?.activities?.activities?.data;
      case "Amenities":
        return state?.amenities?.amenities?.data;
      case "Articles":
        console.log("Articles state", state?.articles?.data?.data?.data);
        return state?.articles?.data?.data?.data;
      case "Campgrounds":
        console.log("campground state", state?.campground?.campgrounds?.data);
        return state?.campground?.campgrounds?.data;
      case "Events":
        return state?.events?.events?.data;
      case "Lesson Plans":
        return state?.lessonPlans?.lessonPlans?.data;
      case "Things to do":
        return state?.thingsToDo?.thingsToDo?.data;
      case "Topics":
        return state?.topics?.topics?.data;
      default:
        return [];
    }
  });

  const loading = useSelector((state) => {
    console.log("Loading state:", state);
    switch (selectedOption) {
      case "Activities":
        return state?.activities?.loading;
      case "Amenities":
        return state?.amenities?.loading;
      case "Articles":
        return state.articles.loading;
      case "Campgrounds":
        return state?.campground?.loading;
      case "Events":
        return state?.events?.loading;
      case "Lesson Plans":
        return state?.lessonPlans?.loading;
      case "Things to do":
        return state?.thingsToDo?.loading;
      case "Topics":
        return state?.topics?.loading;
      default:
        return false;
    }
  });

  const error = useSelector((state) => {
    console.log("Error state:", state);
    switch (selectedOption) {
      case "Activities":
        return state?.activities?.error;
      case "Amenities":
        return state?.amenities?.error;
      case "Articles":
        return state?.articles?.error;
      case "Campgrounds":
        return state?.campground?.error;
      case "Events":
        return state?.events?.error;
      case "Lesson Plans":
        return state?.lessonPlans?.error;
      case "Things to do":
        return state?.thingsToDo?.error;
      case "Topics":
        return state?.topics?.error;
      default:
        return null;
    }
  });

  const totalResults = useSelector((state) => {
    console.log("Total results state:", state);
    switch (selectedOption) {
      case "Activities":
        return state?.activities?.total;
      case "Amenities":
        return state.amenities?.total;
      case "Articles":
        return state?.articles?.data?.data?.total;
      case "Campgrounds":
        return state?.campground?.campgrounds?.total;
      case "Events":
        console.log("Events total:", state?.events?.total);
        return state?.events?.events?.total;
      case "Lesson Plans":
        return state?.lessonPlans?.lessonPlans?.total;
      case "Things to do":
        return state?.thingsToDo?.thingsToDo?.total;
      case "Topics":
        return state?.topics?.total;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const searchParam = searchParams.get("search");
    setSelectedOption(searchOptions[searchParam] || "");
  }, [searchParams]);

  useEffect(() => {
    document.title = selectedOption ? `Search for ${selectedOption}` : "Search";
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setCurrentPage(0);
    const newOption = event.target.value;
    setSelectedOption(newOption);
    const optionToSearchMap = {
      Activities: "activities",
      Amenities: "amenities",
      Articles: "articles",
      Campgrounds: "campgrounds",
      Events: "events",
      "Lesson Plans": "lessonplans",
      "Things to do": "thingstodo",
      Topics: "topics",
    };
    const newSearch = optionToSearchMap[newOption];
    router.push(`/search?search=${newSearch}`);
  };

  const handleSearchButtonClick = async (start = 0) => {
    // Ensure start is properly handled and converted to a string
    const startValue = typeof start === "object" ? "0" : start.toString();

    const params = {
      limit: "10",
      start: startValue,
    };

    switch (selectedOption) {
      case "Activities":
        await dispatch(fetchActivities(params));
        break;
      case "Amenities":
        await dispatch(fetchAmenities(params));
        break;
      case "Articles":
        await dispatch(fetchArticles(params));
        break;
      case "Campgrounds":
        await dispatch(fetchCampgrounds(params));
        break;
      case "Events":
        await dispatch(fetchEvents(params));
        break;
      case "Lesson Plans":
        await dispatch(fetchLessonPlans(params));
        break;
      case "Things to do":
        await dispatch(fetchThingsToDo(params));
        break;
      case "Topics":
        await dispatch(fetchTopics(params));
        break;
      default:
        break;
    }
  };

  const renderGridItem = (item, index) => {
    console.log("renderGridItem - item:", item);

    const commonCard = (url, imageUrl, title, description, tags) => (
      <Link href={url || "#"} target="_blank" key={index}>
        <div className="flex px-3 py-3 h-[650px] overflow-hidden">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={imageUrl}
              alt={title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {title?.length > 100 ? `${title.substring(0, 97)}...` : title}
              </div>
              <p className="text-gray-700 text-base">
                {description?.length > 250
                  ? `${description?.substring(0, 247)}...`
                  : description}
              </p>
            </div>
            <div className="px-6 py-4">
              {tags.slice(0, 5).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );

    function validateURL(url) {
      // If URL is not available or doesn't start with "https://", return placeholder image URL
      if (!url || !url.startsWith("https://")) {
        return "https://via.placeholder.com/150";
      }
      // If URL is valid, return it as is
      return url;
    }

    switch (selectedOption) {
      case "Activities":
      case "Amenities":
        return commonCard(
          item?.url,
          validateURL(item?.imageUrl),
          item?.name,
          item?.description,
          item?.tags || []
        );
      case "Articles":
        return commonCard(
          item?.url,
          validateURL(item?.listingImage?.url),
          item?.title,
          item?.listingDescription,
          item?.tags || []
        );
      case "Campgrounds":
        return commonCard(
          item?.url,
          validateURL(item?.images[0]?.url),
          item?.name,
          item?.description,
          item?.tags || []
        );
      case "Events":
        const descriptionWithoutTags = item?.description
          ? item.description.replace(/<[^>]*>/g, "")
          : "";
        return commonCard(
          item?.url,
          validateURL(
            "https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/02/06/national-park-service-hero.jpg" ||
              item?.images[0]?.url
          ),
          item?.title,
          descriptionWithoutTags,
          item?.tags || []
        );
      case "Lesson Plans":
        return commonCard(
          item?.url,
          validateURL(item?.imageUrl) ||
            "https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/02/06/national-park-service-hero.jpg",
          item?.title,
          item?.questionObjective,
          item?.subject || []
        );
      case "Things to do":
        return commonCard(
          item?.url,
          validateURL(item?.images[0]?.url),
          item?.title,
          item?.shortDescription,
          item?.tags || []
        );
      case "Topics":
        return commonCard(
          item?.url,
          validateURL(item?.imageUrl),
          item?.title,
          item?.summary,
          item?.tags || []
        );
      default:
        return null;
    }

    function validateURL(url) {
      // Check if URL is valid and starts with "https://"
      return url && url.startsWith("https://") ? url : null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[350px]">
        <Navbar styleProps={{ color: "white" }} />
        <div
          className="absolute top-
          0 left-0 w-full h-[350px]"
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
              onChange={(e) => setSearch(e.target.value)}
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
              onClick={handleSearchButtonClick}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <SearchGrid
          fetchData={(start) => handleSearchButtonClick(start)}
          data={data}
          loading={loading}
          error={error}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalResults={totalResults}
          itemRenderer={renderGridItem}
        />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <SearchComponent />
    </React.Suspense>
  );
};

export default Page;

// switch (selectedOption) {
//   case "Activities":
//     return commonCard(
//       item?.url,
//       item?.imageUrl,
//       item?.name,
//       item?.description,
//       item?.tags || []
//     );
//   case "Amenities":
//     return commonCard(
//       item?.url,
//       item?.imageUrl,
//       item?.name,
//       item?.description,
//       item?.tags || []
//     );
//   case "Articles":
//     return commonCard(
//       item?.url,
//       item?.listingImage?.url,
//       item?.title,
//       item?.listingDescription,
//       item?.tags || []
//     );
//   case "Campgrounds":
//     return commonCard(
//       item?.url,
//       item?.images[0]?.url,
//       item?.name,
//       item?.description,
//       item?.tags || []
//     );
//   case "Events":
//     const descriptionWithoutTags = item?.description
//       ? item.description.replace(/<[^>]*>/g, "")
//       : "";
//     const imageURL = item?.images[0]?.url;
//     const imageURLToUse =
//       imageURL && imageURL.startsWith("https://")
//         ? imageURL
//         : "https://via.placeholder.com/150";
//     return commonCard(
//       item?.url,
//       imageURLToUse,
//       item?.title,
//       descriptionWithoutTags,
//       item?.tags || []
//     );

//   case "Lesson Plans":
//     return commonCard(
//       item?.url,
//       item?.imageUrl ||
//         "https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/02/06/national-park-service-hero.jpg",
//       item?.title,
//       item?.questionObjective,
//       item?.subject || []
//     );
//   case "Things to do":
//     return commonCard(
//       item?.url,
//       item?.images[0]?.url,
//       item?.title,
//       item?.shortDescription,
//       item?.tags || []
//     );
//   case "Topics":
//     return commonCard(
//       item?.url,
//       item?.imageUrl,
//       item?.title,
//       item?.summary,
//       item?.tags || []
//     );
//   default:
//     return null;
// }
