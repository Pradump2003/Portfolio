import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2ihzbw6",
        "template_avor8p8",
        form.current,
        "-LLfv1XjHNMESPSah"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Try again.");
      });
  };

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
    <Element name="contact">
      <motion.section
        id="contact-me"
        className="flex flex-col items-center px-4 sm:px-0 lg:px-32 pt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* GLASS CONTAINER */}
        <motion.div
          variants={item}
          className="w-full max-w-6xl rounded-xl p-8 sm:p-16 bg-white dark:bg-white/10 backdrop-blur-none dark:backdrop-blur-sm
              border border-black/10 dark:border-white/20 shadow-md text-black dark:text-white"
        >
          {/* Heading INSIDE glass */}
          <motion.h1
            variants={item}
            className="
              mb-10
              font-castoro font-medium
              text-3xl sm:text-5xl
              text-center
            "
          >
            Contact <span className="text-yellow-500">Me</span>
          </motion.h1>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20"
          >
            {/* LEFT INFO */}
            <motion.div
              variants={item}
              className="flex flex-col gap-10 justify-center"
            >
              <motion.div
                variants={item}
                className="font-castoro leading-relaxed text-center sm:text-left flex gap-5 items-center"
              >
                <div>
                  <h1 className="text-3xl text-teal-400">
                    <IoCallOutline />
                  </h1>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">Phone No.</h3>
                  <p className="text-sm sm:text-base">+91 7704811041</p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="font-castoro leading-relaxed text-center sm:text-left flex gap-5 items-center"
              >
                <div>
                  <h1 className="text-3xl text-teal-400">
                    <MdOutlineEmail />
                  </h1>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">Email</h3>
                  <p className="text-sm sm:text-base">pradump2003@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="font-castoro leading-relaxed text-center sm:text-left flex gap-5 items-center"
              >
                <div>
                  <h1 className="text-3xl text-teal-400">
                    <MdOutlineLocationOn />
                  </h1>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">Address</h3>
                  <p className="text-sm sm:text-base">
                    Room No-141 B-Block Sector 41 Noida
                  </p>
                  <p className="text-sm sm:text-base">Uttar Pradesh, India</p>
                  <p className="text-sm sm:text-base">PinCode: 201301</p>
                </div>
              </motion.div>
            </motion.div>

            {/* FORM */}
            <motion.div variants={item}>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-5 w-full max-w-md mx-auto"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                    px-4 py-3 rounded-md font-castoro
                    bg-gray-100 dark:bg-white/5
                    border border-gray-300 dark:border-gray-700
                    text-black dark:text-white
                    focus:border-purple-500 dark:focus:border-purple-400
                    focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
                    transition-all duration-300
                  "
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
                    px-4 py-3 rounded-md font-castoro
                    bg-gray-100 dark:bg-white/5
                    border border-gray-300 dark:border-gray-700
                    text-black dark:text-white
                    focus:border-purple-500 dark:focus:border-purple-400
                    focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
                    transition-all duration-300
                  "
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="
                    px-4 py-3 rounded-md font-castoro resize-none
                    bg-gray-100 dark:bg-white/5
                    border border-gray-300 dark:border-gray-700
                    text-black dark:text-white
                    focus:border-purple-500 dark:focus:border-purple-400
                    focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
                    transition-all duration-300
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    px-4 py-3 rounded-md font-castoro text-lg font-semibold
                    bg-gradient-to-r from-purple-500 to-blue-500
                    dark:from-purple-600 dark:to-indigo-600
                    hover:from-purple-700 hover:to-blue-700
                    dark:hover:from-purple-500 dark:hover:to-indigo-500
                    text-white tracking-wide
                    transition-all duration-300
                    hover:scale-105
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {loading ? "Sending..." : "Send Message 🚀"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Element>
  );
}
