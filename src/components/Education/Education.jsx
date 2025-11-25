import React from "react";
import { Element } from "react-scroll";

export default function Education() {
  return (
    <Element name="education">
      <div id="education" className="flex flex-col items-center pt-20">
        <h1 className="text-white font-castoro font-medium text-3xl sm:text-5xl">
          Education
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 mt-8 sm:mt-14 px-4 sm:px-14 w-full max-w-5xl text-center sm:text-left">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* B.Tech Details */}
            <div className="font-castoro leading-relaxed">
              <h1 className="text-lg sm:text-xl font-medium">
                Graduate B.Tech - Computer Science and Engineering
              </h1>
              <h3 className="text-base sm:text-lg font-medium">
                Hi-Tech Institute of Engineering & Technology, Ghaziabad
              </h3>
              <p className="text-sm sm:text-base font-normal">
                <span className="font-bold">CGPA:</span> 6.9/10
              </p>
              <p className="text-xs sm:text-sm font-extralight">
                October 2020 - August 2024
              </p>
            </div>
            {/* High School Details */}
            <div className="font-castoro leading-relaxed">
              <h1 className="text-lg sm:text-xl font-medium">
                High School - Science Stream
              </h1>
              <h3 className="text-base sm:text-lg font-medium">
                Patel Memorial Inter College, Atraulia, Azamgarh
              </h3>
              <p className="text-sm sm:text-base font-normal">
                <span className="font-bold">Percentage:</span> 81%
              </p>
              <p className="text-xs sm:text-sm font-extralight">June 2017</p>
            </div>
          </div>
          {/* Right Column */}
          <div>
            {/* Intermediate Details */}
            <div className="font-castoro leading-relaxed">
              <h1 className="text-lg sm:text-xl font-medium">
                Intermediate - Science Stream (Mathematics)
              </h1>
              <h3 className="text-base sm:text-lg font-medium">
                Patel Memorial Inter College, Atraulia, Azamgarh
              </h3>
              <p className="text-sm sm:text-base font-normal">
                <span className="font-bold">Percentage:</span> 71%
              </p>
              <p className="text-xs sm:text-sm font-extralight">April 2019</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
