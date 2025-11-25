import React from "react";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about-me">
      <div className="flex flex-col items-center pt-20">
        <div id="about-me" className="px-4 sm:px-12">
          <h1 className="mt-16 sm:mt-0 mb-8 sm:mb-12 text-white font-castoro font-medium text-3xl sm:text-5xl text-center sm:text-center">
            About Me
          </h1>
          <p className="text-base sm:text-xl font-castoro leading-relaxed font-normal text-center sm:text-left">
            Hi, I'm Pradum Prajapati, a passionate and self-motivated MERN Stack
            Developer with a strong foundation in web development. I specialize
            in building modern, responsive, and user-friendly web applications
            using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl font-castoro leading-relaxed font-normal text-center sm:text-left">
            I recently completed my B.tech in Computer Science and Engineering
            from Hi-Tech Institute of Engineering and Technology. During my
            academic journey, I developed a keen interest in full-stack
            development and have successfully worked on projects that
            demonstrate my ability to design, build, and deploy scalable
            applications.
          </p>

          <h1 className="my-8 sm:my-10 text-2xl sm:text-3xl font-castoro text-center sm:text-left">
            What I Bring to the Table
          </h1>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-xl leading-relaxed font-normal font-castoro  sm:text-left">
            <li>
              Proficient in creating dynamic user interfaces using React.js and
              managing application state effectively.
            </li>
            <li>
              Experienced in designing and implementing RESTful APIs with
              Node.js and Express.js.
            </li>
            <li>
              Skilled in MongoDB for database design, optimization, and
              integration.
            </li>
            <li>
              Knowledge of version control systems like Git and collaboration
              tools like GitHub.
            </li>
            <li>
              Passionate about writing clean, maintainable code and continuously
              learning new technologies.
            </li>
          </ul>

          <h1 className="my-8 sm:my-10 text-2xl sm:text-3xl font-castoro text-center sm:text-left">
            Career Goals
          </h1>
          <p className="text-base sm:text-xl font-castoro leading-relaxed font-normal text-center sm:text-left">
            I'm eager to begin my professional journey as a Full-Stack
            Developer, contributing to impactful projects and growing alongside
            a collaborative team. My focus is on leveraging my skills to build
            solutions that enhance user experiences and solve real-world
            problems.
          </p>
        </div>
      </div>
    </Element>
  );
}
