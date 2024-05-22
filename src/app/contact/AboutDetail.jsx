import React from "react";
import Card from "./Card";

function AboutDetail() {
  return (
    <>
      <>
        <div className="container relative flex flex-col justify-between h-full lg:px-16 px-4 mx-auto mt-16">
          <p className="mb-1 text-lg text-[#389b87]">THIS IS OUR MISSION...</p>
          <h2 className="mb-1 text-3xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            We believe in Nature <br />{" "}
            <span className="text-[#FFB60A]">Future</span>
          </h2>
          <div className="w-full mt-5">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#389b87] rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-bg-[#389b87] rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Our Mission
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Preserve Nature We aim to protect the natural beauty of
                      national parks for future generations. Educate Visitors We
                      provide information about the ecological and cultural
                      significance of parks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#389b87] rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-[#389b87] rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Our History
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Community Growth We have built a growing community of park
                      enthusiasts and advocates. Achievements From education to
                      conservation, weve reached key milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#389b87] rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-[#389b87] rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Our Team
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Passionate Experts Our team consists of dedicated experts
                      in various fields. Diverse Skills We bring skills in
                      science, education, and digital content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#389b87] rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-[#389b87] rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        How You Can Help
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Donate Your donations support essential conservation and
                      education projects. Volunteer Contribute your time and
                      skills to maintain and improve parks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* source:https://tailwind.besoeasy.com */}
      </>
    </>
  );
}

export default AboutDetail;
