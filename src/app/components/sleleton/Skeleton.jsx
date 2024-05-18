import React from 'react';

const SkeletonCard = () => (
  <div className="flex px-3 py-3 h-[650px] overflow-hidden">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-300" />
      <div className="px-6 py-4">
        <div className="h-8 w-3/4 mb-4 rounded bg-gray-200 dark:bg-gray-300" />
        <div className="h-4 w-full mb-2 rounded bg-gray-200 dark:bg-gray-300" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-300" />
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-2">
        <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-300" />
        <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-300" />
        <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-300" />
        <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-300" />
        <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-300" />
      </div>
    </div>
  </div>
);

const TreeSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-24 h-24">
        <svg
          className="absolute animate-spin-slow w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="#4A5568" strokeWidth="4" />
        </svg>
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,15 60,40 40,40" fill="#48BB78" />
          <polygon points="50,25 65,50 35,50" fill="#48BB78" />
          <polygon points="50,40 70,65 30,65" fill="#48BB78" />
          <rect x="45" y="65" width="10" height="20" fill="#A0AEC0" />
        </svg>
      </div>
    </div>
  );
};

const SkeletonGrid = () => (
  <div className="flex min-h-screen flex-col justify-center py-12 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </div>
);

export { SkeletonCard, TreeSpinner, SkeletonGrid };
