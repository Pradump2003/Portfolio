import React from "react";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about-me">
      <div id="about-me" className="px-12 pt-12">
        <h1 className="mt-20 mb-12 text-white font-castoro font-medium text-5xl">
          {" "}
          About Me.{" "}
        </h1>
        <p className="text-xl font-castoro leading-relaxed font-normal">
          Hi, I'm Pradum Prajapati, a passionate and self-motivated MERN Stack
          Developer with a strong foundation in web development. I specialize in
          building modern, responsive, and user-friendly web applications using
          MongoDB, Express.js, React.js, and Node.js.
        </p>
        <p className="mt-8 text-xl font-castoro leading-relaxed font-normal">
          I recently completed my B.tech in Computer Science and Engineering
          from Hi-Tech Institute of Engineering and Technology. During my
          academic journey, I developed a keen interest in full-stack
          development and have successfully worked on projects that demonstrate
          my ability to design, build, and deploy scalable applications.
        </p>

        <h1 className="my-10 text-3xl font-castoro">
          {" "}
          What I Bring to the Table -{" "}
        </h1>
        <ul className="list-disc pl-5 space-y-2 text-xl loading-relaxed font-normal font-castoro">
          <li>
            Proficient in creating dynamic user interfaces using React.js and
            managing application state effectively.
          </li>
          <li>
            Experienced in designing and implementing RESTful APIs with Node.js
            and Express.js.
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
        <h1 className="my-10 text-3xl font-castoro"> Career Goals </h1>
        <p className="text-xl font-castoro leading-relaxed font-normal">
          I'm eager to begin my professional journey as a Full-Stack Developer,
          contributing to impactful projects and growing alongside a
          collaborative team. My focus is on leveraging my skills to build
          solutions that enhance user experiences and solve real-world problems.
        </p>
      </div>
    </Element>
  );
}
