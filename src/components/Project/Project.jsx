import React from "react";
import { Element } from "react-scroll";
import Redbus from "../../assets/Images/redbus.png";
import Hotel from "../../assets/Images/hotel.webp";
import CryptoTrcaker from "../../assets/Images/bitcoin.jpg";

export default function Project() {
  return (
    <Element name="my-project">
      <div id="my-project" className="flex flex-col items-center pt-20 ">
        <h1 className="mb-10 sm:mb-14 text-white font-castoro font-medium text-3xl sm:text-5xl">
          My Projects
        </h1>
        {/* Red Bus Clone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl bg-gray-100 border border-black rounded-md p-4 sm:p-6">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src={Redbus}
              alt="Project Thumbnail"
              className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md mb-4 sm:mb-6"
            />
            <h2 className="text-lg sm:text-xl font-castoro text-gray-800 text-center">
              Online Bus Booking System <br />
            </h2>
            <h2 className="text-lg sm:text-xl font-castoro text-gray-800 text-center">
              (Red Bus Clone)
            </h2>
          </div>
          <div className="p-4 sm:p-5 text-black font-castoro">
            <h1 className="text-lg sm:text-xl">Red Bus Clone</h1>
            <p className="text-sm sm:text-base font-normal py-3 sm:py-5">
              A responsive web application replicating the core functionalities
              of the popular Redbus platform. The project focuses on providing a
              seamless user experience for bus ticket booking, incorporating
              modern design principles and real-world usability features.
            </p>
            <h1 className="text-base sm:text-lg">Key Features:</h1>
            <ul className="list-disc text-sm sm:text-base font-normal py-3 sm:py-5 pl-4">
              <li>
                <span className="font-bold">User Authentication: </span>Secure
                login and registration functionality.
              </li>
              <li>
                <span className="font-bold">Search and Filter: </span>Advanced
                search options to find buses by source, destination, and date.
              </li>
              <li>
                <span className="font-bold">Booking System: </span>Dynamic seat
                selection and booking confirmation.
              </li>
              <li>
                <span className="font-bold">Responsive Design: </span>Optimized
                for desktop and mobile devices.
              </li>
              <li>
                <span className="font-bold">Tech Stack: </span>HTML, CSS,
                JavaScript, React.js, and Firebase for backend integration.
              </li>
            </ul>
          </div>
        </div>
        {/* CryptoTracker */}
        <div className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl bg-gray-100 border border-black rounded-md p-4 sm:p-6">
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <img
                src={CryptoTrcaker}
                alt="Project Thumbnail"
                className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md mb-4 sm:mb-6"
              />
              <h2 className="text-lg sm:text-xl font-castoro text-gray-800 text-center">
                Crypto Tracker <br />
              </h2>
            </div>
            <div className="p-4 sm:p-5 text-black font-castoro">
              <h1 className="text-lg sm:text-xl">Crypto Tracker</h1>
              <p className="text-sm sm:text-base font-normal py-3 sm:py-5">
                A responsive web application that tracks real-time
                cryptocurrency prices and market trends. The project aims to
                provide users with a clean, informative interface to explore
                live data and trends of various digital currencies.
              </p>
              <h1 className="text-base sm:text-lg">Key Features:</h1>
              <ul className="list-disc text-sm sm:text-base font-normal py-3 sm:py-5 pl-4">
                <li>
                  <span className="font-bold"> Live Price Updates: </span>
                  Real-time data fetching using the CoinGecko API
                </li>
                <li>
                  <span className="font-bold">Search and Filter: </span>
                  Instantly search and sort cryptocurrencies by name, price,
                  market cap, or 24h volume.
                </li>
                <li>
                  <span className="font-bold">Responsive Design: </span>Fully
                  responsive layout optimized for both desktop and mobile
                  screens.
                </li>
                <li>
                  <span className="font-bold">Tech Stack: </span>
                  React.js, Tailwind CSS, JavaScript, Axios for API integration, CoinGecko API.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Hotel Management System */}
        <div className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl bg-gray-100 border border-black rounded-md p-4 sm:p-6">
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <img
                src={Hotel}
                alt="Project Thumbnail"
                className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md mb-4 sm:mb-6"
              />
              <h2 className="text-lg sm:text-xl font-castoro text-gray-800 text-center">
                Hotel Management System
              </h2>
            </div>
            <div className="p-4 sm:p-5 text-black font-castoro">
              <h1 className="text-lg sm:text-xl">Hotel Management System</h1>
              <p className="text-sm sm:text-base font-normal py-3 sm:py-5">
                Developed a basic Hotel Management System using C++ to manage
                essential hotel operations, including room reservations, guest
                details, billing, and service records. The project successfully
                demonstrated the practical application of C++ for a real-world
                scenario, improving coding skills and understanding of OOP
                concepts.
              </p>
              <h1 className="text-base sm:text-lg">Technologies Used:</h1>
              <ul className="list-disc text-sm sm:text-base font-normal py-3 pl-4">
                <li>
                  <span className="font-bold">Programming Languages: </span>C++
                </li>
                <li>
                  <span className="font-bold">Concepts Implemented: </span>File
                  handling, object-oriented programming (OOP), and basic data
                  structures.
                </li>
              </ul>
              <h1 className="text-base sm:text-lg">Features:</h1>
              <ul className="list-disc text-sm sm:text-base font-normal py-3 pl-4">
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
