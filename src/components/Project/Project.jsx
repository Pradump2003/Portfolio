import React from "react";
import { Element } from "react-scroll";
import Redbus from "../../assets/Images/redbus.png";
import Hotel from "../../assets/Images/hotel.webp";

export default function Project() {
  return (
    <Element name="my-project">
      <div id="my-project" className="flex flex-col items-center pt-16">
        <h1 className=" mb-14 text-white font-castoro font-medium text-5xl">
          My Projects
        </h1>
        <div className="grid grid-cols-2 w-[800px] h-[500px] bg-gray-100 border-1 border-black rounded-md">
          <div className="flex flex-col items-center justify-center leading-relaxed  bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src={Redbus}
              alt="Project Thumbnail"
              className="w-60 h-60 object-cover rounded-md mb-6"
            />
            <h2 className="text-xl font-castoro text-gray-800">
              Online Bus Booking System <br />
            </h2>
            <h2 className="text-xl font-castoro text-gray-800">
              (Red Bus Clone)
            </h2>
          </div>
          <div className="p-5 text-black font-castoro">
            <h1 className="text-xl"> Red Bus Clone </h1>
            <p className="text-sm font-normal py-5">
              A responsive web application replicating the core functionalities
              of the popular Redbus platform. The project focuses on providing a
              seamless user experience for bus ticket booking, incorporating
              modern design principles and real-world usability features.
            </p>
            <h1 className="text-lg"> Key Features : </h1>
            <ul className="list-disc text-sm font-normal py-5">
              <li>
                {" "}
                <span className="font-bold">User Authentication: </span>Secure
                login and registration functionality.
              </li>
              <li>
                {" "}
                <span className="font-bold">Search and Filter: </span> Advanced
                search options to find buses by source, destination, and date.
              </li>
              <li>
                {" "}
                <span className="font-bold">Booking System: </span> Dynamic seat
                selection and booking confirmation.
              </li>
              <li>
                {" "}
                <span className="font-bold">Responsive Design: </span> Optimized
                for desktop and mobile devices.
              </li>
              <li>
                {" "}
                <span className="font-bold">Tech Stack: </span> HTML, CSS,
                JavaScript, React.js, and Firebase for backend integration.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-2 w-[800px] h-[500px] bg-gray-100 border-1 border-black rounded-md">
            <div className="flex flex-col items-center justify-center leading-relaxed  bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <img
                src={Hotel}
                alt="Project Thumbnail"
                className="w-60 h-60 object-cover rounded-md mb-6"
              />
              <h2 className="text-xl font-castoro text-gray-800">
                Hotel Management System <br />
              </h2>
            </div>
            <div className="p-5 text-black font-castoro">
              <h1 className="text-xl"> Hotel Management System </h1>
              <p className="text-sm font-normal py-5">
                Developed a basic Hotel Management System using C++ to manage
                essential hotel operations, including room reservations, guest
                details, billing, and service records.The project successfully
                demonstrated the practical application of C++ for a real-world
                scenario, improving coding skills and understanding of OOP
                concepts.
              </p>
              <h1 className="text-lg"> Technologies Used : </h1>
              <ul className="list-disc text-sm font-normal py-3">
                <li>
                  {" "}
                  <span className="font-bold">
                    Programming Languages :{" "}
                  </span>{" "}
                  C++
                </li>
                <li>
                  {" "}
                  <span className="font-bold">
                    Concepts Implemented :{" "}
                  </span>{" "}
                  File handling, object-oriented programming (OOP), and basic
                  data structures.
                </li>
              </ul>
              <h1 className="text-lg"> Technologies Used : </h1>
              <ul className="list-disc text-sm font-normal py-3">
                <li>Room booking and availability management.</li>
                <li>Storage and retrieval of guest information.</li>
                <li>Billing module for generating invoices.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
