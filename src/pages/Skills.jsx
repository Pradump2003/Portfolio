import jslogo from "../assets/Images/JavaScript-logo.png";
import python from "../assets/Images/Python.png";
import C from "../assets/Images/C.png";
import Cpp from "../assets/Images/Cpp.png";
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import bootstrap from "../assets/Images/bootstrap.jpeg";
import tailwind from "../assets/Images/tailwing.jpeg";
import react from "../assets/Images/react.jpeg";
import redux from "../assets/Images/redux.jpeg";
import nodeJS from "../assets/Images/nodejs.png";
import express from "../assets/Images/expressjs.webp";
import mongoDB from "../assets/Images/MongoDB1.jpg";
import mysql from "../assets/Images/mysql.png";
import { Element } from "react-scroll";

export default function Skills() {
  return (
    <Element name="skill">
      <div
        id="skill"
        className="flex flex-col justify-center items-center pt-20 "
      >
        <h1 className=" mb-10 text-white font-castoro font-medium  text-3xl sm:text-5xl">
          {" "}
          My Skills
        </h1>
        <h1 className="mb-10 text-white font-castoro font-normal text-2xl">
          {" "}
          Languages
        </h1>
        <ul className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal">
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="Js Image" src={jslogo} className="h-[80px] w-[80px]" />
            <span> JavaScript</span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Python Image"
              src={python}
              className="h-[80px] w-[80px]"
            />
            <span> Python </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="C Image" src={C} className="h-[80px] w-[80px]" />
            <span> C </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="C++ Image" src={Cpp} className="h-[80px] w-[80px]" />
            <span> C++ </span>
          </li>
        </ul>
        <h1 className="m-10 text-white font-castoro font-normal text-2xl">
          Frontend
        </h1>
        <ul className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal">
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="HTML Image" src={html} className="h-[80px] w-[80px]" />
            <span> HTML5</span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="CSS Image" src={css} className="h-[80px] w-[80px]" />
            <span> CSS </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Bootstrap Image"
              src={bootstrap}
              className="h-[80px] w-[80px]"
            />
            <span> Bootstrap </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Tailwind Image"
              src={tailwind}
              className="h-[80px] w-[80px]"
            />
            <span> Tailwind CSS </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="Js Image" src={jslogo} className="h-[80px] w-[80px]" />
            <span> JavaScript</span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Tailwind Image"
              src={react}
              className="h-[80px] w-[80px]"
            />
            <span> ReactJS </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Tailwind Image"
              src={redux}
              className="h-[80px] w-[80px]"
            />
            <span> Redux </span>
          </li>
        </ul>
        <h1 className="m-10 text-white font-castoro font-normal text-2xl">
          Backend
        </h1>
        <ul className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal">
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="NodeJS Image"
              src={nodeJS}
              className="h-[80px] w-[80px]"
            />
            <span> NodeJS </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="Express.js Image"
              src={express}
              className="h-[80px] w-[80px]"
            />
            <span> ExpressJS </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img
              alt="MongoDB Image"
              src={mongoDB}
              className="h-[80px] w-[80px]"
            />
            <span> MongoDB </span>
          </li>
          <li className=" flex flex-col items-center px-4 py-3 gap-2 group hover:scale-110 transition-transform duration-300">
            <img alt="MySQL Image" src={mysql} className="h-[80px] w-[80px]" />
            <span> MySQL </span>
          </li>
        </ul>
      </div>
    </Element>
  );
}
