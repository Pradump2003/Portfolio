import React from "react";
import { Element } from "react-scroll";

export default function Education() {
  return (
    <Element name="education">
      <div id="education" className="flex flex-col items-center pt-16 ">
        <h1 className=" text-white font-castoro font-medium text-5xl">
          Education
        </h1>
        <div className="grid grid-cols-2 gap-20 ml-20 mt-14 mr-14">
          <div className="flex flex-col gap-10">
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                Graduate B.tech - Computer Science and Engineering
              </h1>
              <h3 className="text-base font-medium">
                Hi-Tech Institute of Engineering & Technology Ghaziabad
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">CGPA : </span> 6.9/10
              </p>
              <p className="text-xs font-extralight">
                October 2020 - August 2024
              </p>
            </div>
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                High School - Science Stream
              </h1>
              <h3 className="text-base font-medium">
                Patel memorial Inter College Atraulia Azamgarh
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">Percentage : </span> 81%
              </p>
              <p className="text-xs font-extralight"> June 2017</p>
            </div>
          </div>
          <div>
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                Intermediate - Science Stream (Mathematics)
              </h1>
              <h3 className="text-base font-medium">
                Patel memorial Inter College Atraulia Azamgarh
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">Percentage : </span> 71%
              </p>
              <p className="text-xs font-extralight"> April 2019</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
