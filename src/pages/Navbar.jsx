import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-neutral/80 dark:bg-black/60 shadow-sm transition-colors duration-500">
      <div className="navbar px-4 sm:px-10">
        {/* Logo */}
        <div className="navbar-start">
          <h1 className="font-castoro font-medium text-base sm:text-xl lg:text-2xl text-yellow-500 cursor-pointer">
            Pradum Prajapati
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end">
          <ul className="hidden sm:flex space-x-6 lg:space-x-8 md:text-sm lg:text-base font-castoro items-center">
            {[
              { to: "Home", label: "Home" },
              { to: "about-me", label: "About" },
              { to: "skill", label: "Skills" },
              { to: "my-project", label: "Projects" },
              { to: "education", label: "Education" },
              { to: "contact-me", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="text-yellow-400"
                  className="cursor-pointer hover:text-yellow-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-2xl hover:scale-110 transition-transform"
              >
                {darkMode ? "🌙" : "🌞"}
              </button>
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
      sm:hidden
      absolute top-full left-0 w-full
      bg-white dark:bg-black
      border-t border-gray-200 dark:border-gray-800
      shadow-lg
      px-6 py-5
      space-y-3
      animate-slideDown
    "
        >
          {[
            { to: "Home", label: "Home" },
            { to: "about-me", label: "About" },
            { to: "skill", label: "Skills" },
            { to: "my-project", label: "Projects" },
            { to: "education", label: "Education" },
            { to: "contact-me", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              activeClass="text-yellow-400"
              className="
          block
          text-base font-medium font-castoro
          text-gray-800 dark:text-gray-200
          px-3 py-2 rounded-md
          hover:bg-yellow-400 hover:text-black
          transition-all duration-300
        "
            >
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-px bg-gray-300 dark:bg-gray-700 my-2" />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleDarkMode(); // 🌗 theme change
              setIsOpen(false); // ❌ close dropdown
            }}
            className="
        flex items-center gap-3
        text-gray-800 dark:text-gray-200
        px-3 py-2 rounded-md
        hover:bg-gray-200 dark:hover:bg-gray-800
        transition-all duration-300
      "
          >
            <span className="text-xl">{darkMode ? "🌞" : "🌙"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
