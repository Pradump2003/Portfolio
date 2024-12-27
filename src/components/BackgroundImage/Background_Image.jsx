import React from "react";
import bgImage from "../../assets/Images/bgimage.jpeg";
import jslogo from "../../assets/Images/JavaScript-logo.png";
import python from "../../assets/Images/Python.png";
import C from "../../assets/Images/C.png";
import Cpp from "../../assets/Images/Cpp.png";
import html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
import bootstrap from "../../assets/Images/bootstrap.jpeg";
import tailwind from "../../assets/Images/tailwing.jpeg";
import react from "../../assets/Images/react.jpeg";
import redux from "../../assets/Images/redux.jpeg";
import nodeJS from "../../assets/Images/nodejs.png";
import express from "../../assets/Images/expressjs.webp";
import mongoDB from "../../assets/Images/MongoDB1.jpg";
import mysql from "../../assets/Images/mysql.png";
import Redbus from "../../assets/Images/redbus.png";
import Hotel from "../../assets/Images/hotel.webp";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

export default function BackgroundImage() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen ">
        <div className="flex flex-col justify-center gap-4 m-12">
          <h3 className="text-2xl text-red-500 font-semibold">Hello..</h3>
          <h1 className="flex text-3xl text-white font-medium leading-relaxed font-castoro">
            I'm Pradum Prajapati <br />
            a passionate Full-Stack Developer <br />
            specializing in building modern and <br />
            scalable web applications.
          </h1>
          <div className="flex flex-row gap-8 mt-12">
            <Button text="More About me" styleType="primary" />
            <a
              href="public/Pradum.pdf"
              download="Pradum.pdf"
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              <Button text="Get My CV" styleType="secondary" />
            </a>
          </div>
        </div>
        <img alt="Background Image" src={bgImage} className="h-screen w-full" />
      </div>
      <div className="p-12">
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
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-18 mb-10 text-white font-castoro font-medium text-5xl">
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
      <div className="flex flex-col items-center p-16">
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
      <div className="flex flex-col items-center ">
        <h1 className=" text-white font-castoro font-medium text-5xl">
          Education
        </h1>
        <div className="grid grid-cols-2 gap-20 ml-20 mt-14 mr-14">
          <div className="flex flex-col gap-10">
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                Graduate B.tech - Computer Science and Engineering
              </h1>
              <h3 className="text-base font-medium">
                Hi-Tech Institute of Engineering & Technology Ghaziabad
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">CGPA : </span> 6.9/10
              </p>
              <p className="text-xs font-extralight">
                October 2020 - August 2024
              </p>
            </div>
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                High School - Science Stream
              </h1>
              <h3 className="text-base font-medium">
                Patel memorial Inter College Atraulia Azamgarh
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">Percentage : </span> 81%
              </p>
              <p className="text-xs font-extralight"> June 2017</p>
            </div>
          </div>
          <div>
            <div className="font-castoro leading-relaxed">
              <h1 className="text-xl font-medium">
                Intermediate - Science Stream (Mathematics)
              </h1>
              <h3 className="text-base font-medium">
                Patel memorial Inter College Atraulia Azamgarh
              </h3>
              <p className="text-sm font-normal">
                <span className="font-bold ">Percentage : </span> 71%
              </p>
              <p className="text-xs font-extralight"> April 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-14">
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
      <Footer />
    </>
  );
}
