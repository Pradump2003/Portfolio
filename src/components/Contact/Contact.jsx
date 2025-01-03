import React from "react";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <div id="contact-me" className="flex flex-col items-center p-8 sm:p-16">
        <h1 className="text-white font-castoro font-medium text-3xl sm:text-5xl">
          Contact <span className="text-yellow-500">Me</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-20 mt-8 sm:mt-14 w-full px-4 sm:px-14">
          {/* Address Section */}
          <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
            <h3 className="text-lg sm:text-xl font-bold">Address</h3>
            <p>Room No-141 B-Block Sector 41 Noida</p>
            <p>Uttar Pradesh, India</p>
            <p>PinCode: 201301</p>
          </div>
          {/* Email Section */}
          <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
            <h3 className="text-lg sm:text-xl font-bold">Email Me</h3>
            <a
              href="mailto:pradump2003@gamil.com"
              className="text-yellow-500 break-words"
            >
              pradump2003@gmail.com
            </a>
          </div>
          {/* Phone Section */}
          <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
            <h3 className="text-lg sm:text-xl font-bold">Phone No.</h3>
            <p>+91 7704811041</p>
            <p>+91 8090614414</p>
          </div>
        </div>
      </div>
    </Element>
  );
}
