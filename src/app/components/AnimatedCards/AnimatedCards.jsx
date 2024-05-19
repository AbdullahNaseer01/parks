
"use client"
import React, { useEffect } from "react";

const AnimatedCards = ({ images }) => {
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto">
          {images?.map((image, index) => (
            <a key={index} href="#_">
              <img
                src={`${image.url}?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                className={`rounded-xl ${index % 2 === 0 ? "rotate-6" : "-rotate-12"} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                alt={image.title}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCards;
