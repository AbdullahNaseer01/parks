"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/slices/articalsSlice";
import { TreeSpinner } from "../sleleton/Skeleton";
import Link from "next/link";

function Blogs() {
  const dispatch = useDispatch();
  const articles = useSelector(
    (state) => state?.articles?.data?.data?.data || []
  );
  const loading = useSelector((state) => state?.articles?.loading || false);
  const error = useSelector((state) => state?.articles?.error || null);

  const [activity, setActivity] = useState(null);
  const [stateCode, setStateCode] = useState(null);

  useEffect(() => {
    const params = {
      limit: "10",
      start: "0",
    };
    if (activity) {
      params.q = activity;
    }
    if (stateCode) {
      params.stateCode = stateCode;
    }

    dispatch(fetchArticles(params));
  }, [dispatch, activity, stateCode]);

  if (loading) {
    return <TreeSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderMainArticle = (article) => (
    <div className="sm:col-span-6 lg:col-span-5">
      <Link href={""} className="">
        <div
          className="h-56 bg-cover text-center overflow-hidden"
          style={{
            backgroundImage: `url(${article.listingImage?.url})`,
          }}
          title={article.title}
        ></div>
      </Link>
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="lg:pl-16">
          <Link
            href={article?.url}
            target="_blank"
            className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {article.category || "Article"}
          </Link>
          <Link
            href={article?.url}
            target="_blank"
            className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {article.title}
          </Link>
          <p className="text-gray-700 text-xs mt-2">
            {article?.listingDescription || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );

  const renderSecondaryArticles = (articles) => (
    <div className="sm:col-span-6 lg:col-span-4">
      {articles.map((article, index) => (
        <div key={index} className="flex items-start mb-3 pb-3">
          <Link
            href={article?.url}
            target="_blank"
            className="inline-block mr-3"
          >
            <div
              className="w-20 h-20 bg-cover bg-center"
              style={{
                backgroundImage: `url(${article.listingImage?.url})`,
              }}
            ></div>
          </Link>
          <div className="text-sm">
            <p className="text-gray-600 text-xs">
              {new Date(article.date).toLocaleDateString()}
            </p>
            <Link
              href={article?.url}
              target="_blank"
              className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
            >
              {article.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSideArticle = (article) => (
    <div className="sm:col-span-12 lg:col-span-3">
      <Link href={article?.url} target="_blank">
        <div
          className="h-56 bg-cover text-center overflow-hidden"
          style={{
            backgroundImage: `url(${article.listingImage?.url})`,
          }}
          title={article.title}
        ></div>
      </Link>
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div>
          <Link
            href={article?.url}
            target="_blank"
            className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {article.category || "Article"}
          </Link>
          <Link
            href={article?.url}
            target="_blank"
            className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {article.title}
          </Link>
          <p className="text-gray-700 text-xs mt-2">
            {article.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto p-5 sm:p-10 md:p-16 relative lg:px-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        {articles[0] && renderMainArticle(articles[0])}
        {articles.length > 1 && renderSecondaryArticles(articles.slice(1, 5))}
        {articles[5] && renderSideArticle(articles[5])}
      </div>
      {articles.length > 0 && (
        <Link
          className="text-center flex align-middle justify-center"
          href="https://nationalparks-psi.vercel.app/search?search=articles"
        >
          <button className="bg-[#389B87] hover:bg-[#5db5a4] text-white font-bold py-2 px-4 rounded mt-5">
            View More
          </button>
        </Link>
      )}
    </div>
  );
}

export default Blogs;
