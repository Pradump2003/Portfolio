import jslogo from "../assets/Images/javascript.png";
import python from "../assets/Images/Python.png";
import C from "../assets/Images/C.png";
import Cpp from "../assets/Images/Cpp.png";
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import bootstrap from "../assets/Images/bootstrap.png";
import tailwind from "../assets/Images/tailwind_css.png";
import react from "../assets/Images/react.png";
import redux from "../assets/Images/redux.png";
import nodeJS from "../assets/Images/nodejs.png";
import express from "../assets/Images/express.png";
import mongoDB from "../assets/Images/mongodb.png";
import mysql from "../assets/Images/sql.png";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Element name="skill">
      <motion.div
        id="skill"
        className="flex flex-col justify-center items-center sm:pt-20 mx-8 sm:mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="mt-16 sm:mt-0 mb-8 sm:mb-12 font-castoro font-medium 
               text-3xl sm:text-5xl text-center"
        >
          My Skills
        </motion.h1>

        {/* Languages */}
        <motion.h2
          variants={item}
          className="mb-10 font-castoro font-normal text-2xl"
        >
          Languages
        </motion.h2>

        <motion.ul
          variants={container}
          className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal"
        >
          {[
            { img: jslogo, name: "JavaScript" },
            { img: python, name: "Python" },
            { img: C, name: "C" },
            { img: Cpp, name: "C++" },
          ].map((skill, i) => (
            <motion.li
              key={i}
              variants={item}
              className="flex flex-col items-center px-4 py-3 gap-2
                     group hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[60px] w-[60px] md:h-[90px] md:w-[90px]
           transition-transform duration-300 ease-out
           hover:scale-110"
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Frontend */}
        <motion.h2
          variants={item}
          className="m-10 font-castoro font-normal text-2xl"
        >
          Frontend
        </motion.h2>

        <motion.ul
          variants={container}
          className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal"
        >
          {[
            { img: html, name: "HTML5" },
            { img: css, name: "CSS" },
            { img: bootstrap, name: "Bootstrap" },
            { img: tailwind, name: "Tailwind CSS" },
            { img: jslogo, name: "JavaScript" },
            { img: react, name: "ReactJS" },
            { img: redux, name: "Redux" },
          ].map((skill, i) => (
            <motion.li
              key={i}
              variants={item}
              className="flex flex-col items-center px-4 py-3 gap-2
                     group hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[60px] w-[60px] md:h-[90px] md:w-[90px]
           transition-transform duration-300 ease-out
           hover:scale-110"
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Backend */}
        <motion.h2
          variants={item}
          className="m-10 font-castoro font-normal text-2xl"
        >
          Backend
        </motion.h2>

        <motion.ul
          variants={container}
          className="flex flex-wrap justify-center gap-3 text-base font-castoro font-normal"
        >
          {[
            { img: nodeJS, name: "NodeJS" },
            { img: express, name: "ExpressJS" },
            { img: mongoDB, name: "MongoDB" },
            { img: mysql, name: "MySQL" },
          ].map((skill, i) => (
            <motion.li
              key={i}
              variants={item}
              className="flex flex-col items-center px-4 py-3 gap-2
                     group hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[60px] w-[60px] md:h-[90px] md:w-[90px]
           transition-transform duration-300 ease-out
           hover:scale-110"
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Element>
  );
}
