import bgImage from "../assets/Images/bgimage.jpeg";
import { Element, Link } from "react-scroll";
import Button from "../components/Button/Button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <Element name="Home">
      <div className="min-h-screen flex items-center py-10 md:pt-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:pl-10 sm:px-10 lg:pl-24">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center 
                   items-center md:items-start 
                   text-center md:text-left gap-3 sm:gap-4"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 font-castoro">
              Hello 👋
            </h3>

            <div
              className="font-bold font-castoro 
                        text-2xl sm:text-3xl md:text-5xl 
                        leading-snug"
            >
              <TypeAnimation
                sequence={["I'm Pradum Prajapati"]}
                speed={30}
                repeat={0}
                cursor={false}
                wrapper="span"
                className="text-blue-500"
              />
            </div>

            <p
              className="text-sm sm:text-base md:text-xl 
                      leading-relaxed max-w-sm sm:max-w-md md:max-w-lg
                      text-center md:text-left text-black dark:text-white"
            >
              A passionate Full-Stack Developer skilled in building modern,
              scalable, and high-performance web applications using MERN Stack.
              I focus on clean UI, optimized code, and meaningful user
              experience.
            </p>

            {/* Buttons — wrap on small screens */}
            <div
              className="flex flex-wrap justify-center md:justify-start 
                        gap-4 sm:gap-6 mt-6"
            >
              <a href="/Pradum.pdf" download="Pradum.pdf">
                <Button text="Get My CV" styleType="primary" />
              </a>

              <Link to="my-project" smooth={true} duration={600} offset={-50}>
                <Button text="View Projects" styleType="secondary" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img
              src={bgImage}
              alt="Profile"
              className="rounded-2xl shadow-xl 
                     w-64 sm:w-80 md:w-full 
                     h-64 sm:h-[520px] lg:h-96 object-cover 
                     transition duration-500 group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
