"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/slices/articalsSlice";
import { TreeSpinner } from "../sleleton/Skeleton";

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
    return <TreeSpinner/>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderMainArticle = (article) => (
    <div className="sm:col-span-6 lg:col-span-5">
      <a href="#">
        <div
          className="h-56 bg-cover text-center overflow-hidden"
          style={{
            backgroundImage: `url(${article.listingImage?.url})`,
          }}
          title={article.title}
        ></div>
      </a>
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="lg:pl-16">
          <a
            href="#"
            className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {article.category || "Category"}
          </a>
          <a
            href="#"
            className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {article.title}
          </a>
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
          <a href="#" className="inline-block mr-3">
            <div
              className="w-20 h-20 bg-cover bg-center"
              style={{
                backgroundImage: `url(${article.listingImage?.url})`,
              }}
            ></div>
          </a>
          <div className="text-sm">
            <p className="text-gray-600 text-xs">
              {new Date(article.date).toLocaleDateString()}
            </p>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
            >
              {article.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSideArticle = (article) => (
    <div className="sm:col-span-12 lg:col-span-3">
      <a href="#">
        <div
          className="h-56 bg-cover text-center overflow-hidden"
          style={{
            backgroundImage: `url(${article.listingImage?.url})`,
          }}
          title={article.title}
        ></div>
      </a>
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div>
          <a
            href="#"
            className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {article.category || "Category"}
          </a>
          <a
            href="#"
            className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {article.title}
          </a>
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
    </div>
  );
}

export default Blogs;
