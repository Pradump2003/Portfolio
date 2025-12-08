import { Element } from "react-scroll";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // stop page reload
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

  return (
    <Element name="contact">
      <div
        id="contact-me"
        className="flex flex-col items-center px-8 sm:px-0 lg:px-16 py-20"
      >
        <h1
          className="font-castoro font-medium text-3xl sm:text-5xl 
               text-black dark:text-white"
        >
          Contact <span className="text-yellow-500">Me</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 mt-8 sm:mt-14 w-full px-4 sm:px-20 lg:px-28">
          {/* Address Section */}
          {/* <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
              <h3 className="text-lg sm:text-xl font-bold">Address</h3>
              <p>Room No-141 B-Block Sector 41 Noida</p>
              <p>Uttar Pradesh, India</p>
              <p>PinCode: 201301</p>
            </div> */}
          {/* Phone Section */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
              <h3 className="text-lg sm:text-xl font-bold">Phone No.</h3>
              <p>+91 7704811041</p>
              <p>+91 8090614414</p>
            </div>
            <div className="flex flex-col font-castoro leading-relaxed text-center sm:text-left gap-2">
              <h3 className="text-lg sm:text-xl font-bold">Address</h3>
              <p>Room No-141 B-Block Sector 41 Noida</p>
              <p>Uttar Pradesh, India</p>
              <p>PinCode: 201301</p>
            </div>
          </div>
          <form
            className="flex flex-col gap-5 mt-12 sm:mt-0 w-full max-w-md mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-md font-castoro 
               bg-white/10 dark:bg-white/5 
               border border-gray-300 dark:border-gray-700 
               focus:border-purple-500 dark:focus:border-purple-400
               focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
               backdrop-blur-md transition-all duration-300
               text-black dark:text-white shadow-md"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-md font-castoro 
               bg-white/10 dark:bg-white/5 
               border border-gray-300 dark:border-gray-700 
               focus:border-purple-500 dark:focus:border-purple-400
               focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
               backdrop-blur-md transition-all duration-300
               text-black dark:text-white shadow-md"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 rounded-md font-castoro 
               bg-white/10 dark:bg-white/5 
               border border-gray-300 dark:border-gray-700 
               focus:border-purple-500 dark:focus:border-purple-400
               focus:shadow-[0_0_8px_rgba(168,85,247,0.6)]
               backdrop-blur-md transition-all duration-300
               text-black dark:text-white shadow-md resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-md font-castoro text-lg font-semibold
               bg-gradient-to-r from-purple-500 to-blue-500 
               dark:from-purple-600 dark:to-indigo-600
               hover:from-purple-700 hover:to-blue-700 
               dark:hover:from-purple-500 dark:hover:to-indigo-500
               shadow-lg shadow-purple-500/20 dark:shadow-purple-600/30
               text-white tracking-wide
               duration-300 transform hover:scale-105 
               disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
}
