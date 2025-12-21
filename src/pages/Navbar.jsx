import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "Home", label: "Home" },
    { to: "about-me", label: "About" },
    { to: "skill", label: "Skills" },
    { to: "my-project", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact-me", label: "Contact" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-white/80 dark:bg-black/70
        border-b border-black/10 dark:border-white/10
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-castoro font-medium text-lg sm:text-2xl text-yellow-500 cursor-pointer">
          Pradum Prajapati
        </h1>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 items-center justify-end gap-8">
          <ul className="flex items-center gap-8 text-md font-castoro">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="text-yellow-500"
                  className="
            cursor-pointer
            hover:text-yellow-500
            transition-colors
          "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => toggleDarkMode((prev) => !prev)}
            className="text-2xl hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Button */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              toggleDarkMode((prev) => !prev);
              setIsOpen(false);
            }}
            className="sm:hidden text-xl hover:text-yellow-500 transition-colors"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            sm:hidden
            bg-white/90 dark:bg-black/90
            backdrop-blur-md
            border-t border-black/10 dark:border-white/10
            px-6 py-4 space-y-3
            text-black dark:text-white
          "
        >
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="
                block
                font-castoro
                py-2
                hover:text-yellow-500
                transition-colors
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
