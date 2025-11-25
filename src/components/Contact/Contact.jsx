import { Element } from "react-scroll";
import React, { useRef, useState } from "react";
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
        className="flex flex-col items-center px-8 sm:px-16 py-16"
      >
        <h1 className="text-white font-castoro font-medium text-3xl sm:text-5xl">
          Contact <span className="text-yellow-500">Me</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 mt-8 sm:mt-14 w-full px-4 sm:px-28">
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
            className="flex flex-col gap-5 mt-12 sm:mt-0"
            ref={form}
            onSubmit={sendEmail}
            style={{ maxWidth: "400px" }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded-md shadow-lg font-castoro"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded-md shadow-lg font-castoro"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              cols={50}
              className="px-3 py-3 rounded-md shadow-lg font-castoro "
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-red-500 px-2 py-3 rounded-md font-castoro text-black font-bold text-lg hover:from-blue-800 hover:to-red-800 duration-300 hover:text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
}
