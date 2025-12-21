import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Element name="education">
      <motion.div
        id="education"
        className="flex flex-col items-center pt-10 sm:pt-20 px-4 lg:px-32"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* GLASS CONTAINER */}
        <motion.div
          variants={item}
          className="w-full max-w-6xl rounded-xl p-8 sm:p-12 bg-white dark:bg-white/10 backdrop-blur-none dark:backdrop-blur-sm
              border border-black/10 dark:border-white/20 shadow-md text-black dark:text-white"
        >
          {/* Heading */}
          <motion.h1
            variants={item}
            className="
              mb-8 sm:mb-12
              font-castoro font-medium
              text-3xl sm:text-5xl
              text-center
              text-black dark:text-white
            "
          >
            Education
          </motion.h1>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 text-center sm:text-left"
          >
            {/* LEFT COLUMN */}
            <motion.div variants={item} className="flex flex-col gap-10">
              {/* B.Tech */}
              <motion.div className="font-castoro leading-relaxed">
                <h1 className="text-lg sm:text-xl font-medium">
                  Graduate B.Tech - Computer Science and Engineering
                </h1>
                <h3 className="text-base sm:text-lg text-black/70 dark:text-white/70">
                  Hi-Tech Institute of Engineering & Technology, Ghaziabad
                </h3>
                <p className="text-sm sm:text-base">CGPA: 6.9/10</p>
                <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">
                  October 2020 - August 2024
                </p>
              </motion.div>

              {/* High School */}
              <motion.div className="font-castoro leading-relaxed">
                <h1 className="text-lg sm:text-xl font-medium">
                  High School - Science Stream
                </h1>
                <h3 className="text-base sm:text-lg text-black/70 dark:text-white/70">
                  Patel Memorial Inter College, Atraulia, Azamgarh
                </h3>
                <p className="text-sm sm:text-base">Percentage: 81%</p>
                <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">
                  June 2017
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div variants={item}>
              <motion.div className="font-castoro leading-relaxed">
                <h1 className="text-lg sm:text-xl font-medium">
                  Intermediate - Science Stream (Mathematics)
                </h1>
                <h3 className="text-base sm:text-lg text-black/70 dark:text-white/70">
                  Patel Memorial Inter College, Atraulia, Azamgarh
                </h3>
                <p className="text-sm sm:text-base">Percentage: 71%</p>
                <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">
                  April 2019
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Element>
  );
}
