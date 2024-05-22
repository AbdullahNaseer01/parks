// "use client"
// import React, { useEffect } from "react";

// const AnimatedCards = ({ images }) => {
//   useEffect(() => {
//     console.log(images);
//   }, [images]);

//   return (
//     <section className="bg-zinc-50 overflow-hidden">
//       <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
//         <div className="flex flex-col sm:flex-row mx-auto">
//           {images?.map((image, index) => (
//             <a key={index} href="#_">
//               <img
//                 src={`${image.url}?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
//                 className={`rounded-xl ${index % 2 === 0 ? "rotate-6" : "-rotate-12"} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
//                 alt={image.title}
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedCards;

"use client"; 
import React, { useEffect } from "react";

const AnimatedCards = ({ images }) => {
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    // <section className="bg-zinc-50 overflow-hidden">
    <div className="section">
      <h1 className="text-4xl font-bold text-center pt-12 lg:pt-24">
        Park Gallery
      </h1>
      <div className=" mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
          {images?.map((image, index) => (
            <div key={index} className="relative rounded overflow-hidden">
              <img
                src={`${image.url}?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={image.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    // </section>
  );
};

export default AnimatedCards;
