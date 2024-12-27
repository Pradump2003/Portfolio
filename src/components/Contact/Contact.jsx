import React from "react";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <div id="contact-me" className="flex flex-col items-center p-16">
        <h1 className="text-white font-castoro font-medium text-5xl">
          Contact <span className="text-yellow-500">Me</span>
        </h1>
        <div className="grid grid-cols-3 gap-20 mx-14 mt-14">
          <div className="flex flex-col font-castoro leading-relaxed text-center gap-1">
            <h3 className="text-xl font-bold"> Address</h3>
            <p> Room No-141 B-Block Sector 41 Noida</p>
            <p> Uttar Pradesh, India</p>
            <p> PinCode : 201301</p>
          </div>
          <div className="flex flex-col font-castoro leading-relaxed text-center gap-1">
            <h3 className="text-xl font-bold"> Email Me</h3>
            <a href="mailto:pradump2003@gamil.com" className="text-yellow-500">
              pradump2003@gmail.com
            </a>
          </div>
          <div className="flex flex-col font-castoro leading-relaxed text-center gap-1">
            <h3 className="text-xl font-bold"> Phone No.</h3>
            <p> +917704811041 </p>
            <p> +918090614414 </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
