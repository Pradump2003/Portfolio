import React from "react";
import { Link, Element } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="navbar bg-neutral">
        <div className="navbar-start pl-4 sm:px-10">
          <h1 className="font-castoro font-medium text-base sm:text-xl lg:text-2xl text-yellow-500">
            Pradum Prajapati
          </h1>
        </div>
        <div className="navbar-end px-4 sm:px-10">
          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6 lg:space-x-8 md:text-sm lg:text-base font-castoro">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="my-project"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="contact-me"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              id="menu-toggle"
              className="text-white focus:outline-none"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className="flex flex-col bg-neutral px-4 py-2 sm:hidden text-sm"
      >
        <Link
          to="Home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2 "
        >
          Home
        </Link>
        <Link
          to="about-me"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2"
        >
          About
        </Link>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2"
        >
          Skills
        </Link>
        <Link
          to="my-project"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2"
        >
          My Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2"
        >
          Education
        </Link>
        <Link
          to="contact-me"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-yellow-400"
          className="text-white cursor-pointer hover:text-yellow-500 py-2"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
