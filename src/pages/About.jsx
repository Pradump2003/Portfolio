import { motion } from "framer-motion";
import { Element } from "react-scroll";
import profile from "../assets/Images/profile.png";

export default function About() {
  return (
    <Element name="about-me">
      <div className="flex flex-col items-center sm:pt-12">
        <div id="about-me" className="px-6 sm:px-16 lg:pl-28">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-0 mb-8 sm:mb-8 font-castoro font-medium 
                   text-3xl sm:text-5xl text-center"
          >
            About Me
          </motion.h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <motion.img
              src={profile}
              alt="Pradum Profile"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-52 h-52 sm:w-96 sm:h-96 rounded-full object-contain"
            />
          </div>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left"
          >
            I am Pradum Prajapati, a dedicated MERN Stack Developer with a
            strong foundation in full-stack web development. I specialize in
            creating responsive, high-performance applications using MongoDB,
            Express.js, React.js, and Node.js.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left"
          >
            With a B.Tech in Computer Science and Engineering, I have developed
            the ability to design, implement, and deploy scalable solutions that
            deliver meaningful user experiences.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-base sm:text-xl font-castoro leading-relaxed text-center sm:text-left"
          >
            I am seeking opportunities where I can contribute to impactful
            projects and grow as a full-stack engineer.
          </motion.p>
        </div>
      </div>
    </Element>
  );
}
