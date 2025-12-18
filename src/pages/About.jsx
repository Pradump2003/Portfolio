import { Element } from "react-scroll";
import profile from "../assets/Images/profile.png";

export default function About() {
  return (
    <Element name="about-me">
      <div className="flex flex-col items-center sm:pt-12">
        <div id="about-me" className="px-6 sm:px-16 lg:pl-28">
          <h1
            className="mt-6 sm:mt-0 mb-8 sm:mb-8 font-castoro font-medium 
                   text-3xl sm:text-5xl text-center
                   text-black dark:text-white"
          >
            About Me
          </h1>

          <div className="flex justify-center mb-8">
            <img
              src={profile}
              alt="Pradum Profile"
              className="w-52 h-52 sm:w-96 sm:h-96 rounded-full object-contain"
            />
          </div>

          <p className="text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left">
            I am Pradum Prajapati, a dedicated MERN Stack Developer with a
            strong foundation in full-stack web development. I specialize in
            creating responsive, high-performance applications using MongoDB,
            Express.js React.js, and Node.js.
          </p>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left">
            With a B.Tech in Computer Science and Engineering, I have developed
            the ability to design, implement, and deploy scalable solutions that
            deliver meaningful user experiences.
          </p>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left">
            I am seeking opportunities where I can contribute to impactful
            projects and grow as a full-stack engineer.
          </p>
        </div>
      </div>
    </Element>
  );
}
