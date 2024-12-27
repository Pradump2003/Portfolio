import React from "react";
import { Link, Element } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="navbar bg-neutral ">
        <div className="navbar-start px-10">
          <h1 className="font-castoro font-medium text-2xl text-yellow-500">
            {" "}
            Pradum Prajapati{" "}
          </h1>
        </div>
        <div className="navbar-end gap-8 px-12 font-castoro">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
                className="text-white cursor-pointer hover:text-yellow-500"
              >
                {" "}
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
                {" "}
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
                {" "}
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
                {" "}
                My Projects
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
                {" "}
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
                {" "}
                Contact
              </Link>
            </li>
          </ul>

          {/* <a href="#about-me" className="cursor-pointer  hover:text-yellow-500">
            {" "}
            About Me
          </a> */}
        </div>
      </div>
    </div>
  );
}
